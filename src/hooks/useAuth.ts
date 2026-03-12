import { useState, useEffect } from 'react'
import { User as AuthUser } from '../types/auth.types'
import { AuthService } from '../services'

type LocalUser = AuthUser & { role?: string }

export const useAuth = () => {
  const [user, setUser] = useState<LocalUser | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const stored = AuthService.getUser()
      if (stored) {
        setUser(stored as LocalUser)
        setIsAuthenticated(true)
      } else {
        // token present but no user data — clear stale token
        localStorage.removeItem('token')
      }
    }
    setIsLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('user_role')
    setUser(null)
    setIsAuthenticated(false)
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    logout,
  }
}
