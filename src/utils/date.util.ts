import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

export const dateUtil = {
  format: (date: string | Date, format: string = 'YYYY-MM-DD'): string => {
    return dayjs(date).format(format)
  },

  formatDateTime: (date: string | Date): string => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
  },

  fromNow: (date: string | Date): string => {
    return dayjs(date).fromNow()
  },

  isValid: (date: string | Date): boolean => {
    return dayjs(date).isValid()
  },

  toUTC: (date: string | Date): string => {
    return dayjs(date).utc().format()
  },

  diff: (date1: string | Date, date2: string | Date, unit: 'day' | 'hour' | 'minute' = 'day'): number => {
    return dayjs(date1).diff(dayjs(date2), unit)
  },
}
