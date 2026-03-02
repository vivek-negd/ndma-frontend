import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Space,
  message,
  Tabs,
} from "antd";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { LANGUAGES, LanguageCode } from "../../../constants";
import { MonacoEditor } from "../../components/common";

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

export const PageEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      // Load existing page data
      const saved = localStorage.getItem("customPages");
      const pages: PageData[] = saved ? JSON.parse(saved) : [];
      const page = pages.find((p) => p.id === id);

      if (page) {
        form.setFieldsValue({
          slug: page.slug,
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `title_${lang.code}`,
              page.translations[lang.code]?.title || "",
            ])
          ),
          ...Object.fromEntries(
            LANGUAGES.map((lang) => [
              `content_${lang.code}`,
              page.translations[lang.code]?.content || "",
            ])
          ),
        });
      }
    }
  }, [id, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const saved = localStorage.getItem("customPages");
      const pages: PageData[] = saved ? JSON.parse(saved) : [];

      const translations: any = {};
      LANGUAGES.forEach((lang) => {
        translations[lang.code] = {
          title: values[`title_${lang.code}`],
          content: values[`content_${lang.code}`],
        };
      });

      const seo = {
        ogImage: "",
        canonicalUrl: "",
        robotsIndex: true,
        robotsFollow: true,
        twitterCard: "summary",
      };

      if (id) {
        // Update existing page
        const updatedPages = pages.map((page) =>
          page.id === id
            ? {
                ...page,
                slug: values.slug,
                translations,
                seo,
              }
            : page
        );
        localStorage.setItem("customPages", JSON.stringify(updatedPages));
        message.success("Page updated successfully");
      } else {
        // Create new page
        const newPage: PageData = {
          id: Date.now().toString(),
          slug: values.slug,
          translations,
          seo,
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem(
          "customPages",
          JSON.stringify([...pages, newPage])
        );
        message.success("Page created successfully");
      }

      navigate("/pages");
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const renderLanguageFields = (langCode: LanguageCode, langLabel: string) => (
    <Space direction="vertical" style={{ width: "100%" }} size="middle">
      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>Page Title</span>
        }
        name={`title_${langCode}`}
        rules={[
          {
            required: true,
            message: `Please enter page title in ${langLabel}`,
          },
        ]}
      >
        <Input
          placeholder={`e.g., About Us (${langLabel})`}
          style={{ fontSize: "14px" }}
        />
      </Form.Item>

      <Form.Item
        label={
          <span style={{ fontSize: "14px", fontWeight: 500 }}>Content</span>
        }
        name={`content_${langCode}`}
        rules={[
          {
            required: true,
            message: `Please enter page content in ${langLabel}`,
          },
        ]}
      >
        <MonacoEditor
          language="html"
          height="500px"
          placeholder={`Enter page content in ${langLabel}...`}
        />
      </Form.Item>
    </Space>
  );

  const tabItems = LANGUAGES.map((lang) => ({
    key: lang.code,
    label: lang.label,
    children: renderLanguageFields(lang.code, lang.label),
  }));

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
        <Space size="middle">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/pages")}
            style={{ height: "36px", fontSize: "14px" }}
          >
            Back
          </Button>
          <Title
            level={3}
            style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}
          >
            {id ? "Edit Page" : "Create New Page"}
          </Title>
        </Space>
      </div>

      <Form form={form} layout="vertical" style={{ fontSize: "14px" }}>
        <Form.Item
          label={
            <span style={{ fontSize: "14px", fontWeight: 500 }}>URL Slug</span>
          }
          name="slug"
          rules={[
            { required: true, message: "Please enter page slug" },
            {
              pattern: /^[a-z0-9-]+$/,
              message:
                "Slug can only contain lowercase letters, numbers, and hyphens",
            },
          ]}
          tooltip="This will be the URL path for your page"
        >
          <Input
            placeholder="e.g., about-us"
            addonBefore="/"
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        <Title
          level={5}
          style={{
            marginTop: 16,
            marginBottom: 12,
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Page Content (Multi-language)
        </Title>

        <Tabs defaultActiveKey="en" items={tabItems} />

        <Space style={{ marginTop: 20 }}>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={handleSubmit}
            style={{ height: "36px", fontSize: "14px" }}
          >
            {id ? "Update Page" : "Create Page"}
          </Button>
          <Button
            onClick={() => navigate("/pages")}
            style={{ height: "36px", fontSize: "14px" }}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
