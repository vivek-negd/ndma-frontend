import { Table, Card, Button, Space, Tag } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (role: string) => (
      <Tag color={role === 'admin' ? 'blue' : 'green'}>{role.toUpperCase()}</Tag>
    ),
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Space>
        <Button type="link" icon={<EditOutlined />} />
        <Button type="link" danger icon={<DeleteOutlined />} />
      </Space>
    ),
  },
]

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
]

export const Users = () => {
  return (
    <Card
      title="Users Management"
      extra={
        <Button type="primary" icon={<PlusOutlined />} href="/users/add">
          Add User
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} rowKey="id" />
    </Card>
  )
}
