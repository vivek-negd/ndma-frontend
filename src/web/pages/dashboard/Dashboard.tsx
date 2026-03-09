import { Space } from 'antd'
import { Dashboard1 } from '../home/Dashboard1'

// import Dashboard2 from '../../components/dashboard/dashboard2'
export const Dashboard = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Dashboard1 />
      {/* <Dashboard2 /> */}
    </Space>
  )
}
