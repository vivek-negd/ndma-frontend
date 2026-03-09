import axios from 'axios';
import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { ApiResponse, PaginatedResponse } from '../types/common.types';
import { API_BASE_URL } from '../config';

export interface State {
  id: string;
  name: string;
  code: string;
  region?: string;
}

export interface StateFilters {
  page?: number;
  limit?: number;
  search?: string;
}

export interface District {
  id: string;
  name: string;
  code?: string;
  state_id: string;
}

export interface OrgType {
  id: string;
  name: string;
  description?: string;
}

export class CommonService {
  static async getStates(filters?: StateFilters): Promise<ApiResponse<PaginatedResponse<State>>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    const query = params.toString();
    const response = await commonEndpoint.get<ApiResponse<PaginatedResponse<State>>>(
      `/states/${query ? `?${query}` : ''}`
    );
    console.log(response.data,"state");
    return response.data;
  }

  static async getStateById(id: string): Promise<ApiResponse<State>> {
    const response = await commonEndpoint.get<ApiResponse<State>>(`/states/${id}`);
    return response.data;
  }

  static async getDistrictsByState(stateId: string): Promise<ApiResponse<District[]>> {
    const response = await commonEndpoint.get<ApiResponse<District[]>>(`/districts/${stateId}`);
    return response.data;
  }

  static async getOrgTypes(): Promise<ApiResponse<OrgType[]>> {
    const response = await commonEndpoint.get<ApiResponse<OrgType[]>>('/organizations/org-types/');
    return response.data;
  }

  static async getTrainingSchedules(): Promise<ApiResponse<any[]>> {
    const response = await commonEndpoint.get<ApiResponse<any[]>>('/training-schedules/');
    return response.data;
  }

  static async createTrainingSchedule(data: any): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.post<ApiResponse<any>>('/training-schedules/', data);
    return response.data;
  }

  static async getStateNameById(stateId: string | number): Promise<string> {
    try {
      const response = await commonEndpoint.get<ApiResponse<State>>(`/states/${stateId}`);
      const data = response.data as any;
      if (data.name) return data.name;
      if (data.data?.name) return data.data.name;
      return String(stateId);
    } catch {
      return String(stateId);
    }
  }

  static async getDistrictNameById(districtId: string | number): Promise<string> {
    try {
      // Try to get from all districts if available
      const response = await commonEndpoint.get<ApiResponse<any>>(`/districts/${districtId}`);
      const data = response.data as any;
      if (data.name) return data.name;
      if (data.data?.name) return data.data.name;
      return String(districtId);
    } catch {
      return String(districtId);
    }
  }

  static async getOrgNameById(orgId: string | number): Promise<string> {
    try {
      const response = await commonEndpoint.get<ApiResponse<any>>(`/organizations/org-types/`);
      const data = response.data as any;
      let orgTypes: any[] = [];
      
      if (data.organization_types && Array.isArray(data.organization_types)) {
        orgTypes = data.organization_types;
      } else if (Array.isArray(data)) {
        orgTypes = data;
      } else if (data.data && Array.isArray(data.data)) {
        orgTypes = data.data;
      }
      
      const org = orgTypes.find((o: any) => o.id === orgId || o.id === parseInt(String(orgId)));
      return org?.name || String(orgId);
    } catch {
      return String(orgId);
    }
  }

  static async uploadVolunteersBulk(formData: FormData): Promise<ApiResponse<any>> {
    const token = localStorage.getItem('token');
    
    // Debug: Log FormData contents
    console.log('=== Bulk Upload Debug ===');
    console.log('FormData contents:');
    for (let pair of (formData as any).entries()) {
      if (pair[1] instanceof File) {
        console.log(`  ${pair[0]}: File(${pair[1].name}, ${pair[1].size} bytes)`);
      } else {
        console.log(`  ${pair[0]}: ${pair[1]}`);
      }
    }
    console.log('Authorization token:', token ? 'Present' : 'Missing');
    console.log('API Base URL:', API_BASE_URL);
    console.log('Full endpoint:', `${API_BASE_URL}/volunteer/bulk-upload/`);
    console.log('========================');
    
    const response = await axios.post(
      `${API_BASE_URL}/volunteer/bulk-upload/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(token && { Authorization: `Bearer ${token}` })
        }
      }
    );
    console.log('Upload response:', response.data);
    return response.data;
  }

  static async uploadYouthOrgBulk(formData: FormData): Promise<ApiResponse<any>> {
    const token = localStorage.getItem('token');
    
    // Debug: Log FormData contents
    console.log('=== Youth Org Bulk Upload Debug ===');
    console.log('FormData contents:');
    for (let pair of (formData as any).entries()) {
      if (pair[1] instanceof File) {
        console.log(`  ${pair[0]}: File(${pair[1].name}, ${pair[1].size} bytes)`);
      } else {
        console.log(`  ${pair[0]}: ${pair[1]}`);
      }
    }
    console.log('Authorization token:', token ? 'Present' : 'Missing');
    console.log('API Base URL:', API_BASE_URL);
    console.log('Full endpoint:', `${API_BASE_URL}/youth-organization/bulk-upload/`);
    console.log('=====================================');
    
    const response = await axios.post(
      `${API_BASE_URL}/youth-organization/bulk-upload/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(token && { Authorization: `Bearer ${token}` })
        }
      }
    );
    console.log('Youth Org Upload response:', response.data);
    return response.data;
  }
}
