import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Space,
  message,
  Tabs,
  Select,
  Switch,
  Divider,
  Row,
  Col,
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { LANGUAGES, LanguageCode } from "../../../constants";

const { TextArea } = Input;

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
  updatedAt: string;
}

export const SEOEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      // Load existing page data
      const saved = localStorage.getItem("pages");
      const pages: PageData[] = saved ? JSON.parse(saved) : [];
      const page = pages.find((p) => p.id === id);

      if (page) {
        // Set form values for all SEO fields
        form.setFieldsValue({
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `metaTitle_${lang.code}`,
              page.translations[lang.code]?.metaTitle || "",
            ])
          ),
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `metaDescription_${lang.code}`,
              page.translations[lang.code]?.metaDescription || "",
            ])
          ),
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `metaKeywords_${lang.code}`,
              page.translations[lang.code]?.metaKeywords || "",
            ])
          ),
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `ogTitle_${lang.code}`,
              page.translations[lang.code]?.ogTitle || "",
            ])
          ),
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `ogDescription_${lang.code}`,
              page.translations[lang.code]?.ogDescription || "",
            ])
          ),
          ogImage: page.seo?.ogImage || "",
          canonicalUrl: page.seo?.canonicalUrl || "",
          robotsIndex: page.seo?.robotsIndex ?? true,
          robotsFollow: page.seo?.robotsFollow ?? true,
          twitterCard: page.seo?.twitterCard || "summary",
        });
      }
    }
  }, [id, form]);

  const handleSubmit = (values: any) => {
    const saved = localStorage.getItem("pages");
    const pages: PageData[] = saved ? JSON.parse(saved) : [];
    const pageIndex = pages.findIndex((p) => p.id === id);

    if (pageIndex === -1) {
      message.error("Page not found");
      return;
    }

    const page = pages[pageIndex];

    // Update only SEO fields
    const updatedPage: PageData = {
      ...page,
      translations: Object.fromEntries(
        LANGUAGES.map((lang) => [
          lang.code,
          {
            ...page.translations[lang.code],
            metaTitle: values[`metaTitle_${lang.code}`] || "",
            metaDescription: values[`metaDescription_${lang.code}`] || "",
            metaKeywords: values[`metaKeywords_${lang.code}`] || "",
            ogTitle: values[`ogTitle_${lang.code}`] || "",
            ogDescription: values[`ogDescription_${lang.code}`] || "",
          },
        ])
      ) as any,
      seo: {
        ogImage: values.ogImage || "",
        canonicalUrl: values.canonicalUrl || "",
        robotsIndex: values.robotsIndex ?? true,
        robotsFollow: values.robotsFollow ?? true,
        twitterCard: values.twitterCard || "summary",
      },
      updatedAt: new Date().toISOString(),
    };

    pages[pageIndex] = updatedPage;
    localStorage.setItem("pages", JSON.stringify(pages));
    message.success("SEO settings updated successfully");
    navigate("/seo");
  };

  const renderLanguageFields = (langCode: LanguageCode, langLabel: string) => (
    <div key={langCode}>
      <Divider
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Meta Tags
      </Divider>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                Meta Title
              </span>
            }
            name={`metaTitle_${langCode}`}
            tooltip="Title for search engines (50-60 characters recommended)"
          >
            <Input
              placeholder={`SEO title for ${langLabel}`}
              style={{ fontSize: "14px" }}
              maxLength={60}
              showCount
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                Meta Keywords
              </span>
            }
            name={`metaKeywords_${langCode}`}
            tooltip="Comma-separated keywords"
          >
            <Input
              placeholder="keyword1, keyword2, keyword3"
              style={{ fontSize: "14px" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            Meta Description
          </span>
        }
        name={`metaDescription_${langCode}`}
        tooltip="Description for search engines (150-160 characters recommended)"
      >
        <TextArea
          rows={3}
          placeholder={`SEO description for ${langLabel}...`}
          style={{ fontSize: "14px" }}
          maxLength={160}
          showCount
        />
      </Form.Item>

      <Divider
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        Open Graph (Social Media)
      </Divider>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                OG Title
              </span>
            }
            name={`ogTitle_${langCode}`}
            tooltip="Title for social media sharing"
          >
            <Input
              placeholder={`Social media title for ${langLabel}`}
              style={{ fontSize: "14px" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                OG Description
              </span>
            }
            name={`ogDescription_${langCode}`}
            tooltip="Description for social media sharing"
          >
            <Input
              placeholder={`Social media description for ${langLabel}`}
              style={{ fontSize: "14px" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );

  const renderGlobalSEOSettings = () => (
    <div>
      <Divider
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginTop: 0,
          marginBottom: 16,
        }}
      >
        Open Graph Image
      </Divider>

      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            OG Image URL
          </span>
        }
        name="ogImage"
        tooltip="URL to image for social media sharing (recommended: 1200x630px)"
      >
        <Input
          placeholder="https://example.com/image.jpg"
          style={{ fontSize: "14px" }}
        />
      </Form.Item>

      <Divider
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Technical SEO
      </Divider>

      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            Canonical URL
          </span>
        }
        name="canonicalUrl"
        tooltip="Preferred URL for this page to avoid duplicate content issues"
      >
        <Input
          placeholder="https://example.com/page-url"
          style={{ fontSize: "14px" }}
        />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                Robots Index
              </span>
            }
            name="robotsIndex"
            valuePropName="checked"
            tooltip="Allow search engines to index this page"
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label={
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                Robots Follow
              </span>
            }
            name="robotsFollow"
            valuePropName="checked"
            tooltip="Allow search engines to follow links on this page"
          >
            <Switch />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>
            Twitter Card Type
          </span>
        }
        name="twitterCard"
        tooltip="Type of Twitter card to use when sharing"
      >
        <Select style={{ fontSize: "14px" }}>
          <Select.Option value="summary">Summary</Select.Option>
          <Select.Option value="summary_large_image">
            Summary Large Image
          </Select.Option>
          <Select.Option value="app">App</Select.Option>
          <Select.Option value="player">Player</Select.Option>
        </Select>
      </Form.Item>
    </div>
  );

  const getPageTitle = () => {
    if (id) {
      const saved = localStorage.getItem("pages");
      const pages: PageData[] = saved ? JSON.parse(saved) : [];
      const page = pages.find((p) => p.id === id);
      if (page) {
        return page.translations.en?.title || page.slug;
      }
    }
    return "Page";
  };

  return (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <GlobalOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <span style={{ fontSize: "18px", fontWeight: 600 }}>
            SEO Settings: {getPageTitle()}
          </span>
        </div>
      }
      extra={
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/seo")}
          style={{ fontSize: "14px", height: "36px" }}
        >
          Back to Manage SEO
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ fontSize: "14px" }}
      >
        <Tabs
          type="card"
          defaultActiveKey="en"
          items={[
            ...LANGUAGES.map((lang) => ({
              key: lang.code,
              label: (
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
                  {lang.label}
                </span>
              ),
              children: renderLanguageFields(lang.code, lang.label),
            })),
            {
              key: "global",
              label: (
                <span style={{ fontSize: "14px", fontWeight: 500 }}>
                  Global SEO Settings
                </span>
              ),
              children: renderGlobalSEOSettings(),
            },
          ]}
        />

        <Space style={{ marginTop: "24px" }}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            style={{ fontSize: "14px", height: "36px" }}
          >
            Save SEO Settings
          </Button>
          <Button
            onClick={() => navigate("/seo")}
            style={{ fontSize: "14px", height: "36px" }}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
