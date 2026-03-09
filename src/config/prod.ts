export const config = {
  API_BASE_URL: 'https://api.example.com',
  ENV: 'production' as const,
  DEBUG: false,
  TIMEOUT: 15000,
}

export const { API_BASE_URL, ENV, DEBUG, TIMEOUT } = config
