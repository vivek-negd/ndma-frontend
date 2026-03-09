// Volunteer related types
export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  organization: string;
  skills: string[];
  trainingStatus: 'pending' | 'in-progress' | 'completed';
  bloodGroup: string;
  qualification: string;
  cadre: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateVolunteerRequest {
  name: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  organization: string;
  skills: string[];
  bloodGroup: string;
  qualification: string;
  cadre: string;
}

export interface UpdateVolunteerRequest {
  name?: string;
  email?: string;
  phone?: string;
  state?: string;
  district?: string;
  organization?: string;
  skills?: string[];
  trainingStatus?: 'pending' | 'in-progress' | 'completed';
  bloodGroup?: string;
  qualification?: string;
  cadre?: string;
}

export interface BulkVolunteerUploadRequest {
  state: string;
  district: string;
  organization: string;
  numberOfVolunteers: number;
  date: string;
  uploadOption: 'file' | 'manual';
  file?: File;
  volunteers?: CreateVolunteerRequest[];
}

export interface VolunteerFilters {
  state?: string;
  district?: string;
  organization?: string;
  trainingStatus?: 'pending' | 'in-progress' | 'completed';
  skills?: string[];
  bloodGroup?: string;
  search?: string;
  page?: number;
  limit?: number;
}
