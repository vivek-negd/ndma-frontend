export const config = {
  // API_BASE_URL: 'https://uat-api.example.com',
  API_BASE_URL: 'http://127.0.0.1:8000/api/v1/',
  ENV: 'uat' as const,
  DEBUG: true,
  TIMEOUT: 10000,
}

export const { API_BASE_URL, ENV, DEBUG, TIMEOUT } = config
