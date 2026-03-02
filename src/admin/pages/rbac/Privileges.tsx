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
  Select,
  Switch,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  KeyOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

interface Privilege {
  id: string;
  name: string;
  description: string;
  module: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const MODULES = [
  "Dashboard",
  "Users",
  "Pages",
  "Content",
  "SEO",
  "Settings",
  "RBAC",
];

export const Privileges = () => {
  const [privileges, setPrivileges] = useState<Privilege[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPrivilege, setEditingPrivilege] = useState<Privilege | null>(
    null
  );
  const [form] = Form.useForm();

  useEffect(() => {
    loadPrivileges();
  }, []);

  const loadPrivileges = () => {
    const saved = localStorage.getItem("privileges");
    if (saved) {
      setPrivileges(JSON.parse(saved));
    } else {
      // Default privileges
      const defaultPrivileges: Privilege[] = [
        {
          id: "1",
          name: "View Dashboard",
          description: "Can view dashboard and analytics",
          module: "Dashboard",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Manage Users",
          description: "Can create, edit, and delete users",
          module: "Users",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "3",
          name: "Manage Pages",
          description: "Can create, edit, and delete pages",
          module: "Pages",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "4",
          name: "Manage Content",
          description: "Can create, edit, and delete content",
          module: "Content",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "5",
          name: "Manage SEO",
          description: "Can edit SEO settings",
          module: "SEO",
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      localStorage.setItem("privileges", JSON.stringify(defaultPrivileges));
      setPrivileges(defaultPrivileges);
    }
  };

  const showModal = (privilege?: Privilege) => {
    if (privilege) {
      setEditingPrivilege(privilege);
      form.setFieldsValue(privilege);
    } else {
      setEditingPrivilege(null);
      form.resetFields();
      form.setFieldsValue({ isActive: true });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const saved = localStorage.getItem("privileges");
      const currentPrivileges: Privilege[] = saved ? JSON.parse(saved) : [];

      if (editingPrivilege) {
        const updated = currentPrivileges.map((privilege) =>
          privilege.id === editingPrivilege.id
            ? { ...privilege, ...values, updatedAt: new Date().toISOString() }
            : privilege
        );
        localStorage.setItem("privileges", JSON.stringify(updated));
        setPrivileges(updated);
        message.success("Privilege updated successfully");
      } else {
        const newPrivilege: Privilege = {
          id: Date.now().toString(),
          ...values,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const updated = [...currentPrivileges, newPrivilege];
        localStorage.setItem("privileges", JSON.stringify(updated));
        setPrivileges(updated);
        message.success("Privilege created successfully");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Delete Privilege",
      content: "Are you sure you want to delete this privilege?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        const updated = privileges.filter((privilege) => privilege.id !== id);
        localStorage.setItem("privileges", JSON.stringify(updated));
        setPrivileges(updated);
        message.success("Privilege deleted successfully");
      },
    });
  };

  const columns = [
    {
      title: "Privilege Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <KeyOutlined style={{ color: "#1890ff" }} />
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
      title: "Module",
      dataIndex: "module",
      key: "module",
      width: 120,
      render: (module: string) => (
        <Tag color="blue" style={{ fontSize: "12px" }}>
          {module}
        </Tag>
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
      title: "Actions",
      key: "actions",
      width: 150,
      render: (record: Privilege) => (
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
          <KeyOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <div>
            <Title
              level={3}
              style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
            >
              Privileges
            </Title>
            <div
              style={{ fontSize: "13px", color: "#8c8c8c", fontWeight: 400 }}
            >
              Manage system privileges and permissions
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
          Add New Privilege
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Table
        columns={columns}
        dataSource={privileges}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showTotal: (total) => `Total ${total} privileges`,
        }}
        style={{ fontSize: "14px" }}
      />

      <Modal
        title={editingPrivilege ? "Edit Privilege" : "Add New Privilege"}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        okText={editingPrivilege ? "Update" : "Create"}
        width={600}
      >
        <Form form={form} layout="vertical" style={{ marginTop: "20px" }}>
          <Form.Item
            label="Privilege Name"
            name="name"
            rules={[{ required: true, message: "Please enter privilege name" }]}
          >
            <Input placeholder="e.g., View Dashboard, Manage Users" />
          </Form.Item>

          <Form.Item
            label="Module"
            name="module"
            rules={[{ required: true, message: "Please select a module" }]}
          >
            <Select placeholder="Select module">
              {MODULES.map((module) => (
                <Select.Option key={module} value={module}>
                  {module}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <TextArea
              rows={3}
              placeholder="Describe what this privilege allows"
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
