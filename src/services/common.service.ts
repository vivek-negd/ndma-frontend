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
  id: number;
  name: string;
  lgd_code: string | null;
  state_id: number;
  state_name: string;
  volunteer_count: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface DistrictsResponse {
  state: State;
  districts: District[];
  total_districts: number;
  total_volunteers_in_state: number;
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
    // debug removed: console.log(response.data, 'state');
    return response.data;
  }

  static async getStateById(id: string): Promise<ApiResponse<State>> {
    const response = await commonEndpoint.get<ApiResponse<State>>(`/states/${id}`);
    return response.data;
  }

  static async getDistrictsByState(stateId: string): Promise<ApiResponse<DistrictsResponse>> {
    const response = await commonEndpoint.get<ApiResponse<DistrictsResponse>>(`/states/${stateId}/districts`);
    return response.data;
  }

  static async getOrgTypes(): Promise<ApiResponse<OrgType[]>> {
    const response = await commonEndpoint.get<ApiResponse<OrgType[]>>('/organizations/org-types/');
    return response.data;
  }

  static async getTrainingSchedules(day?: number): Promise<ApiResponse<any[]>> {
    const params = day ? `?day=${day}` : '';
    const response = await commonEndpoint.get<ApiResponse<any[]>>(`/training-schedules/${params}`);
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
    
    console.log('🔹 POST /volunteer/bulk-upload/');
    console.log('🔹 Authorization: Bearer', token ? '✅' : '❌');
    console.log('🔹 Content-Type: multipart/form-data');
    
    try {
      const response = await axios.post(
        `${API_BASE_URL}/volunteer/bulk-upload/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': 'true'
          }
        }
      );
      
      console.log('🔹 ✅ Upload successful!');
      console.log('🔹 Response:', response.data);
      return response.data;
      
    } catch (error: any) {
      console.error('🔹 ❌ Upload failed!');
      console.error('🔹 Status:', error.response?.status);
      console.error('🔹 Error:', error.response?.data || error.message);
      throw error;
    }
  }

  // Download volunteer bulk upload template
  // GET /api/v1/volunteer/bulk-upload/template/
  // Header: Authorization: Bearer {JWT_TOKEN}
  // Response: Excel file (.xlsx)
  static async downloadVolunteerTemplate(): Promise<void> {
    const token = localStorage.getItem('token');
    const apiUrl = `${API_BASE_URL}/volunteer/bulk-upload/template/`;
    
    console.log('🔹 GET /volunteer/bulk-upload/template/');
    console.log('🔹 Authorization: Bearer', token ? '✅' : '❌');
    
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const blob = await response.blob();
      console.log('🔹 Blob:', blob.size, 'bytes');
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'volunteer_bulk_upload_template.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('🔹 ✅ Download completed');
      
    } catch (error: any) {
      console.error('🔹 ❌ Download failed:', error.message);
      throw error;
    }
  }

  // --- Training schedules & session media helpers ---
  static async createTraining(trainingData: any): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.post<ApiResponse<any>>('/training-schedules/', trainingData);
    return response.data;
  }

  static async createDaywiseTraining(trainingData: any): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.post<ApiResponse<any>>('/training-schedules/create_daywise/', trainingData);
    return response.data;
  }

  static async getSessions(trainingId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-schedules/${trainingId}/sessions/`);
    return response.data;
  }

  static async getMediaCount(sessionId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-session-media/session_media_count/?session_id=${sessionId}`);
    return response.data;
  }

  static async uploadSessionPhotos(sessionId: string | number, files: FileList | File[]): Promise<ApiResponse<any>> {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('session_id', String(sessionId));
    Array.from(files as any).forEach((file: File) => {
      formData.append('images', file);
    });

    const response = await axios.post(
      `${API_BASE_URL}/training-session-media/upload_for_session/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(token && { Authorization: `Bearer ${token}` })
        }
      }
    );
    return response.data;
  }

  static async getPhotos(sessionId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-session-media/?session_id=${sessionId}`);
    return response.data;
  }

  static async deletePhoto(photoId: string | number): Promise<ApiResponse<any>> {
    const token = localStorage.getItem('token');
    const response = await axios.delete(
      `${API_BASE_URL}/training-session-media/${photoId}/`,
      { headers: { ...(token && { Authorization: `Bearer ${token}` }) } }
    );
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

  // Download youth organization bulk upload template
  static async downloadYouthOrgTemplate(): Promise<void> {
    const token = localStorage.getItem('token');
    const apiUrl = `${API_BASE_URL}/volunteer/bulk-upload/template/`;
    
    console.log('🔹 GET /volunteer/bulk-upload/template/');
    console.log('🔹 Authorization: Bearer', token ? '✅' : '❌');
    
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true'
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const blob = await response.blob();
      console.log('🔹 Blob:', blob.size, 'bytes');
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'volunteer_bulk_upload_template.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('🔹 ✅ Download completed');
      
    } catch (error: any) {
      console.error('🔹 ❌ Download failed:', error.message);
      throw error;
    }
  }

  // Fetch all users along with privileges for user management
  static async getAllUsersWithPrivileges(): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.get<ApiResponse<any>>('/users/get_all_users_with_privileges/');
    return response.data;
  }

  // Fetch a single user by id (safe GET — no side effects)
  static async getUserById(id: string | number): Promise<ApiResponse<any>> {
    // try generic users endpoint first (less privileged), then fallback to super-admin endpoint
    try {
      const response = await commonEndpoint.get<ApiResponse<any>>(`/users/${id}/`);
      return response.data;
    } catch (err: any) {
      if (err?.response?.status === 403 || err?.response?.status === 404) {
        const response = await commonEndpoint.get<ApiResponse<any>>(`/super-admin/users/${id}/`);
        return response.data;
      }
      throw err;
    }
  }

  // Update a user by id (used for edit)
  static async updateUserById(id: string | number, data: any): Promise<ApiResponse<any>> {
    // Many backends differ in which HTTP method or URL they accept for updates.
    // Try a sequence of candidate endpoints and methods until one succeeds.
    const endpoints = [
      `/users/${id}/`,
      `/users/${id}/update/`,
      `/users/${id}/edit/`,
      `/super-admin/users/${id}/`,
      `/super-admin/users/${id}/update/`,
    ];

    for (const ep of endpoints) {
      // try PATCH
      try {
        const resp = await commonEndpoint.patch<ApiResponse<any>>(ep, data);
        return resp.data;
      } catch (err: any) {
        const status = err?.response?.status;
        // If method not allowed, try POST then PUT as fallbacks for this endpoint
        if (status === 405) {
          console.warn(`PATCH not allowed for ${ep} — trying POST/PUT fallback`);
          try {
            const resp2 = await commonEndpoint.post<ApiResponse<any>>(ep, data);
            return resp2.data;
          } catch (err2: any) {
            // try PUT as last resort
            try {
              const resp3 = await commonEndpoint.put<ApiResponse<any>>(ep, data);
              return resp3.data;
            } catch (err3: any) {
              // move to next endpoint
              console.warn(`POST/PUT also failed for ${ep}`, err3?.response?.data || err3.message || err3);
            }
          }
        } else if (status === 403) {
          // Forbidden on this endpoint — continue to next endpoint (might be a super-admin-only URL)
          console.warn(`Access denied when updating ${ep}:`, err?.response?.data || err.message);
          continue;
        } else if (status === 404) {
          // Not found — try next candidate
          continue;
        } else {
          // Unexpected error — rethrow
          throw err;
        }
      }
    }

    // If we exhausted candidates, throw a generic error
    throw new Error('Update failed: no supported endpoint/method accepted the request');
  }

  // Get training session history
  static async getSessionHistory(batchNumber?: string): Promise<ApiResponse<any>> {
    const params = batchNumber ? `?batch_no=${batchNumber}` : '';
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-schedules/session_history/${params}`);
    return response.data;
  }
}
