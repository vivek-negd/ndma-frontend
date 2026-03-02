import { useState } from 'react'
import { Button, Card, Space, Typography, Badge, Divider } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import '../assets/styles/global.css'

const { Title, Text, Paragraph } = Typography

function App() {
  const [count, setCount] = useState(0)

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
