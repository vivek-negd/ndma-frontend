export type UserRole = 'SUPERADMIN' | 'NATIONAL_ADMIN' | 'ORGANIZATION';

/** Default landing page after login per role */
export const ROLE_DEFAULT_ROUTES: Record<UserRole, string> = {
  SUPERADMIN: '/dashboard',
  NATIONAL_ADMIN: '/dashboard',
  ORGANIZATION: '/dashboard',
};

/**
 * Top-level menu keys visible per role.
 * SUPERADMIN gets '*' (all).
 * Others get a specific whitelist.
 */
export const ROLE_MENU_KEYS: Record<UserRole, string[] | '*'> = {
  SUPERADMIN: '*',
  NATIONAL_ADMIN: ['/dashboard', '/training-workflow', '/training-schedule', '/first-day-training', '/fourth-day-training', '/seventh-day-training'],
  ORGANIZATION: ['/bulk-volunteer-upload'],
};

/**
 * Route paths accessible per role.
 * SUPERADMIN gets '*' (all).
 */
export const ROLE_ALLOWED_PATHS: Record<UserRole, string[] | '*'> = {
  SUPERADMIN: '*',
  NATIONAL_ADMIN: [
    '/dashboard',
    '/training-schedule',
    '/first-day-training',
    '/fourth-day-training',
    '/seventh-day-training',
  ],
  ORGANIZATION: ['/bulk-volunteer-upload'],
};

export function isRoleAllowed(role: string | null, path: string): boolean {
  if (!role) return false;
  const allowed = ROLE_ALLOWED_PATHS[role as UserRole];
  if (!allowed) return false;
  if (allowed === '*') return true;
  return allowed.some((p) => path.startsWith(p));
}
