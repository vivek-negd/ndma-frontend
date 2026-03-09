// User related types
export interface User {
  id: number;
  email: string;
  name: string;
  mobile: string | null;
  designation: string | null;
  aadhar: string | null;
  user_role: string;
  role_display: string;
  state_code?: string | null;
  state_id?: number | null;
  state_name?: string | null;
  district_code?: string | null;
  district_id?: number | null;
  district_name?: string | null;
  block_code?: string | null;
  is_active: boolean;
  permissions: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
  success?: boolean;
  message?: string;
  status_code?: number;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  avatar?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}
