export const validationUtil = {
  isEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  isPhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s-()]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  },

  isURL: (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },

  isStrongPassword: (password: string): boolean => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return strongPasswordRegex.test(password)
  },

  isEmpty: (value: any): boolean => {
    if (value === null || value === undefined) return true
    if (typeof value === 'string') return value.trim().length === 0
    if (Array.isArray(value)) return value.length === 0
    if (typeof value === 'object') return Object.keys(value).length === 0
    return false
  },

  isNumeric: (value: string): boolean => {
    return !isNaN(Number(value)) && !isNaN(parseFloat(value))
  },
}
