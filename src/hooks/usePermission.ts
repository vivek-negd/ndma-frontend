import { useMemo } from 'react'
import { useAuth } from './useAuth'

type Permission = 'read' | 'write' | 'delete' | 'admin'

export const usePermission = () => {
  const { user } = useAuth()

  const hasPermission = useMemo(() => {
    return (permission: Permission): boolean => {
      if (!user) return false
      
      // Admin has all permissions
      if (user.role === 'admin') return true
      
      // Add your permission logic here
      const rolePermissions: Record<string, Permission[]> = {
        admin: ['read', 'write', 'delete', 'admin'],
        user: ['read'],
        editor: ['read', 'write'],
      }
      
      return rolePermissions[user.role]?.includes(permission) ?? false
    }
  }, [user])

  const canRead = hasPermission('read')
  const canWrite = hasPermission('write')
  const canDelete = hasPermission('delete')
  const isAdmin = hasPermission('admin')

  return {
    hasPermission,
    canRead,
    canWrite,
    canDelete,
    isAdmin,
  }
}
