import { useState, useEffect } from "react";
import {
  Card,
  Table,
  Button,
  Space,
  Typography,
  Tag,
  Modal,
  Form,
  Input,
  Switch,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SafetyOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

interface Role {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const Roles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = () => {
    const saved = localStorage.getItem("roles");
    if (saved) {
      setRoles(JSON.parse(saved));
    } else {
      // Default roles
      const defaultRoles: Role[] = [
        {
          id: "1",
          name: "Super Admin",
          description: "Full system access with all privileges",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Admin",
          description: "Administrative access with limited privileges",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "3",
          name: "Editor",
          description: "Can create and edit content",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "4",
          name: "Viewer",
          description: "Read-only access",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem("roles", JSON.stringify(defaultRoles));
      setRoles(defaultRoles);
    }
  };

  const showModal = (role?: Role) => {
    if (role) {
      setEditingRole(role);
      form.setFieldsValue(role);
    } else {
      setEditingRole(null);
      form.resetFields();
      form.setFieldsValue({ isActive: true });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const saved = localStorage.getItem("roles");
      const currentRoles: Role[] = saved ? JSON.parse(saved) : [];

      if (editingRole) {
        const updated = currentRoles.map((role) =>
          role.id === editingRole.id
            ? { ...role, ...values, updatedAt: new Date().toISOString() }
            : role
        );
        localStorage.setItem("roles", JSON.stringify(updated));
        setRoles(updated);
        message.success("Role updated successfully");
      } else {
        const newRole: Role = {
          id: Date.now().toString(),
          ...values,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const updated = [...currentRoles, newRole];
        localStorage.setItem("roles", JSON.stringify(updated));
        setRoles(updated);
        message.success("Role created successfully");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Delete Role",
      content: "Are you sure you want to delete this role?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        const updated = roles.filter((role) => role.id !== id);
        localStorage.setItem("roles", JSON.stringify(updated));
        setRoles(updated);
        message.success("Role deleted successfully");
      },
    });
  };

  const columns = [
    {
      title: "Role Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SafetyOutlined style={{ color: "#1890ff" }} />
          <span style={{ fontWeight: 500, fontSize: "14px" }}>{name}</span>
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) => (
        <span style={{ fontSize: "13px", color: "#666" }}>{description}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      width: 100,
      render: (isActive: boolean) => (
        <Tag
          color={isActive ? "green" : "default"}
          icon={isActive ? <CheckCircleOutlined /> : null}
          style={{ fontSize: "12px" }}
        >
          {isActive ? "Active" : "Inactive"}
        </Tag>
      ),
    },
    {
      title: "Last Updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 150,
      render: (date: string) => (
        <span style={{ fontSize: "13px", color: "#666" }}>
          {new Date(date).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (record: Role) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
            style={{ fontSize: "12px", height: "28px" }}
          >
            Edit
          </Button>
          <Button
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            style={{ fontSize: "12px", height: "28px" }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <SafetyOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <div>
            <Title
              level={3}
              style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
            >
              Roles
            </Title>
            <div
              style={{ fontSize: "13px", color: "#8c8c8c", fontWeight: 400 }}
            >
              Manage user roles and permissions
            </div>
          </div>
        </div>
      }
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal()}
          style={{ fontSize: "14px", height: "36px" }}
        >
          Add New Role
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Table
        columns={columns}
        dataSource={roles}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showTotal: (total) => `Total ${total} roles`,
        }}
        style={{ fontSize: "14px" }}
      />

      <Modal
        title={editingRole ? "Edit Role" : "Add New Role"}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        okText={editingRole ? "Update" : "Create"}
        width={600}
      >
        <Form form={form} layout="vertical" style={{ marginTop: "20px" }}>
          <Form.Item
            label="Role Name"
            name="name"
            rules={[{ required: true, message: "Please enter role name" }]}
          >
            <Input placeholder="e.g., Admin, Editor, Viewer" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <TextArea
              rows={3}
              placeholder="Describe the role's responsibilities and access level"
            />
          </Form.Item>

          <Form.Item label="Status" name="isActive" valuePropName="checked">
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};
