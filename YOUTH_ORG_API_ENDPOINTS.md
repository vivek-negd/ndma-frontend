# Youth Organization Workflow - API Endpoints Reference

## Overview
This document provides a comprehensive list of all API endpoints used in the Youth Organization Workflow feature, including their purposes, parameters, and where they are called from.

---

## 1. Main API Endpoints for Youth Organization Data

### 1.1 Get Youth Organization Coverage Data
**Endpoint:** `GET /volunteer/coverage/`

**Purpose:** Fetches youth organization records data including state, district, organization type, volunteer count, and date information.

**Service Method:** `VolunteerService.getCoverage(filters?)`
- **File:** [src/services/volunteer.service.ts](src/services/volunteer.service.ts#L112)

**Called From:**
- [YouthOrganisationRecords.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationRecords.tsx#L101) - Main records page component

**Query Parameters:**
- `state` (optional) - Filter by state ID
- `district` (optional) - Filter by district ID
- `organization` (optional) - Filter by organization ID
- Can be combined with any other filter parameters

**Example Usage:**
```typescript
const filters = {
  state: 18,
  district: 180,
  organization: 1
};
const res = await VolunteerService.getCoverage(filters);
```

**Response Format:**
The API returns different response shapes:
1. **Array of records:**
   ```
   [{
     id: string,
     state: string,
     state_name: string,
     state_id: number,
     district: string,
     district_name: string,
     district_id: number,
     organization: string,
     organization_name: string,
     organization_type: string,
     organization_type_code: string,
     organization_id: number,
     volunteers: number,
     volunteers_count: number,
     count: number,
     date: string,
     created_at: string,
     event_date: string,
     media: string[],
     media_urls: string[],
     images: string[]
   }]
   ```

2. **State-level summary:**
   ```
   {
     state_id: number,
     state_name: string,
     total_volunteers: number,
     districts: [{
       district_id: number,
       district_name: string,
       volunteer_count: number
     }]
   }
   ```

3. **Nested response:**
   ```
   {
     data: [{...}] or {
       tabular_format: {
         coverage: [{...}]
       }
     }
   }
   ```

**Used For:**
- Displaying youth organization records in a table
- Calculating statistics:
  - Total Records Count
  - States Covered Count
  - Total Volunteers
  - Total Media Uploaded
- Filtering records by state, district, organization
- Handling role-based access control (SUPERADMIN, SDMA_ADMIN, YOUTH_ORG_ADMIN)

---

## 2. Bulk Upload API Endpoints

### 2.1 Upload Youth Organization Records (Bulk)
**Endpoint:** `POST /youth-organization/bulk-upload/`

**Purpose:** Handles bulk upload of youth organization records from Excel/ZIP files.

**Service Method:** `CommonService.uploadYouthOrgBulk(formData)`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L267)

**Called From:**
- [YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx#L225) - Youth Org Record form
- [BulkYouthOrgUpload.tsx](src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx) - Bulk upload component

**Request Format (Form Data):**
```
file: File (required)
  - Type: .xls, .xlsx, or .zip
  - Required fields in Excel: mis_id, name
  
organization_id: string (required)
  - The organization type ID
  
state_name: string (optional)
  - State name from selected drop-down
  
district_name: string (optional)
  - District name from selected drop-down
  
expected_count: string (optional)
  - Expected number of volunteers in the file
  
date: string (optional)
  - Event/activity date in ISO format
```

**Response Format:**
```json
{
  "created_count": number,
  "error_count": number,
  "warnings": [
    {
      "message": string,
      "type": string
    }
  ],
  "errors": [
    {
      "index": number,
      "data": {
        "mis_id": string,
        "name": string
      },
      "error": string | object
    }
  ]
}
```

**Error Details:**
- Individual row errors are returned in the `errors` array
- Field-level validation errors can be nested objects
- Warnings are non-blocking issues (e.g., row count mismatch)

**Security Features:**
- All volunteers assigned to user's state/district regardless of Excel values
- Authorization header required: `Bearer {JWT_TOKEN}`
- Multi-part form data required

---

### 2.2 Upload Volunteers Bulk (Alternative)
**Endpoint:** `POST /volunteer/bulk-upload/`

**Purpose:** Alternative endpoint for bulk uploading volunteers (also used by youth org forms).

**Service Method:** `CommonService.uploadVolunteersBulk(formData)`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L160)

**Called From:**
- [YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx#L220-230) - Fallback endpoint
- Volunteer bulk upload pages

**Note:** This endpoint is used as a fallback in YouthOrganisationForm if the youth-organization specific endpoint is not available.

---

## 3. Reference Data API Endpoints

### 3.1 Get States
**Endpoint:** `GET /states/`

**Purpose:** Fetches list of all states for dropdown selections.

**Service Method:** `CommonService.getStates(filters?)`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L40)

**Called From:**
- [YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx#L65) - State dropdown
- [BulkYouthOrgUpload.tsx](src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx#L54) - State dropdown

**Query Parameters (optional):**
- `page`: number
- `limit`: number
- `search`: string

**Response Format:**
```typescript
{
  data: [{
    id: string | number,
    name: string,
    code: string,
    region?: string
  }]
}
```

**Auto-fill Behavior:**
- Automatically filled from logged-in user's state (`AuthService.getUserState()`)
- Only if `state_id` is available in user context

---

### 3.2 Get Districts by State
**Endpoint:** `GET /states/{stateId}/districts`

**Purpose:** Fetches all districts for a selected state.

**Service Method:** `CommonService.getDistrictsByState(stateId)`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L57)

**Called From:**
- [YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx#L120) - When state changes
- [BulkYouthOrgUpload.tsx](src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx#L97) - When state changes

**URL Parameters:**
- `stateId`: State ID (string/number)

**Response Format:**
```typescript
{
  data: {
    state: {
      id: string,
      name: string,
      code: string
    },
    districts: [{
      id: number,
      name: string,
      lgd_code: string | null,
      state_id: number,
      state_name: string,
      volunteer_count: number,
      created_at: string,
      updated_at: string,
      deleted_at: string | null
    }],
    total_districts: number,
    total_volunteers_in_state: number
  }
}
```

**Auto-fill Behavior:**
- Automatically filled from logged-in user's district (`AuthService.getUserDistrict()`)
- Only if district exists in fetched list

---

### 3.3 Get Organization Types
**Endpoint:** `GET /organizations/org-types/`

**Purpose:** Fetches all available organization types (NSS, NCC, NYKS, etc.).

**Service Method:** `CommonService.getOrgTypes()`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L73)

**Called From:**
- [YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx#L64) - On component mount
- [BulkYouthOrgUpload.tsx](src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx#L54) - On component mount

**Response Format:**
```typescript
{
  data: {
    organization_types: [{
      id: string | number,
      name: string,
      code: string,
      description?: string
    }]
  }
  // OR
  data: [{
    id: string | number,
    name: string,
    code: string,
    description?: string
  }]
}
```

**Possible Response Shapes:**
The form handles multiple response formats:
- `response.organization_types` (array)
- `response.data.organization_types` (nested array)
- `response.data` (array)
- Direct array response

---

## 4. Template Download API Endpoints

### 4.1 Download Volunteer Bulk Upload Template
**Endpoint:** `GET /volunteer/bulk-upload/template/`

**Purpose:** Downloads Excel template for bulk volunteer upload.

**Service Method:** `CommonService.downloadVolunteerTemplate()`
- **File:** [src/services/common.service.ts](src/services/common.service.ts#L229)

**Called From:**
- Template download buttons in bulk upload components

**Response:** Excel file (.xlsx)

**Note:** Returns a Blob that is automatically downloaded to the user's device.

---

## 5. Data Model and Field Mappings

### Youth Organization Record Fields
```typescript
interface YouthOrgRecord {
  key: string;
  state: string;
  district: string;
  organization: string;
  volunteers: number;
  date: string;
  media: string[];
  state_id?: number | string;
  district_id?: number | string;
  organization_id?: number | string;
}
```

### Upload Form Data Fields
```typescript
interface YouthOrgUploadFormData {
  state: number;           // State ID
  district: number;        // District ID
  organization: number;    // Organization Type ID
  numberOfVolunteers: number;
  date?: Moment;
  file: File;
}
```

---

## 6. Component and Route Information

### Main Components
1. **YouthOrganisationRecords** [src/admin/pages/youthOrganizationWorkflow/YouthOrganisationRecords.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationRecords.tsx)
   - Displays table of youth organization records
   - Shows statistics (total records, states covered, volunteers, media)
   - Allows filtering and navigation to add new records

2. **YouthOrganisationForm** [src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx](src/admin/pages/youthOrganizationWorkflow/YouthOrganisationForm.tsx)
   - Form to add individual or bulk youth org records
   - File upload with drag-and-drop
   - Shows upload progress and results

3. **BulkYouthOrgUpload** [src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx](src/admin/pages/youthOrganizationWorkflow/BulkYouthOrgUpload.tsx)
   - Dedicated bulk upload component

### Routes
```typescript
/youth-organization-record      → YouthOrganisationRecords
/youth-organization-form        → YouthOrganisationForm
```

---

## 7. Authentication and Authorization

### Authorization Header
All API calls include JWT token from localStorage:
```
Authorization: Bearer {JWT_TOKEN}
```

### Role-Based Access Control (RBAC)
The `YouthOrganisationRecords` component enforces role-based filtering:

**SUPERADMIN / NDMA_ADMIN:** No filters (global access)
**SDMA_ADMIN:** Limited to their assigned state
**YOUTH_ORG_ADMIN:** Limited to their assigned district/state

Permission encoding supports explicit scopes:
- `state:{state_id}` - Restrict to specific state
- `district:{district_id}` - Restrict to specific district
- `org:{organization_id}` or `organization:{organization_id}` - Restrict to specific organization

---

## 8. Configuration

### Base API URL
Configured in: [src/config/index.ts](src/config/index.ts)

Environment-specific configs:
- **Production:** [src/config/prod.ts](src/config/prod.ts)
- **UAT:** [src/config/uat.ts](src/config/uat.ts)

### Endpoint Base
Used via: [src/server/endpoints/common.endpoint.ts](src/server/endpoints/common.endpoint.ts)

Key settings:
- Base URL: `API_BASE_URL` from config
- Timeout: 10000ms
- Default headers:
  - `Content-Type: application/json`
  - `Authorization: Bearer {token}`
  - `ngrok-skip-browser-warning: true` (for ngrok tunnels)

---

## 9. API Client and Interceptors

### axios Interceptors
**Request Interceptor:**
- Automatically adds `Authorization` header from localStorage
- Adds `ngrok-skip-browser-warning` for ngrok compatibility

**Response Interceptor:**
- 401 errors: Clear token and redirect to `/auth`
- 403 errors: Dispatch custom event `api:forbidden`

---

## 10. Error Handling

### Upload Error Response
```typescript
{
  errors: [{
    index: number,           // Row number (0-indexed)
    data: {
      mis_id: string,
      name: string
    },
    error: string | {        // Field error object
      field_name: string[],  // Array of error messages
      another_field: string[]
    }
  }]
}
```

### Common Error Messages
- Missing required fields (mis_id, name)
- Duplicate records
- Invalid state/district
- Row count mismatch with expected count
- Security validation errors

---

## 11. Summary Table

| Endpoint | Method | Purpose | Service | Called From |
|----------|--------|---------|---------|-------------|
| `/volunteer/coverage/` | GET | Fetch youth org records | `VolunteerService.getCoverage()` | YouthOrganisationRecords |
| `/youth-organization/bulk-upload/` | POST | Upload youth org records | `CommonService.uploadYouthOrgBulk()` | YouthOrganisationForm, BulkYouthOrgUpload |
| `/volunteer/bulk-upload/` | POST | Upload volunteers | `CommonService.uploadVolunteersBulk()` | YouthOrganisationForm |
| `/states/` | GET | Fetch states | `CommonService.getStates()` | YouthOrganisationForm, BulkYouthOrgUpload |
| `/states/{stateId}/districts` | GET | Fetch districts | `CommonService.getDistrictsByState()` | YouthOrganisationForm, BulkYouthOrgUpload |
| `/organizations/org-types/` | GET | Fetch org types | `CommonService.getOrgTypes()` | YouthOrganisationForm, BulkYouthOrgUpload |
| `/volunteer/bulk-upload/template/` | GET | Download template | `CommonService.downloadVolunteerTemplate()` | Template download buttons |

---

EOF
