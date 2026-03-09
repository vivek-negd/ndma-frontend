import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  Space,
  Typography,
  Empty,
  Popconfirm,
  message,
  Card,
  Tag,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { LANGUAGES, LanguageCode } from "../../../constants";

const { Title } = Typography;

interface PageData {
  id: string;
  slug: string;
  translations: {
    [key in LanguageCode]: {
      title: string;
      content: string;
      metaTitle?: string;
      metaDescription?: string;
      metaKeywords?: string;
      ogTitle?: string;
      ogDescription?: string;
    };
  };
  seo?: {
    ogImage?: string;
    canonicalUrl?: string;
    robotsIndex: boolean;
    robotsFollow: boolean;
    twitterCard?: string;
  };
  createdAt: string;
}

export const Pages = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<PageData[]>(() => {
    const saved = localStorage.getItem("customPages");
    return saved ? JSON.parse(saved) : [];
  });

  const handleDeletePage = (id: string) => {
    const updatedPages = pages.filter((page) => page.id !== id);
    localStorage.setItem("customPages", JSON.stringify(updatedPages));
    setPages(updatedPages);
    message.success("Page deleted successfully");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: ["translations", "en", "title"],
      key: "title",
      width: "35%",
      render: (text: string) => (
        <Space size="small">
          <FileTextOutlined style={{ color: "#1890ff", fontSize: "14px" }} />
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            {text || "Untitled"}
          </span>
        </Space>
      ),
    },
    {
      title: "URL Slug",
      dataIndex: "slug",
      key: "slug",
      width: "25%",
      render: (text: string) => (
        <code
          style={{
            fontSize: "13px",
            padding: "2px 6px",
            background: "#f5f5f5",
            borderRadius: "3px",
          }}
        >
          /{text}
        </code>
      ),
    },
    {
      title: "Languages",
      key: "languages",
      width: "20%",
      render: (_: any, record: PageData) => {
        if (!record.translations) return <Tag>N/A</Tag>;
        const availableLangs = LANGUAGES.filter(
          (lang) => record.translations?.[lang.code]?.title
        );
        return availableLangs.length > 0 ? (
          availableLangs.map((lang) => (
            <Tag
              key={lang.code}
              color="blue"
              style={{ fontSize: "12px", margin: "2px" }}
            >
              {lang.label}
            </Tag>
          ))
        ) : (
          <Tag>N/A</Tag>
        );
      },
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "15%",
      render: (date: string) => (
        <span style={{ fontSize: "13px", color: "#666" }}>
          {new Date(date).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "140px",
      render: (_: any, record: PageData) => (
        <Space size="small">
          <Button
            type="link"
            size="small"
            icon={<EditOutlined style={{ fontSize: "14px" }} />}
            onClick={() => navigate(`/pages/edit/${record.id}`)}
            style={{ padding: "4px 8px" }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete page"
            description="Are you sure you want to delete this page?"
            onConfirm={() => handleDeletePage(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="link"
              danger
              size="small"
              icon={<DeleteOutlined style={{ fontSize: "14px" }} />}
              style={{ padding: "4px 8px" }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      bordered={false}
      style={{
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Title
          level={3}
          style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
        >
          Pages Management
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/pages/create")}
          style={{ height: "36px", fontSize: "14px" }}
        >
          Add New Page
        </Button>
      </div>

      {pages.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span style={{ fontSize: "14px", color: "#666" }}>
              No pages created yet
            </span>
          }
        >
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => navigate("/pages/create")}
            style={{ height: "36px", fontSize: "14px" }}
          >
            Create Your First Page
          </Button>
        </Empty>
      ) : (
        <Table
          columns={columns}
          dataSource={pages}
          rowKey="id"
          size="middle"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => (
              <span style={{ fontSize: "13px" }}>Total {total} pages</span>
            ),
          }}
          style={{ fontSize: "14px" }}
        />
      )}
    </Card>
  );
};
