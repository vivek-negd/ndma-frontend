import axios from 'axios'

const thirdPartyClient = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const thirdPartyEndpoint = {
  get: <T>(url: string) => thirdPartyClient.get<T>(url),
  post: <T>(url: string, data?: any) => thirdPartyClient.post<T>(url, data),
}
