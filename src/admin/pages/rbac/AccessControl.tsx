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
  Select,
  Checkbox,
  message,
  Divider,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface AccessControl {
  id: string;
  roleId: string;
  roleName: string;
  privileges: string[];
  createdAt: string;
  updatedAt: string;
}

interface Role {
  id: string;
  name: string;
}

interface Privilege {
  id: string;
  name: string;
  module: string;
}

export const AccessControl = () => {
  const [accessControls, setAccessControls] = useState<AccessControl[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [privileges, setPrivileges] = useState<Privilege[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccess, setEditingAccess] = useState<AccessControl | null>(
    null
  );
  const [form] = Form.useForm();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // Load roles
    const savedRoles = localStorage.getItem("roles");
    if (savedRoles) {
      setRoles(JSON.parse(savedRoles));
    }

    // Load privileges
    const savedPrivileges = localStorage.getItem("privileges");
    if (savedPrivileges) {
      setPrivileges(JSON.parse(savedPrivileges));
    }

    // Load access controls
    const savedAccess = localStorage.getItem("accessControls");
    if (savedAccess) {
      setAccessControls(JSON.parse(savedAccess));
    }
  };

  const showModal = (access?: AccessControl) => {
    if (access) {
      setEditingAccess(access);
      form.setFieldsValue({
        roleId: access.roleId,
        privileges: access.privileges,
      });
    } else {
      setEditingAccess(null);
      form.resetFields();
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const saved = localStorage.getItem("accessControls");
      const currentAccess: AccessControl[] = saved ? JSON.parse(saved) : [];
      const selectedRole = roles.find((r) => r.id === values.roleId);

      if (!selectedRole) return;

      if (editingAccess) {
        const updated = currentAccess.map((access) =>
          access.id === editingAccess.id
            ? {
                ...access,
                roleId: values.roleId,
                roleName: selectedRole.name,
                privileges: values.privileges || [],
                updatedAt: new Date().toISOString(),
              }
            : access
        );
        localStorage.setItem("accessControls", JSON.stringify(updated));
        setAccessControls(updated);
        message.success("Access control updated successfully");
      } else {
        const newAccess: AccessControl = {
          id: Date.now().toString(),
          roleId: values.roleId,
          roleName: selectedRole.name,
          privileges: values.privileges || [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const updated = [...currentAccess, newAccess];
        localStorage.setItem("accessControls", JSON.stringify(updated));
        setAccessControls(updated);
        message.success("Access control created successfully");
      }
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Delete Access Control",
      content: "Are you sure you want to delete this access control?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        const updated = accessControls.filter((access) => access.id !== id);
        localStorage.setItem("accessControls", JSON.stringify(updated));
        setAccessControls(updated);
        message.success("Access control deleted successfully");
      },
    });
  };

  const getPrivilegesByModule = () => {
    const grouped: { [key: string]: Privilege[] } = {};
    privileges.forEach((privilege) => {
      if (!grouped[privilege.module]) {
        grouped[privilege.module] = [];
      }
      grouped[privilege.module].push(privilege);
    });
    return grouped;
  };

  const columns = [
    {
      title: "Role",
      dataIndex: "roleName",
      key: "roleName",
      render: (roleName: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <SafetyOutlined style={{ color: "#1890ff" }} />
          <span style={{ fontWeight: 500, fontSize: "14px" }}>{roleName}</span>
        </div>
      ),
    },
    {
      title: "Privileges",
      dataIndex: "privileges",
      key: "privileges",
      render: (privilegeIds: string[]) => {
        const privilegeNames = privilegeIds
          .map((id) => privileges.find((p) => p.id === id)?.name)
          .filter(Boolean);

        return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {privilegeNames.slice(0, 3).map((name, index) => (
              <Tag key={index} color="blue" style={{ fontSize: "11px" }}>
                {name}
              </Tag>
            ))}
            {privilegeNames.length > 3 && (
              <Tag color="default" style={{ fontSize: "11px" }}>
                +{privilegeNames.length - 3} more
              </Tag>
            )}
          </div>
        );
      },
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
      render: (record: AccessControl) => (
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

  const privilegesByModule = getPrivilegesByModule();

  return (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <LockOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <div>
            <Title
              level={3}
              style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
            >
              Access Control
            </Title>
            <div
              style={{ fontSize: "13px", color: "#8c8c8c", fontWeight: 400 }}
            >
              Assign privileges to roles
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
          Assign Privileges
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Table
        columns={columns}
        dataSource={accessControls}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showTotal: (total) => `Total ${total} access controls`,
        }}
        style={{ fontSize: "14px" }}
      />

      <Modal
        title={
          editingAccess ? "Edit Access Control" : "Assign Privileges to Role"
        }
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        okText={editingAccess ? "Update" : "Assign"}
        width={700}
      >
        <Form form={form} layout="vertical" style={{ marginTop: "20px" }}>
          <Form.Item
            label="Role"
            name="roleId"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select placeholder="Select role">
              {roles.map((role) => (
                <Select.Option key={role.id} value={role.id}>
                  {role.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Privileges"
            name="privileges"
            rules={[
              {
                required: true,
                message: "Please select at least one privilege",
              },
            ]}
          >
            <Checkbox.Group style={{ width: "100%" }}>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="large"
              >
                {Object.entries(privilegesByModule).map(([module, privs]) => (
                  <div key={module}>
                    <Divider style={{ margin: "8px 0" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600 }}>
                        {module}
                      </span>
                    </Divider>
                    <Space direction="vertical" style={{ width: "100%" }}>
                      {privs.map((privilege) => (
                        <Checkbox key={privilege.id} value={privilege.id}>
                          <span style={{ fontSize: "13px" }}>
                            {privilege.name}
                          </span>
                        </Checkbox>
                      ))}
                    </Space>
                  </div>
                ))}
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};
