export type UserRole = 'SUPERADMIN' | 'NDMA_ADMIN' | 'YOUTH_ORG_ADMIN' | 'SDMA_ADMIN';

/** Default landing page after login per role */
export const ROLE_DEFAULT_ROUTES: Record<UserRole, string> = {
  SUPERADMIN: '/dashboard',
  NDMA_ADMIN: '/dashboard',
  YOUTH_ORG_ADMIN: '/dashboard',
  SDMA_ADMIN: '/dashboard',
};

/**
 * Top-level menu keys visible per role.
 * SUPERADMIN gets '*' (all).
 * Others get a specific whitelist.
 */
export const ROLE_MENU_KEYS: Record<UserRole, string[] | '*'> = {
  SUPERADMIN: '*',
  NDMA_ADMIN: ['/dashboard', '/youth-organization-form', '/youth-organization-record', '/volunteer-details', '/bulk-volunteer-upload', '/training-workflow', '/training-schedule', '/first-day-training', '/fourth-day-training', '/seventh-day-training'],
  YOUTH_ORG_ADMIN: ['/dashboard', '/youth-organization-record', '/youth-organization-form', '/bulk-volunteer-upload', '/bulk-youth-org-upload'],
  SDMA_ADMIN: ['/dashboard', '/training-workflow', '/training-schedule-records', '/first-day-training-records', '/fourth-day-training-records', '/seventh-day-training-records', '/training-schedule-form', '/first-day-training-form', '/fourth-day-training-form', '/seventh-day-training-form'],
};

/**
 * Route paths accessible per role.
 * SUPERADMIN gets '*' (all).
 */
export const ROLE_ALLOWED_PATHS: Record<UserRole, string[] | '*'> = {
  SUPERADMIN: '*',
  NDMA_ADMIN: [
    '/dashboard',
    '/bulk-volunteer-upload',
    '/youth-organization-record',
    '/youth-organization-form',
    '/volunteer-details',
    '/training-schedule-form',
    '/first-day-training',
    '/fourth-day-training',
    '/seventh-day-training',
    '/volunteer-details',
  ],
  YOUTH_ORG_ADMIN: ['/dashboard', '/youth-organization-record', '/youth-organization-form', '/bulk-volunteer-upload', '/bulk-youth-org-upload'],
  SDMA_ADMIN: ['/dashboard', '/training-workflow', '/training-schedule-records', '/first-day-training-records', '/fourth-day-training-records', '/seventh-day-training-records', '/training-schedule-form', '/first-day-training-form', '/fourth-day-training-form', '/seventh-day-training-form'],
};

export function isRoleAllowed(role: string | null, path: string): boolean {
  if (!role) return false;
  const allowed = ROLE_ALLOWED_PATHS[role as UserRole];
  if (!allowed) return false;
  if (allowed === '*') return true;
  return allowed.some((p) => path.startsWith(p));
}
