import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { LoginRequest, LoginResponse, RegisterRequest, User, UpdateProfileRequest, ChangePasswordRequest } from '../types/auth.types';
import { ApiResponse } from '../types/common.types';

export class AuthService {
  // Authentication endpoints
  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await commonEndpoint.post<LoginResponse>('/auth/login/', credentials);
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
    // Normalize legacy server role variants
    const normalized = role === 'SUPER_ADMIN' ? 'SUPERADMIN' : role;
    localStorage.setItem('user_role', normalized);
  }

  static getRole(): string | null {
    const role = localStorage.getItem('user_role');
    if (!role) return null;
    return role === 'SUPER_ADMIN' ? 'SUPERADMIN' : role;
  }

  static clearRole(): void {
    localStorage.removeItem('user_role');
  }

  // User data management
  static setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getUser(): User | null {
    const user = localStorage.getItem('user');
    if (!user) return null;
    try {
      const parsed = JSON.parse(user);
      if (parsed && parsed.user_role === 'SUPER_ADMIN') {
        parsed.user_role = 'SUPERADMIN';
        // persist normalized user back to storage
        localStorage.setItem('user', JSON.stringify(parsed));
        localStorage.setItem('user_role', 'SUPERADMIN');
      }
      return parsed;
    } catch {
      return null;
    }
  }

  static clearUser(): void {
    localStorage.removeItem('user');
  }

  // User state information
  static getUserState(): { state_id: number | null; state_name: string | null } {
    const user = AuthService.getUser();
    return {
      state_id: user?.state_id || null,
      state_name: user?.state_name || null
    };
  }

  static getUserDistrict(): { district_id: number | null; district_name: string | null } {
    const user = AuthService.getUser();
    return {
      district_id: user?.district_id || null,
      district_name: user?.district_name || null
    };
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

  // Create user with privilege (used by SUPERADMIN)
  // API Endpoint: POST /api/v1/auth/create_user_with_privilege/
  static async createUserWithPrivilege(payload: any): Promise<ApiResponse<User>> {
    console.log('=== CREATE USER REQUEST ===');
    console.log('Endpoint: /auth/create_user_with_privilege/');
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    try {
      const response = await commonEndpoint.post<ApiResponse<User>>(
        '/auth/create_user_with_privilege/', 
        payload
      );
      console.log('=== CREATE USER SUCCESS ===');
      console.log('Response:', JSON.stringify(response.data, null, 2));
      return response.data;
    } catch (error: any) {
      console.error('=== CREATE USER ERROR ===');
      console.error('Status:', error?.response?.status);
      console.error('Status Text:', error?.response?.statusText);
      console.error('Error Data:', JSON.stringify(error?.response?.data, null, 2));
      console.error('Error Message:', error?.message);
      throw error;
    }
  }
}
