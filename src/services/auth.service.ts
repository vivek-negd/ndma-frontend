import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { LoginRequest, LoginResponse, RegisterRequest, User, UpdateProfileRequest, ChangePasswordRequest } from '../types/auth.types';
import { ApiResponse } from '../types/common.types';

export class AuthService {
  // Authentication endpoints
  static async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await commonEndpoint.post<ApiResponse<LoginResponse>>('/auth/login', credentials);
    return response.data;
  }

  static async register(userData: RegisterRequest): Promise<ApiResponse<User>> {
    const response = await commonEndpoint.post<ApiResponse<User>>('/auth/register', userData);
    return response.data;
  }

  static async logout(): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.post<ApiResponse<void>>('/auth/logout');
    return response.data;
  }

  static async refreshToken(refreshToken: string): Promise<ApiResponse<{ token: string; expiresIn: number }>> {
    const response = await commonEndpoint.post<ApiResponse<{ token: string; expiresIn: number }>>('/auth/refresh', { refreshToken });
    return response.data;
  }

  // User profile endpoints
  static async getCurrentUser(): Promise<ApiResponse<User>> {
    const response = await commonEndpoint.get<ApiResponse<User>>('/auth/me');
    return response.data;
  }

  static async updateProfile(userData: UpdateProfileRequest): Promise<ApiResponse<User>> {
    const response = await commonEndpoint.put<ApiResponse<User>>('/auth/profile', userData);
    return response.data;
  }

  static async changePassword(passwordData: ChangePasswordRequest): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.put<ApiResponse<void>>('/auth/change-password', passwordData);
    return response.data;
  }

  static async forgotPassword(email: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.post<ApiResponse<void>>('/auth/forgot-password', { email });
    return response.data;
  }

  static async resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.post<ApiResponse<void>>('/auth/reset-password', { token, newPassword });
    return response.data;
  }

  // Token management
  static setTokens(token: string, refreshToken: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  static getTokens(): { token: string | null; refreshToken: string | null } {
    return {
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken'),
    };
  }

  static clearTokens(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }

  // Role management
  static setRole(role: string): void {
    localStorage.setItem('user_role', role);
  }

  static getRole(): string | null {
    return localStorage.getItem('user_role');
  }

  static clearRole(): void {
    localStorage.removeItem('user_role');
  }

  static isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp > currentTime;
    } catch {
      return false;
    }
  }
}
