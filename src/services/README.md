# Service Layer Documentation

This directory contains all the API service classes for the Aapda Mitra application. The service layer provides a clean, organized way to interact with your backend APIs.

## Structure

### Services
- **auth.service.ts** - Authentication and user management APIs
- **volunteer.service.ts** - Volunteer management APIs
- **training.service.ts** - Training management APIs  
- **dashboard.service.ts** - Dashboard and analytics APIs
- **index.ts** - Main export file for all services

### Types
- **auth.types.ts** - Authentication related TypeScript interfaces
- **volunteer.types.ts** - Volunteer related TypeScript interfaces
- **training.types.ts** - Training related TypeScript interfaces
- **common.types.ts** - Common API response types

### Hooks
- **useAuth.tsx** - React hook for authentication state management

## Usage Examples

### Authentication
```typescript
import { AuthService } from '../services';

// Login
try {
  const response = await AuthService.login({ email, password });
  if (response.success) {
    AuthService.setTokens(response.data.token, response.data.refreshToken);
  }
} catch (error) {
  console.error('Login failed:', error);
}

// Get current user
const userResponse = await AuthService.getCurrentUser();
if (userResponse.success) {
  console.log('Current user:', userResponse.data);
}

// Logout
await AuthService.logout();
```

### Using Auth Hook
```typescript
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      // Handle error
    }
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <div>Welcome, {user?.name}</div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};
```

### Volunteer Management
```typescript
import { VolunteerService } from '../services';

// Get volunteers with filters
const volunteers = await VolunteerService.getVolunteers({
  state: 'Delhi',
  trainingStatus: 'completed',
  page: 1,
  limit: 10
});

// Create new volunteer
const newVolunteer = await VolunteerService.createVolunteer({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  state: 'Delhi',
  district: 'New Delhi',
  organization: 'NGO',
  skills: ['First Aid', 'Rescue'],
  bloodGroup: 'O+',
  qualification: 'Graduate',
  cadre: 'Volunteer'
});

// Bulk upload volunteers
const uploadResult = await VolunteerService.bulkUploadVolunteers({
  state: 'Delhi',
  district: 'New Delhi',
  organization: 'NGO',
  numberOfVolunteers: 50,
  date: '2024-01-15',
  uploadOption: 'file',
  file: selectedFile
});
```

### Training Management
```typescript
import { TrainingService } from '../services';

// Schedule new training
const training = await TrainingService.scheduleTraining({
  state: 'Delhi',
  district: 'New Delhi',
  organization: 'NGO',
  numberOfVolunteers: 25,
  batchNumber: 'B001',
  instituteDetails: {
    name: 'Training Center',
    address: '123 Main St',
    venue: 'Hall A'
  },
  trainersDetails: [{
    name: 'Dr. Smith',
    email: 'smith@example.com',
    phone: '+1234567890',
    qualifications: ['MD', 'Emergency Medicine']
  }],
  startDate: '2024-02-01',
  endDate: '2024-02-03'
});

// Get training statistics
const stats = await TrainingService.getTrainingStatistics();
```

### Dashboard Data
```typescript
import { DashboardService } from '../services';

// Get main dashboard stats
const dashboardStats = await DashboardService.getDashboardStats();

// Get volunteer insights
const insights = await DashboardService.getVolunteerInsights();

// Get financial overview
const financialData = await DashboardService.getFinancialOverview();
```

## Features

### Automatic Authentication
- JWT token management with refresh tokens
- Automatic token injection in API requests
- Automatic logout on token expiration
- Request/response interceptors for error handling

### Type Safety
- Full TypeScript support with interfaces
- Generic API response types
- Proper error handling

### File Upload Support
- FormData handling for bulk operations
- Template download functionality
- Export capabilities with blob responses

### Pagination & Filtering
- Consistent pagination across all list endpoints
- Flexible filtering options
- Search functionality

### Error Handling
- Centralized error handling in axios interceptors
- Consistent error response format
- Automatic redirect on authentication failure

## Integration with Existing Code

The service layer integrates seamlessly with your existing `commonEndpoint` from `src/server/endpoints/common.endpoint.ts`. It uses the same axios instance with interceptors already configured for authentication and error handling.

## Best Practices

1. **Always handle responses**: Check `response.success` before accessing `response.data`
2. **Use proper TypeScript types**: Leverage the provided interfaces for type safety
3. **Error handling**: Wrap API calls in try-catch blocks
4. **Loading states**: Implement loading indicators for async operations
5. **Token management**: Use the `useAuth` hook for authentication state

## Future Enhancements

- Add caching layer for frequently accessed data
- Implement request deduplication
- Add offline support
- Include API rate limiting
- Add request retry logic
