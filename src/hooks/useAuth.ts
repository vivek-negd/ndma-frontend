import { useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: string
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing token and validate
    const token = localStorage.getItem('token')
    if (token) {
      // Validate token and fetch user
      setIsAuthenticated(true)
      // Mock user data
      setUser({
        id: '1',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login
    setIsLoading(true)
    try {
      // API call here
      const mockToken = 'mock-token-' + Date.now()
      localStorage.setItem('token', mockToken)
      setIsAuthenticated(true)
      setUser({
        id: '1',
        name: 'Admin User',
        email,
        role: 'admin',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  }
}
