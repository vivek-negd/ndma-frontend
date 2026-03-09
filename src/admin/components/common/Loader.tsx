import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

interface LoaderProps {
  size?: 'small' | 'default' | 'large'
  tip?: string
  fullScreen?: boolean
}

export const Loader = ({ size = 'default', tip, fullScreen = false }: LoaderProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size === 'large' ? 48 : 24 }} spin />

  if (fullScreen) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '100vw'
      }}>
        <Spin indicator={antIcon} size={size} tip={tip} />
      </div>
    )
  }

  return <Spin indicator={antIcon} size={size} tip={tip} />
}
