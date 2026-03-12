import React, { useState, useEffect } from 'react'
import { Table, Card, Button, Space, Tag, Modal, Form, Input, Select, Switch, InputNumber, message, Spin } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useAuth } from '../../../hooks/useAuth'
import { AuthService } from '../../../services'
import { useNavigate } from 'react-router-dom'
import { CommonService } from '../../../services/common.service'



export const Users = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [debugVisible, setDebugVisible] = useState(false);

  const openCreateModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  useEffect(() => {
    const handler = () => {
      message.error('Access denied: you do not have permission to perform this action.');
    };
    window.addEventListener('api:forbidden', handler as EventListener);
    return () => window.removeEventListener('api:forbidden', handler as EventListener);
  }, []);

  const handleCancel = () => setIsModalVisible(false);

  const handleCreate = async (values: any) => {
    try {
      // Map form keys to API payload
      // Split name into first_name and last_name for API
      const nameParts = values.name ? values.name.trim().split(' ') : ['', ''];
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || nameParts[0] || '';

      const payload = {
        email: values.email,
        password: values.password,
        first_name: first_name,
        last_name: last_name,
        name: values.name,
        privilege: values.privilege, // API uses 'privilege' field
        mobile: values.mobile || '',
        designation: values.designation || '',
        aadhar: values.aadhar || '',
        state_id: values.state_id || null,
        district_id: values.district_id || null,
        is_active: !!values.is_active,
        auto_revoke_previous: !!values.auto_revoke_previous,
      };

      console.log('Creating user with payload:', payload);
      const res = await AuthService.createUserWithPrivilege(payload);
      console.log('Create user result:', res);
      
      if (res && (res.success || ((res as any).status_code === 200 || (res as any).status_code === 201))) {
        message.success('User created successfully');
        setIsModalVisible(false);
        // Refresh user list
        window.location.reload();
      } else {
        message.error(res?.message || 'Failed to create user');
      }
    } catch (err: any) {
      console.error('Create user error:', err?.response?.data || err);
      const errorMsg = err?.response?.data?.detail || err?.response?.data?.message || err?.response?.data?.error || err.message || 'Create user failed';
      message.error(errorMsg);
    }
  };

  useEffect(() => {
    // restrict access to super admin only
    const role = user?.user_role;
    if (role && role !== 'SUPERADMIN' && role !== 'SUPER_ADMIN') {
      message.error('Access denied: only Super Admin can view User Management');
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Fetch users once `user` is available. Keep hook order stable by
  // declaring this effect unconditionally and early.
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await CommonService.getAllUsersWithPrivileges();
        // Normalize different response shapes
        const payload = (res as any)?.data ?? (res as any)?.users ?? res;
        let list: any[] = [];
        if (Array.isArray(payload)) list = payload;
        else if (Array.isArray((res as any)?.data?.results)) list = (res as any).data.results;
        else if ((res as any)?.results && Array.isArray((res as any).results)) list = (res as any).results;
        else if ((res as any)?.data && Array.isArray((res as any).data)) list = (res as any).data;
        else list = payload ? [payload] : [];

        // Normalize fields to what the table expects
        const normalized = list.map((u: any) => ({
          ...u,
          user_role: u.user_role ?? u.role ?? '',
          // convert active strings like 'Yes'/'No' to boolean
          is_active: typeof u.is_active !== 'undefined'
            ? (u.is_active === true || String(u.is_active).toLowerCase() === 'yes')
            : (u.active === true || String(u.active).toLowerCase() === 'yes'),
        }));

        console.debug('Fetched users count:', normalized.length);
        setUsers(normalized);
      } catch (err: any) {
        console.error('Failed to fetch users', err);
        message.error(err?.response?.data?.message || err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchUsers();
  }, [user]);

  // If user not loaded yet, show nothing
  if (!user) return null;

  const columnsLive = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'user_role', key: 'user_role', render: (r: string) => <Tag>{r}</Tag> },
    { title: 'Active', dataIndex: 'is_active', key: 'is_active', render: (a: boolean) => (a ? 'Yes' : 'No') },
    { title: 'Actions', key: 'actions', render: (_: any, record: any) => {
          const currentRole = AuthService.getRole();
          const canEdit = currentRole === 'SUPERADMIN' || currentRole === 'SUPER_ADMIN';
          return (
            <Space>
              {canEdit ? (
                <Button type="link" icon={<EditOutlined />} onClick={() => navigate(`/users/edit/${record.id}`)} />
              ) : (
                <Button type="link" icon={<EditOutlined />} onClick={() => message.error('Access denied: only Super Admin can edit users')} />
              )}
              <Button type="link" danger icon={<DeleteOutlined />} />
            </Space>
          )
        }
      },
  ];

  return (
    <>
      <Card
        title="Users Management"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/users/add')}>
            Add User
          </Button>
        }
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: 40 }}><Spin /></div>
        ) : (
          <Table columns={columnsLive} dataSource={users} rowKey={(r: any) => r.id} />
        )}

        <Modal title="Create User with Privilege" open={isModalVisible} onCancel={handleCancel} footer={null} destroyOnHidden>
          <Form form={form} layout="vertical" onFinish={handleCreate}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item 
              name="password" 
              label="Password" 
              rules={[
                { required: true, message: 'Please enter password' },
                { min: 6, message: 'Password must be at least 6 characters' }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="mobile" label="Mobile">
              <Input />
            </Form.Item>
            <Form.Item name="designation" label="Designation">
              <Input />
            </Form.Item>
            <Form.Item name="aadhar" label="Aadhar">
              <Input />
            </Form.Item>
            <Form.Item name="privilege" label="Privilege" rules={[{ required: true }]}>
              <Select>
                <Select.Option value="YOUTH_ORG_ADMIN">YOUTH_ORG_ADMIN</Select.Option>
                <Select.Option value="SDMA_ADMIN">SDMA_ADMIN</Select.Option>
                <Select.Option value="NDMA_ADMIN">NDMA_ADMIN</Select.Option>
                <Select.Option value="SUPERADMIN">SUPERADMIN</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="state_id" label="State ID">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="district_id" label="District ID">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="is_active" label="Is Active" valuePropName="checked">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item name="auto_revoke_previous" label="Auto Revoke Previous" valuePropName="checked">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="primary" htmlType="submit">Create</Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </Card>


    </>
  )
}
