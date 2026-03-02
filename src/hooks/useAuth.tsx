import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from '../services';
import { User } from '../types/auth.types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = AuthService.isAuthenticated();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (isAuthenticated) {
          const response = await AuthService.getCurrentUser();
          if (response.success) {
            setUser(response.data);
          } else {
            AuthService.clearTokens();
          }
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        AuthService.clearTokens();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, [isAuthenticated]);

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login({ email, password });
      if (response.success) {
        AuthService.setTokens(response.data.token, response.data.refreshToken);
        setUser(response.data.user);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      AuthService.clearTokens();
      setUser(null);
    }
  };

  const refreshToken = async () => {
    try {
      const { refreshToken: token } = AuthService.getTokens();
      if (token) {
        const response = await AuthService.refreshToken(token);
        if (response.success) {
          AuthService.setTokens(response.data.token, token);
        }
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
