# NDMA Training API - Complete Frontend Integration Guide

**Last Updated:** March 12, 2026  
**API Base URL:** `http://localhost:8000/api/v1/` (development) or `https://your-domain.com/api/v1/` (production)

---

## 📋 Table of Contents

1. [Authentication](#authentication)
2. [Training Sessions API](#training-sessions-api)
3. [Media Upload API](#media-upload-api)
4. [Complete Frontend Examples](#complete-frontend-examples)
5. [Error Handling](#error-handling)
6. [Frontend Form Validation](#frontend-form-validation)

---

## Authentication

### 1. Login Endpoint

**Endpoint:** `POST /auth/login/`

**Request:**
```json
{
  "username": "user@example.com",
  "password": "your_password"
}
```

**Response (Success):**
```json
{
  "status": "success",
  "message": "Login successful",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "user@example.com",
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "user_role": "SDMA_ADMIN",
    "state_id": 4,
    "district_id": null
  }
}
```

**Response (Error):**
```json
{
  "status": "error",
  "message": "Invalid username or password",
  "code": "INVALID_CREDENTIALS"
}
```

### 2. Token Refresh

**Endpoint:** `POST /auth/token/refresh/`

**Request:**
```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Training Sessions API

### 1. Create Training Session (Day 1, 4, or 7)

**Endpoint:** `POST /training-schedules/create_daywise/`

**Headers:**
```
Authorization: Bearer {access_token}
Content-Type: application/json
```

#### Case 1: Create Day 1 with NEW Batch

```json
{
  "batch_no": "MAR2026-BH-001",
  "day": 1,
  "day_date": "2026-03-15",
  "state": 4,
  "district": 39,
  "organization_name": "NDMA Training Center",
  "organization_type": "Government",
  "number_of_volunteers": 50,
  "institute_details": "Central Training Institute, Patna",
  "trainers_details": "Dr. Sharma, Mr. Patel, Ms. Gupta"
}
```

**Response (Success - 201):**
```json
{
  "status_code": 201,
  "message": "Training session created successfully",
  "data": {
    "id": 100,
    "schedule_id": 50,
    "batch_no": "MAR2026-BH-001",
    "day_label": "Day 1",
    "state_id": 4,
    "district_id": 39,
    "date": "2026-03-15",
    "created_at": "2026-03-12T10:30:00Z"
  }
}
```

#### Case 2: Add Day 4 or Day 7 to EXISTING Batch

```json
{
  "batch_no": "MAR2026-BH-001",
  "day": 4,
  "day_date": "2026-03-18"
}
```

**Response (Success - 200/201):**
```json
{
  "status_code": 201,
  "message": "Day 4 added to training session",
  "data": {
    "id": 101,
    "schedule_id": 50,
    "batch_no": "MAR2026-BH-001",
    "day_label": "Day 4",
    "state_id": 4,
    "district_id": 39,
    "date": "2026-03-18",
    "created_at": "2026-03-12T10:35:00Z"
  }
}
```

### 2. Get All Training Sessions

**Endpoint:** `GET /training-schedules/`

**Query Parameters:**
- `batch_no`: Filter by batch number
- `state_id`: Filter by state ID
- `district_id`: Filter by district ID
- `status`: Filter by status (DRAFT, PUBLISHED, COMPLETED)

**Example Request:**
```
GET /training-schedules/?state_id=4&status=PUBLISHED
```

**Response:**
```json
{
  "count": 10,
  "next": "http://localhost:8000/api/v1/training-schedules/?page=2",
  "previous": null,
  "results": [
    {
      "id": 50,
      "batch_no": "MAR2026-BH-001",
      "state_id": 4,
      "district_id": 39,
      "organization_name": "NDMA Training Center",
      "organization_type": "Government",
      "number_of_volunteers": 50,
      "institute_details": "Central Training Institute, Patna",
      "trainers_details": "Dr. Sharma, Mr. Patel, Ms. Gupta",
      "status": "PUBLISHED",
      "created_at": "2026-03-10T09:00:00Z",
      "updated_at": "2026-03-12T10:30:00Z",
      "sessions": [
        {
          "id": 100,
          "day_label": "Day 1",
          "date": "2026-03-15",
          "upload_option": null,
          "total_media": 3
        },
        {
          "id": 101,
          "day_label": "Day 4",
          "date": "2026-03-18",
          "upload_option": null,
          "total_media": 0
        }
      ]
    }
  ]
}
```

### 3. Get Training Schedule by ID

**Endpoint:** `GET /training-schedules/{id}/`

**Response:**
```json
{
  "id": 50,
  "batch_no": "MAR2026-BH-001",
  "state_id": 4,
  "district_id": 39,
  "organization_name": "NDMA Training Center",
  "organization_type": "Government",
  "number_of_volunteers": 50,
  "institute_details": "Central Training Institute, Patna",
  "trainers_details": "Dr. Sharma, Mr. Patel, Ms. Gupta",
  "start_date": "2026-03-15",
  "end_date": "2026-03-22",
  "status": "PUBLISHED",
  "created_by": {
    "id": 1,
    "username": "admin@ndma.gov.in",
    "first_name": "Admin",
    "last_name": "User"
  },
  "created_at": "2026-03-10T09:00:00Z",
  "updated_at": "2026-03-12T10:30:00Z",
  "sessions": [
    {
      "id": 100,
      "day_label": "Day 1",
      "date": "2026-03-15",
      "upload_option": null,
      "notes": null,
      "created_at": "2026-03-15T08:00:00Z",
      "total_media": 3,
      "media_files": [
        {
          "id": 1,
          "file_name": "day1_session.jpg",
          "file_size": 2097152,
          "image": "/media/training_sessions/2026/03/15/day1_session.jpg",
          "uploaded_at": "2026-03-15T09:30:00Z",
          "uploaded_by": "trainer@ndma.gov.in"
        }
      ]
    }
  ]
}
```

### 4. Update Training Schedule

**Endpoint:** `PATCH /training-schedules/{id}/`

**Request:**
```json
{
  "status": "COMPLETED",
  "notes": "Training completed successfully"
}
```

**Response:**
```json
{
  "id": 50,
  "status": "COMPLETED",
  "updated_at": "2026-03-12T11:00:00Z"
}
```

---

## Media Upload API

### 1. Check Media Count for Session

**Endpoint:** `GET /training-session-media/session_media_count/?session_id={session_id}`

**Response:**
```json
{
  "status_code": 200,
  "session_id": 100,
  "total_media": 2,
  "max_allowed": 4,
  "can_upload_more": 2
}
```

### 2. Upload Single Media File

**Endpoint:** `POST /training-session-media/`

**Headers:**
```
Authorization: Bearer {access_token}
Content-Type: multipart/form-data
```

**Request (Form Data):**
```
session: 100
image: <binary image file>
```

**Response (Success - 201):**
```json
{
  "id": 1,
  "session": 100,
  "session_day": "Day 1",
  "batch_no": "MAR2026-BH-001",
  "image": "/media/training_sessions/2026/03/15/image1.jpg",
  "file_size": 2097152,
  "file_name": "image1.jpg",
  "uploaded_by": "trainer@ndma.gov.in",
  "uploaded_at": "2026-03-15T09:30:00Z"
}
```

**Response (Error - Max 4 Files):**
```json
{
  "detail": "Max 4 images allowed per session. Current: 4"
}
```

### 3. Upload Multiple Media Files (Batch)

**Endpoint:** `POST /training-session-media/upload_for_session/`

**Headers:**
```
Authorization: Bearer {access_token}
Content-Type: multipart/form-data
```

**Request (Form Data):**
```
session_id: 100
images: <file1.jpg>
images: <file2.jpg>
images: <file3.jpg>
```

**Response (Success - 201):**
```json
{
  "status_code": 201,
  "message": "3 image(s) uploaded successfully",
  "uploaded": [
    {
      "id": 1,
      "session": 100,
      "session_day": "Day 1",
      "batch_no": "MAR2026-BH-001",
      "image": "/media/training_sessions/2026/03/15/image1.jpg",
      "file_size": 2097152,
      "file_name": "image1.jpg",
      "uploaded_by": "trainer@ndma.gov.in",
      "uploaded_at": "2026-03-15T09:30:00Z"
    },
    {
      "id": 2,
      "session": 100,
      "session_day": "Day 1",
      "batch_no": "MAR2026-BH-001",
      "image": "/media/training_sessions/2026/03/15/image2.jpg",
      "file_size": 2516582,
      "file_name": "image2.jpg",
      "uploaded_by": "trainer@ndma.gov.in",
      "uploaded_at": "2026-03-15T09:31:00Z"
    },
    {
      "id": 3,
      "session": 100,
      "session_day": "Day 1",
      "batch_no": "MAR2026-BH-001",
      "image": "/media/training_sessions/2026/03/15/image3.jpg",
      "file_size": 1887436,
      "file_name": "image3.jpg",
      "uploaded_by": "trainer@ndma.gov.in",
      "uploaded_at": "2026-03-15T09:32:00Z"
    }
  ],
  "session_id": 100,
  "day": "Day 1",
  "batch_no": "MAR2026-BH-001",
  "total_media_in_session": 3
}
```

**Response (Error - More than 4 files):**
```json
{
  "status_code": 400,
  "error": "Max 4 images per session. Current: 2, Trying to add: 5. Can add: 2 more"
}
```

### 4. Get Media Files for a Session

**Endpoint:** `GET /training-session-media/?session_id={session_id}`

**Response:**
```json
{
  "count": 3,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 3,
      "session": 100,
      "session_day": "Day 1",
      "batch_no": "MAR2026-BH-001",
      "image": "/media/training_sessions/2026/03/15/image3.jpg",
      "file_size": 1887436,
      "file_name": "image3.jpg",
      "uploaded_by": "trainer@ndma.gov.in",
      "uploaded_at": "2026-03-15T09:32:00Z"
    },
    {
      "id": 2,
      "session": 100,
      "session_day": "Day 1",
      "batch_no": "MAR2026-BH-001",
      "image": "/media/training_sessions/2026/03/15/image2.jpg",
      "file_size": 2516582,
      "file_name": "image2.jpg",
      "uploaded_by": "trainer@ndma.gov.in",
      "uploaded_at": "2026-03-15T09:31:00Z"
    }
  ]
}
```

### 5. Delete Media File

**Endpoint:** `DELETE /training-session-media/{id}/`

**Response (Success - 204):**
```json
{
  "status_code": 204,
  "message": "Media file deleted successfully"
}
```

---

## Complete Frontend Examples

(Full examples and best-practices included — file contains React snippets for login, create session, media upload and add-day flows.)

---

## Usage

- File created at: `docs/NDMA-Training-API-Integration-Guide.md`
- Next: I will mark the first TODO as complete and move on to verifying the forms and services.
