import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { Training, CreateTrainingRequest, UpdateTrainingRequest, TrainingFilters, TrainingScheduleRequest } from '../types/training.types';
import { ApiResponse, PaginatedResponse } from '../types/common.types';
import axios from 'axios';
import { API_BASE_URL } from '../config';

export class TrainingService {
  // Basic CRUD operations
  static async getTrainings(filters?: TrainingFilters): Promise<ApiResponse<PaginatedResponse<Training>>> {
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
    
    const response = await commonEndpoint.get<ApiResponse<PaginatedResponse<Training>>>(`/trainings?${params}`);
    return response.data;
  }

  static async getTrainingById(id: string): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.get<ApiResponse<Training>>(`/trainings/${id}`);
    return response.data;
  }

  static async createTraining(trainingData: CreateTrainingRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.post<ApiResponse<Training>>('/trainings', trainingData);
    return response.data;
  }

  static async updateTraining(id: string, trainingData: UpdateTrainingRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.put<ApiResponse<Training>>(`/trainings/${id}`, trainingData);
    return response.data;
  }

  static async deleteTraining(id: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.delete<ApiResponse<void>>(`/trainings/${id}`);
    return response.data;
  }

  // Training scheduling
  static async scheduleTraining(scheduleData: TrainingScheduleRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.post<ApiResponse<Training>>('/trainings/schedule', scheduleData);
    return response.data;
  }

  // Day-specific training methods
  static async createFirstDayTraining(trainingData: CreateTrainingRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.post<ApiResponse<Training>>('/trainings/first-day', trainingData);
    return response.data;
  }

  static async createFourthDayTraining(trainingData: CreateTrainingRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.post<ApiResponse<Training>>('/trainings/fourth-day', trainingData);
    return response.data;
  }

  static async createSeventhDayTraining(trainingData: CreateTrainingRequest): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.post<ApiResponse<Training>>('/trainings/seventh-day', trainingData);
    return response.data;
  }

  // Participant management
  static async addParticipant(trainingId: string, volunteerId: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.post<ApiResponse<void>>(`/trainings/${trainingId}/participants`, { volunteerId });
    return response.data;
  }

  static async removeParticipant(trainingId: string, volunteerId: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.delete<ApiResponse<void>>(`/trainings/${trainingId}/participants/${volunteerId}`);
    return response.data;
  }

  static async getParticipants(trainingId: string): Promise<ApiResponse<any[]>> {
    const response = await commonEndpoint.get<ApiResponse<any[]>>(`/trainings/${trainingId}/participants`);
    return response.data;
  }

  // Training status management
  static async startTraining(id: string): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.put<ApiResponse<Training>>(`/trainings/${id}/start`);
    return response.data;
  }

  static async completeTraining(id: string): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.put<ApiResponse<Training>>(`/trainings/${id}/complete`);
    return response.data;
  }

  static async cancelTraining(id: string, reason?: string): Promise<ApiResponse<Training>> {
    const response = await commonEndpoint.put<ApiResponse<Training>>(`/trainings/${id}/cancel`, { reason });
    return response.data;
  }

  // Statistics and reports
  static async getTrainingStatistics(): Promise<ApiResponse<{
    total: number;
    byType: Record<string, number>;
    byStatus: Record<string, number>;
    byState: Record<string, number>;
    upcoming: number;
    ongoing: number;
    completed: number;
    totalParticipants: number;
  }>> {
    const response = await commonEndpoint.get<ApiResponse<any>>('/trainings/statistics');
    return response.data;
  }

  static async exportTrainingReport(filters?: TrainingFilters): Promise<Blob> {
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
    
    const response = await commonEndpoint.get(`/trainings/export?${params}`);
    return response.data as Blob;
  }

  // Calendar integration
  static async getTrainingCalendar(year: number, month: number): Promise<ApiResponse<{
    date: string;
    trainings: Training[];
  }[]>> {
    const response = await commonEndpoint.get<ApiResponse<any[]>>(`/trainings/calendar/${year}/${month}`);
    return response.data;
  }

  // Session (day) operations for a training schedule
  static async createSession(scheduleId: string | number, sessionData: any): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.post<ApiResponse<any>>(`/training-schedules/${scheduleId}/sessions/`, sessionData);
    return response.data;
  }

  static async uploadSessionMedia(formData: FormData): Promise<ApiResponse<any>> {
    const token = localStorage.getItem('token');
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

  static async getSessionMediaCount(sessionId: string | number): Promise<ApiResponse<{ count: number }>> {
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-session-media/session_media_count/?session_id=${sessionId}`);
    return response.data;
  }

  static async getSessionDetails(scheduleId: string | number, sessionId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.get<ApiResponse<any>>(`/training-schedules/${scheduleId}/sessions/${sessionId}/`);
    return response.data;
  }

  static async deleteSession(scheduleId: string | number, sessionId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.delete<ApiResponse<any>>(`/training-schedules/${scheduleId}/sessions/${sessionId}/`);
    return response.data;
  }

  // Delete a specific media item for a session: DELETE /training-schedules/{scheduleId}/sessions/{sessionId}/{mediaId}/
  static async deleteSessionMedia(scheduleId: string | number, sessionId: string | number, mediaId: string | number): Promise<ApiResponse<any>> {
    const response = await commonEndpoint.delete<ApiResponse<any>>(`/training-schedules/${scheduleId}/sessions/${sessionId}/${mediaId}/`);
    return response.data;
  }

  // Training schedules by role
  static async getTrainingSchedules(role?: 'SDMA' | 'NDMA' | 'SUPER_ADMIN', filters?: any): Promise<ApiResponse<PaginatedResponse<Training>>> {
    const params = new URLSearchParams();
    
    if (role) {
      params.append('role', role);
    } else {
      const userRole = localStorage.getItem('userRole') || 'SDMA';
      params.append('role', userRole);
    }
    
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
    
    const response = await commonEndpoint.get<ApiResponse<PaginatedResponse<Training>>>(`/training-schedules/?${params}`);
    return response.data;
  }
}
