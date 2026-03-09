import { commonEndpoint } from '../server/endpoints/common.endpoint';
import { ApiResponse } from '../types/common.types';

export interface DashboardStats {
  volunteers: {
    total: number;
    active: number;
    inTraining: number;
    certified: number;
  };
  trainings: {
    total: number;
    scheduled: number;
    ongoing: number;
    completed: number;
  };
  organizations: {
    total: number;
    active: number;
  };
  states: {
    total: number;
    active: number;
  };
}

export interface NationalOverview {
  volunteers: {
    total: number;
    thisMonth: number;
    growth: number;
  };
  finance: {
    budgetAllocated: number;
    amountSpent: number;
    utilization: number;
  };
  achievements: {
    trainingsCompleted: number;
    volunteersCertified: number;
    disastersResponded: number;
  };
  resources: {
    equipmentDeployed: number;
    facilitiesUtilized: number;
    resourcesAvailable: number;
  };
}

export interface VolunteerInsights {
  genderDistribution: {
    male: number;
    female: number;
    other: number;
  };
  bloodGroupDistribution: {
    'A+': number;
    'A-': number;
    'B+': number;
    'B-': number;
    'AB+': number;
    'AB-': number;
    'O+': number;
    'O-': number;
  };
  qualificationDistribution: Record<string, number>;
  cadreDistribution: Record<string, number>;
  skillsDistribution: Record<string, number>;
  stateDistribution: Record<string, number>;
  districtDistribution: Record<string, number>;
}

export interface FinancialOverview {
  fyData: {
    year: string;
    allocated: number;
    spent: number;
    remaining: number;
  }[];
  categorySplit: {
    training: number;
    equipment: number;
    operations: number;
    administration: number;
    emergency: number;
  };
}

export interface ProgrammeOverview {
  trainingCompletion: {
    month: string;
    planned: number;
    completed: number;
  }[];
  volunteerOnboarding: {
    month: string;
    onboarded: number;
    certified: number;
  }[];
}

export interface DailyStatistics {
  date: string;
  volunteers: number;
  trainings: number;
  activities: number;
  incidents: number;
}

export class DashboardService {
  // Main dashboard statistics
  static async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    const response = await commonEndpoint.get<ApiResponse<DashboardStats>>('/dashboard/stats');
    return response.data;
  }

  static async getNationalOverview(): Promise<ApiResponse<NationalOverview>> {
    const response = await commonEndpoint.get<ApiResponse<NationalOverview>>('/dashboard/national-overview');
    return response.data;
  }

  // Volunteer insights
  static async getVolunteerInsights(): Promise<ApiResponse<VolunteerInsights>> {
    const response = await commonEndpoint.get<ApiResponse<VolunteerInsights>>('/dashboard/volunteer-insights');
    return response.data;
  }

  // Financial data
  static async getFinancialOverview(): Promise<ApiResponse<FinancialOverview>> {
    const response = await commonEndpoint.get<ApiResponse<FinancialOverview>>('/dashboard/financial-overview');
    return response.data;
  }

  // Programme data
  static async getProgrammeOverview(): Promise<ApiResponse<ProgrammeOverview>> {
    const response = await commonEndpoint.get<ApiResponse<ProgrammeOverview>>('/dashboard/programme-overview');
    return response.data;
  }

  // Daily statistics
  static async getDailyStatistics(startDate?: string, endDate?: string): Promise<ApiResponse<DailyStatistics[]>> {
    const params = new URLSearchParams();
    if (startDate) params.append('startDate', startDate);
    if (endDate) params.append('endDate', endDate);
    
    const response = await commonEndpoint.get<ApiResponse<DailyStatistics[]>>(`/dashboard/daily-statistics?${params}`);
    return response.data;
  }

  // Geographic data
  static async getGeographicData(type: 'volunteers' | 'trainings' | 'organizations' | 'incidents'): Promise<ApiResponse<{
    stateCode: string;
    value: number;
    percentage: number;
  }[]>> {
    const response = await commonEndpoint.get<ApiResponse<any[]>>(`/dashboard/geographic/${type}`);
    return response.data;
  }

  // Real-time data
  static async getRealTimeStats(): Promise<ApiResponse<{
    activeVolunteers: number;
    ongoingTrainings: number;
    recentActivities: {
      id: string;
      type: string;
      description: string;
      timestamp: string;
      location: string;
    }[];
  }>> {
    const response = await commonEndpoint.get<ApiResponse<any>>('/dashboard/real-time');
    return response.data;
  }

  // Export and reports
  static async exportDashboardReport(type: 'monthly' | 'quarterly' | 'yearly', period: string): Promise<Blob> {
    const response = await commonEndpoint.get(`/dashboard/export/${type}/${period}`);
    return response.data as Blob;
  }

  // Notifications
  static async getNotifications(): Promise<ApiResponse<{
    id: string;
    type: 'info' | 'warning' | 'error' | 'success';
    title: string;
    message: string;
    timestamp: string;
    read: boolean;
  }[]>> {
    const response = await commonEndpoint.get<ApiResponse<any[]>>('/dashboard/notifications');
    return response.data;
  }

  static async markNotificationAsRead(id: string): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.put<ApiResponse<void>>(`/dashboard/notifications/${id}/read`);
    return response.data;
  }

  static async markAllNotificationsAsRead(): Promise<ApiResponse<void>> {
    const response = await commonEndpoint.put<ApiResponse<void>>('/dashboard/notifications/read-all');
    return response.data;
  }
}
