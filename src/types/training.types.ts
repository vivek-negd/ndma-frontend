// Training related types
export interface Training {
  id: string;
  title: string;
  description: string;
  type: 'first-day' | 'fourth-day' | 'seventh-day' | 'general';
  state: string;
  district: string;
  organization: string;
  batchNumber: string;
  instituteDetails: {
    name: string;
    address: string;
    venue: string;
  };
  trainersDetails: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  }[];
  startDate: string;
  endDate: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  maxParticipants: number;
  currentParticipants: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTrainingRequest {
  title: string;
  description: string;
  type: 'first-day' | 'fourth-day' | 'seventh-day' | 'general';
  state: string;
  district: string;
  organization: string;
  batchNumber: string;
  instituteDetails: {
    name: string;
    address: string;
    venue: string;
  };
  trainersDetails: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  }[];
  startDate: string;
  endDate: string;
  maxParticipants: number;
}

export interface UpdateTrainingRequest {
  title?: string;
  description?: string;
  type?: 'first-day' | 'fourth-day' | 'seventh-day' | 'general';
  state?: string;
  district?: string;
  organization?: string;
  batchNumber?: string;
  instituteDetails?: {
    name: string;
    address: string;
    venue: string;
  };
  trainersDetails?: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  }[];
  startDate?: string;
  endDate?: string;
  status?: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  maxParticipants?: number;
}

export interface TrainingFilters {
  state?: string;
  district?: string;
  organization?: string;
  type?: 'first-day' | 'fourth-day' | 'seventh-day' | 'general';
  status?: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  startDate?: string;
  endDate?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface TrainingScheduleRequest {
  state: string;
  district: string;
  organization: string;
  numberOfVolunteers: number;
  batchNumber: string;
  instituteDetails: {
    name: string;
    address: string;
    venue: string;
  };
  trainersDetails: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  }[];
  startDate: string;
  endDate: string;
}
