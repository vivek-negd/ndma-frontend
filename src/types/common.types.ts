// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message: string;
  errors?: string[];
}

export interface PaginatedResponse<T = any> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: string[];
  statusCode?: number;
}
