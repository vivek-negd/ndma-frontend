const environment = import.meta.env.VITE_ENV || 'uat'

let config

if (environment === 'production') {
  config = await import('./prod')
} else {
  config = await import('./uat')
}

export const { API_BASE_URL, ENV, DEBUG, TIMEOUT } = config
export default config
