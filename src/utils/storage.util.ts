export const storageUtil = {
  set: (key: string, value: any): void => {
    try {
      const serialized = JSON.stringify(value)
      localStorage.setItem(key, serialized)
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const item = localStorage.getItem(key)
      if (!item) return defaultValue ?? null
      return JSON.parse(item) as T
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue ?? null
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },

  clear: (): void => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  },
}
