import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
    fontSize: 14,
  },
  components: {
    Button: {
      controlHeight: 40,
      borderRadius: 6,
    },
    Card: {
      borderRadiusLG: 8,
    },
  },
}
