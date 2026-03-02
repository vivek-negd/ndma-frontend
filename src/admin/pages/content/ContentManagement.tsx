import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Space,
  Typography,
  Tag,
  Modal,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  FileTextOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface ContentItem {
  id: string;
  title: string;
  language: string;
  jsonData: any;
  createdAt: string;
  updatedAt: string;
}

export const ContentManagement = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState<ContentItem[]>([]);

  useEffect(() => {
    loadContents();
  }, []);

  const loadContents = () => {
    const saved = localStorage.getItem("jsonContents");
    if (saved) {
      setContents(JSON.parse(saved));
    }
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Delete Content",
      content: "Are you sure you want to delete this content?",
      okText: "Delete",
      okType: "danger",
      onOk: () => {
        const updated = contents.filter((item) => item.id !== id);
        localStorage.setItem("jsonContents", JSON.stringify(updated));
        setContents(updated);
        message.success("Content deleted successfully");
      },
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FileTextOutlined style={{ color: "#1890ff" }} />
          <span style={{ fontWeight: 500, fontSize: "14px" }}>{title}</span>
        </div>
      ),
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
      width: 120,
      render: (language: string) => (
        <Tag color="blue" style={{ fontSize: "12px" }}>
          {language.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "JSON Preview",
      key: "preview",
      width: 300,
      render: (record: ContentItem) => (
        <div
          style={{
            background: "#f5f5f5",
            padding: "8px 12px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "12px",
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {JSON.stringify(record.jsonData).substring(0, 100)}...
        </div>
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
      sorter: (a: ContentItem, b: ContentItem) =>
        new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (record: ContentItem) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => navigate(`/content/edit/${record.id}`)}
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
          <CodeOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <div>
            <Title
              level={3}
              style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
            >
              Manage Content
            </Title>
            <div
              style={{ fontSize: "13px", color: "#8c8c8c", fontWeight: 400 }}
            >
              Manage JSON content and configurations
            </div>
          </div>
        </div>
      }
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/content/create")}
          style={{ fontSize: "14px", height: "36px" }}
        >
          Add New Content
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Table
        columns={columns}
        dataSource={contents}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showTotal: (total) => `Total ${total} items`,
          style: { fontSize: "14px" },
        }}
        locale={{
          emptyText: (
            <div style={{ padding: "40px", textAlign: "center" }}>
              <CodeOutlined
                style={{
                  fontSize: "48px",
                  color: "#d9d9d9",
                  marginBottom: "16px",
                }}
              />
              <div
                style={{
                  fontSize: "16px",
                  color: "#8c8c8c",
                  marginBottom: "8px",
                }}
              >
                No content found
              </div>
              <Button
                type="primary"
                onClick={() => navigate("/content/create")}
                style={{ fontSize: "14px", height: "36px" }}
              >
                Add Your First Content
              </Button>
            </div>
          ),
        }}
        style={{ fontSize: "14px" }}
      />
    </Card>
  );
};
