import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { Volunteer, CreateVolunteerRequest, UpdateVolunteerRequest, BulkVolunteerUploadRequest, VolunteerFilters } from '../types/volunteer.types';
import { ApiResponse, PaginatedResponse } from '../types/common.types';

export class VolunteerService {
  // Basic CRUD operations
  static async getVolunteers(filters?: VolunteerFilters): Promise<ApiResponse<PaginatedResponse<Volunteer>>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }
    
    const response = await commonEndpoint.get<ApiResponse<PaginatedResponse<Volunteer>>>(`/volunteers?${params}`);
    return response.data;
  }

  static async getVolunteerById(id: string): Promise<ApiResponse<Volunteer>> {
    const response = await commonEndpoint.get<ApiResponse<Volunteer>>(`/volunteers/${id}`);
    return response.data;
  }

  static async createVolunteer(volunteerData: CreateVolunteerRequest): Promise<ApiResponse<Volunteer>> {
    const response = await commonEndpoint.post<ApiResponse<Volunteer>>('/volunteers', volunteerData);
    return response.data;
  }

  static async updateVolunteer(id: string, volunteerData: UpdateVolunteerRequest): Promise<ApiResponse<Volunteer>> {
    const response = await commonEndpoint.put<ApiResponse<Volunteer>>(`/volunteers/${id}`, volunteerData);
    return response.data;
  }

  static async deleteVolunteer(id: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.delete<ApiResponse<void>>(`/volunteers/${id}`);
    return response.data;
  }

  // Bulk operations
  static async bulkUploadVolunteers(uploadData: BulkVolunteerUploadRequest): Promise<ApiResponse<{ success: number; failed: number; errors: string[] }>> {
    const formData = new FormData();
    
    // Add form fields
    Object.entries(uploadData).forEach(([key, value]) => {
      if (key !== 'file' && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    // Add file if present
    if (uploadData.file) {
      formData.append('file', uploadData.file);
    }

    // Add volunteers data if manual upload
    if (uploadData.volunteers) {
      formData.append('volunteers', JSON.stringify(uploadData.volunteers));
    }

    const response = await commonEndpoint.post<ApiResponse<{ success: number; failed: number; errors: string[] }>>(
      '/volunteers/bulk-upload', 
      formData
    );
    return response.data;
  }

  static async downloadVolunteerTemplate(): Promise<Blob> {
    const response = await commonEndpoint.get('/volunteers/template');
    return response.data as Blob;
  }

  static async exportVolunteers(filters?: VolunteerFilters): Promise<Blob> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }
    
    const response = await commonEndpoint.get(`/volunteers/export?${params}`);
    return response.data as Blob;
  }

  // Statistics and analytics
  static async getVolunteerStatistics(): Promise<ApiResponse<{
    total: number;
    byState: Record<string, number>;
    byDistrict: Record<string, number>;
    byTrainingStatus: Record<string, number>;
    bySkills: Record<string, number>;
    byBloodGroup: Record<string, number>;
    byQualification: Record<string, number>;
    byCadre: Record<string, number>;
  }>> {
    const response = await commonEndpoint.get<ApiResponse<any>>('/volunteers/statistics');
    return response.data;
  }

  // Coverage / Youth organisation records
  static async getCoverage(filters?: Record<string, any>): Promise<ApiResponse<any>> {
    console.log('🔹 getCoverage called with filters:', filters);
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            params.append(key, value.join(','));
          } else {
            params.append(key, String(value));
          }
        }
      });
    }

    const query = params.toString();
    const url = `/volunteer/coverage/${query ? `?${query}` : ''}`;
    console.log('🔹 getCoverage URL:', url);
    console.log('🔹 getCoverage full URL:', `${commonEndpoint.get.toString().match(/baseURL[^}]*/)?.[0]} + ${url}`);
    
    try {
      const response = await commonEndpoint.get<ApiResponse<any>>(url);
      console.log('🔹 getCoverage response status:', response.status);
      console.log('🔹 getCoverage response data:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('🔹 getCoverage error:', error);
      console.error('🔹 getCoverage error status:', error.response?.status);
      console.error('🔹 getCoverage error data:', error.response?.data);
      throw error;
    }
  }

  // Bulk upload history
  static async getBulkUploadSessions(filters?: {
    from_date?: string;
    to_date?: string;
    state?: string;
    district?: string;
    organization?: string;
    status?: 'success' | 'partial' | 'failed';
  }): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const query = params.toString();
    const url = `/volunteer/bulk-upload/sessions/${query ? `?${query}` : ''}`;
    console.log('🔹 getBulkUploadSessions URL:', url);

    try {
      const response = await commonEndpoint.get<ApiResponse<any>>(url);
      console.log('🔹 getBulkUploadSessions response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('🔹 getBulkUploadSessions error:', error);
      throw error;
    }
  }

  static async downloadBulkUploadSession(sessionId: string, sessionDownloadUrl?: string): Promise<Blob> {
    // Use provided session_download_url or construct from sessionId
    const url = sessionDownloadUrl || `/volunteer/export/?bulk_upload_session_id=${sessionId}`;
    console.log('🔹 downloadBulkUploadSession URL:', url);

    const response = await commonEndpoint.get(url, { responseType: 'arraybuffer' });
    return response.data as Blob;
  }

  // Training related
  static async assignToTraining(volunteerId: string, trainingId: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.post<ApiResponse<void>>(`/volunteers/${volunteerId}/assign-training`, { trainingId });
    return response.data;
  }

  static async updateTrainingStatus(volunteerId: string, status: 'pending' | 'in-progress' | 'completed'): Promise<ApiResponse<Volunteer>> {
    const response = await commonEndpoint.put<ApiResponse<Volunteer>>(`/volunteers/${volunteerId}/training-status`, { status });
    return response.data;
  }
}
