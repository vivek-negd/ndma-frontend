import { useState, useEffect } from 'react'
import { Button, Card, Space, Typography, Badge, Divider, Table, Spin, Alert, Select } from 'antd'
import { RocketOutlined, ReloadOutlined } from '@ant-design/icons'
import '../assets/styles/global.css'
import { TrainingService } from '../services/training.service'
import { Training } from '../types/training.types'

const { Title, Text, Paragraph } = Typography

function App() {
  const [count, setCount] = useState(0)
  const [schedules, setSchedules] = useState<Training[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<'SDMA' | 'NDMA' | 'SUPER_ADMIN'>('SDMA')

  // Fetch training schedules
  const fetchTrainingSchedules = async (role: 'SDMA' | 'NDMA' | 'SUPER_ADMIN' = 'SDMA') => {
    setLoading(true)
    setError(null)
    try {
      const response = await TrainingService.getTrainingSchedules(role)
      if (response.data) {
        setSchedules(response.data.data || [])
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch training schedules')
      console.error('Error fetching schedules:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrainingSchedules(selectedRole)
  }, [selectedRole])

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization',
    },
  ]

  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={1}>
            <RocketOutlined /> Core Admin
          </Title>
          <Text type="secondary">React + TypeScript + Vite + Ant Design</Text>
        </div>

        <Divider />

        <Card
          title="Counter Demo"
          style={{ textAlign: 'center' }}
          headStyle={{ backgroundColor: '#f0f2f5' }}
        >
          <Space direction="vertical" size="middle">
            <Badge count={count} showZero>
              <Button
                type="primary"
                size="large"
                onClick={() => setCount((count) => count + 1)}
              >
                Click Me!
              </Button>
            </Badge>
            <Paragraph>
              You've clicked the button <Text strong>{count}</Text> times
            </Paragraph>
          </Space>
        </Card>

        <Card 
          title="Training Schedules" 
          headStyle={{ backgroundColor: '#f0f2f5' }}
          extra={
            <Button 
              icon={<ReloadOutlined />} 
              onClick={() => fetchTrainingSchedules(selectedRole)}
              loading={loading}
            >
              Refresh
            </Button>
          }
        >
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            <div>
              <Text>Select Role: </Text>
              <Select
                value={selectedRole}
                onChange={(value) => setSelectedRole(value)}
                style={{ width: '200px', marginLeft: '10px' }}
                options={[
                  { label: 'SDMA', value: 'SDMA' },
                  { label: 'NDMA', value: 'NDMA' },
                  { label: 'SUPER_ADMIN', value: 'SUPER_ADMIN' },
                ]}
              />
            </div>

            {error && (
              <Alert 
                message="Error" 
                description={error} 
                type="error" 
                closable 
                onClose={() => setError(null)}
              />
            )}

            <Spin spinning={loading}>
              {schedules.length > 0 ? (
                <Table 
                  columns={columns} 
                  dataSource={schedules.map((schedule) => ({
                    ...schedule,
                    key: schedule.id,
                  }))}
                  pagination={{ pageSize: 10 }}
                />
              ) : (
                !loading && <Text>No training schedules found for {selectedRole}</Text>
              )}
            </Spin>
          </Space>
        </Card>

        <Card title="Getting Started" headStyle={{ backgroundColor: '#f0f2f5' }}>
          <Paragraph>
            Edit <Text code>src/app/App.tsx</Text> and save to test HMR (Hot Module Replacement)
          </Paragraph>
          <Paragraph>
            This project uses <Text strong>Ant Design</Text> components for a professional UI experience.
          </Paragraph>
        </Card>
      </Space>
    </div>
  )
}

export default App
