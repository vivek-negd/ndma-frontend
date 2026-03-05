import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { ApiResponse, PaginatedResponse } from '../types/common.types';

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
}
