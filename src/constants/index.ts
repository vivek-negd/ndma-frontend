export const APP_NAME = "Core Admin";
export const APP_VERSION = "1.0.0";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  AUTH: "/auth",
  SETTINGS: "/settings",
} as const;

export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
  THEME: "theme",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
  USERS: {
    LIST: "/users",
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },
} as const;
