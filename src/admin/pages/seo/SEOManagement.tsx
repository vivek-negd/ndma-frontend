import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Space,
  Typography,
  Tag,
  Empty,
  Tooltip,
} from "antd";
import {
  EditOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FileTextOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { LANGUAGES, LanguageCode } from "../../../constants";

const { Title, Text } = Typography;

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

export const SEOManagement = () => {
  const navigate = useNavigate();
  const [pages] = useState<PageData[]>(() => {
    const saved = localStorage.getItem("customPages");
    return saved ? JSON.parse(saved) : [];
  });

  const getSEOScore = (page: PageData): number => {
    let score = 0;
    let total = 0;

    // Check each language
    LANGUAGES.forEach((lang) => {
      const trans = page.translations[lang.code];
      if (trans) {
        // Meta title
        total += 1;
        if (
          trans.metaTitle &&
          trans.metaTitle.length >= 30 &&
          trans.metaTitle.length <= 60
        ) {
          score += 1;
        }

        // Meta description
        total += 1;
        if (
          trans.metaDescription &&
          trans.metaDescription.length >= 120 &&
          trans.metaDescription.length <= 160
        ) {
          score += 1;
        }

        // Meta keywords
        total += 1;
        if (trans.metaKeywords && trans.metaKeywords.trim().length > 0) {
          score += 1;
        }

        // OG title
        total += 1;
        if (trans.ogTitle && trans.ogTitle.length > 0) {
          score += 1;
        }

        // OG description
        total += 1;
        if (trans.ogDescription && trans.ogDescription.length > 0) {
          score += 1;
        }
      }
    });

    // Global SEO settings
    if (page.seo) {
      total += 3;
      if (page.seo.ogImage) score += 1;
      if (page.seo.canonicalUrl) score += 1;
      if (page.seo.robotsIndex) score += 1;
    }

    return total > 0 ? Math.round((score / total) * 100) : 0;
  };

  const getSEOStatus = (score: number) => {
    if (score >= 80)
      return {
        color: "success",
        text: "Excellent",
        icon: <CheckCircleOutlined />,
      };
    if (score >= 60)
      return { color: "warning", text: "Good", icon: <CheckCircleOutlined /> };
    if (score >= 40)
      return { color: "warning", text: "Fair", icon: <CloseCircleOutlined /> };
    return { color: "error", text: "Poor", icon: <CloseCircleOutlined /> };
  };

  const columns = [
    {
      title: "Page",
      dataIndex: ["translations", "en", "title"],
      key: "title",
      width: "25%",
      render: (text: string, record: PageData) => (
        <Space direction="vertical" size="small">
          <Space size="small">
            <FileTextOutlined style={{ color: "#1890ff", fontSize: "14px" }} />
            <span style={{ fontSize: "14px", fontWeight: 500 }}>
              {text || "Untitled"}
            </span>
          </Space>
          <code
            style={{
              fontSize: "12px",
              padding: "2px 6px",
              background: "#f5f5f5",
              borderRadius: "3px",
            }}
          >
            /{record.slug}
          </code>
        </Space>
      ),
    },
    {
      title: "SEO Score",
      key: "score",
      width: "15%",
      sorter: (a: PageData, b: PageData) => getSEOScore(a) - getSEOScore(b),
      render: (_: any, record: PageData) => {
        const score = getSEOScore(record);
        const status = getSEOStatus(score);
        return (
          <Space size="small">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: `conic-gradient(${
                  status.color === "success"
                    ? "#52c41a"
                    : status.color === "warning"
                    ? "#faad14"
                    : "#ff4d4f"
                } ${score * 3.6}deg, #f0f0f0 0deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {score}%
              </div>
            </div>
            <Tag color={status.color} style={{ fontSize: "12px" }}>
              {status.icon} {status.text}
            </Tag>
          </Space>
        );
      },
    },
    {
      title: "Meta Tags",
      key: "meta",
      width: "20%",
      render: (_: any, record: PageData) => {
        const hasMetaTitle = LANGUAGES.some(
          (lang) => record.translations[lang.code]?.metaTitle
        );
        const hasMetaDesc = LANGUAGES.some(
          (lang) => record.translations[lang.code]?.metaDescription
        );
        const hasKeywords = LANGUAGES.some(
          (lang) => record.translations[lang.code]?.metaKeywords
        );

        return (
          <Space direction="vertical" size={2}>
            <div style={{ fontSize: "12px" }}>
              {hasMetaTitle ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              Meta Title
            </div>
            <div style={{ fontSize: "12px" }}>
              {hasMetaDesc ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              Meta Description
            </div>
            <div style={{ fontSize: "12px" }}>
              {hasKeywords ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              Keywords
            </div>
          </Space>
        );
      },
    },
    {
      title: "Open Graph",
      key: "og",
      width: "15%",
      render: (_: any, record: PageData) => {
        const hasOGImage = !!record.seo?.ogImage;
        const hasOGTitle = LANGUAGES.some(
          (lang) => record.translations[lang.code]?.ogTitle
        );
        const hasOGDesc = LANGUAGES.some(
          (lang) => record.translations[lang.code]?.ogDescription
        );

        return (
          <Space direction="vertical" size={2}>
            <div style={{ fontSize: "12px" }}>
              {hasOGImage ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              OG Image
            </div>
            <div style={{ fontSize: "12px" }}>
              {hasOGTitle ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              OG Title
            </div>
            <div style={{ fontSize: "12px" }}>
              {hasOGDesc ? (
                <CheckCircleOutlined
                  style={{ color: "#52c41a", marginRight: 4 }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{ color: "#ff4d4f", marginRight: 4 }}
                />
              )}
              OG Description
            </div>
          </Space>
        );
      },
    },
    {
      title: "Indexing",
      key: "indexing",
      width: "15%",
      render: (_: any, record: PageData) => (
        <Space direction="vertical" size={2}>
          <Tag
            color={record.seo?.robotsIndex ? "success" : "default"}
            style={{ fontSize: "12px", margin: 0 }}
          >
            {record.seo?.robotsIndex ? "Index" : "No Index"}
          </Tag>
          <Tag
            color={record.seo?.robotsFollow ? "success" : "default"}
            style={{ fontSize: "12px", margin: 0 }}
          >
            {record.seo?.robotsFollow ? "Follow" : "No Follow"}
          </Tag>
          {record.seo?.canonicalUrl && (
            <Tooltip title={record.seo.canonicalUrl}>
              <Tag color="blue" style={{ fontSize: "12px", margin: 0 }}>
                Canonical ✓
              </Tag>
            </Tooltip>
          )}
        </Space>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: "10%",
      render: (_: any, record: PageData) => (
        <Button
          type="primary"
          size="small"
          icon={<EditOutlined />}
          onClick={() => navigate(`/seo/edit/${record.id}`)}
          style={{ fontSize: "13px" }}
        >
          Edit SEO
        </Button>
      ),
    },
  ];

  const avgScore =
    pages.length > 0
      ? Math.round(
          pages.reduce((sum, page) => sum + getSEOScore(page), 0) / pages.length
        )
      : 0;

  const excellentCount = pages.filter((p) => getSEOScore(p) >= 80).length;
  const needsWorkCount = pages.filter((p) => getSEOScore(p) < 60).length;

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
        <Space direction="vertical" size={4}>
          <Title
            level={3}
            style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
          >
            <GlobalOutlined style={{ marginRight: 8 }} />
            Manage SEO
          </Title>
          <Text type="secondary" style={{ fontSize: "13px" }}>
            Monitor and optimize SEO settings for all pages
          </Text>
        </Space>
      </div>

      {pages.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: 24,
          }}
        >
          <Card
            size="small"
            style={{ background: "#f0f5ff", border: "1px solid #d6e4ff" }}
          >
            <Space direction="vertical" size={4}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Average SEO Score
              </Text>
              <Title level={2} style={{ margin: 0, color: "#1890ff" }}>
                {avgScore}%
              </Title>
            </Space>
          </Card>
          <Card
            size="small"
            style={{ background: "#f6ffed", border: "1px solid #b7eb8f" }}
          >
            <Space direction="vertical" size={4}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Excellent Pages
              </Text>
              <Title level={2} style={{ margin: 0, color: "#52c41a" }}>
                {excellentCount}
              </Title>
            </Space>
          </Card>
          <Card
            size="small"
            style={{ background: "#fff2e8", border: "1px solid #ffbb96" }}
          >
            <Space direction="vertical" size={4}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Needs Improvement
              </Text>
              <Title level={2} style={{ margin: 0, color: "#fa8c16" }}>
                {needsWorkCount}
              </Title>
            </Space>
          </Card>
        </div>
      )}

      {pages.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span style={{ fontSize: "14px", color: "#666" }}>
              No pages available to manage SEO
            </span>
          }
        >
          <Button
            type="primary"
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
        />
      )}
    </Card>
  );
};
