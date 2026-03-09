import { useState, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  Tabs,
  Form,
  Input,
  Select,
  Switch,
  Space,
  message,
  Divider,
  InputNumber,
} from "antd";
import {
  GlobalOutlined,
  ShareAltOutlined,
  MailOutlined,
  ApiOutlined,
  EyeOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  TranslationOutlined,
  SettingOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { ThemeCustomizer } from "../../components/common";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface WebsiteSettings {
  general: {
    siteName: string;
    siteTagline: string;
    siteDescription: string;
    logo: string;
    favicon: string;
    adminEmail: string;
    timezone: string;
    dateFormat: string;
    timeFormat: string;
  };
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    defaultMetaKeywords: string;
    defaultOgImage: string;
    robotsIndex: boolean;
    robotsFollow: boolean;
    sitemap: boolean;
    googleAnalyticsId: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    enableSocialSharing: boolean;
    defaultShareImage: string;
  };
  email: {
    smtpHost: string;
    smtpPort: number;
    smtpUsername: string;
    smtpPassword: string;
    smtpSecure: boolean;
    fromEmail: string;
    fromName: string;
  };
  api: {
    googleMapsKey: string;
    recaptchaSiteKey: string;
    recaptchaSecretKey: string;
    stripePublicKey: string;
    stripeSecretKey: string;
  };
  appearance: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
    headerLayout: string;
    sidebarPosition: string;
  };
  performance: {
    enableCaching: boolean;
    cacheExpiry: number;
    enableCompression: boolean;
    lazyLoadImages: boolean;
    minifyCSS: boolean;
    minifyJS: boolean;
  };
  security: {
    enable2FA: boolean;
    sessionTimeout: number;
    maxLoginAttempts: number;
    passwordMinLength: number;
    requireStrongPassword: boolean;
  };
  language: {
    defaultLanguage: string;
    enableMultiLanguage: boolean;
    availableLanguages: string[];
  };
  advanced: {
    maintenanceMode: boolean;
    maintenanceMessage: string;
    customHeaderScript: string;
    customFooterScript: string;
    allowRegistration: boolean;
    enableComments: boolean;
  };
}

export const Settings = () => {
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [form] = Form.useForm();
  const [settings, setSettings] = useState<WebsiteSettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = () => {
    const saved = localStorage.getItem("websiteSettings");
    if (saved) {
      const parsedSettings = JSON.parse(saved);
      setSettings(parsedSettings);
      form.setFieldsValue(parsedSettings);
    } else {
      const defaultSettings: WebsiteSettings = {
        general: {
          siteName: "My Website",
          siteTagline: "Your tagline here",
          siteDescription: "Website description",
          logo: "",
          favicon: "",
          adminEmail: "admin@example.com",
          timezone: "UTC",
          dateFormat: "YYYY-MM-DD",
          timeFormat: "24h",
        },
        seo: {
          defaultMetaTitle: "",
          defaultMetaDescription: "",
          defaultMetaKeywords: "",
          defaultOgImage: "",
          robotsIndex: true,
          robotsFollow: true,
          sitemap: true,
          googleAnalyticsId: "",
        },
        social: {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          youtube: "",
          enableSocialSharing: true,
          defaultShareImage: "",
        },
        email: {
          smtpHost: "",
          smtpPort: 587,
          smtpUsername: "",
          smtpPassword: "",
          smtpSecure: true,
          fromEmail: "",
          fromName: "",
        },
        api: {
          googleMapsKey: "",
          recaptchaSiteKey: "",
          recaptchaSecretKey: "",
          stripePublicKey: "",
          stripeSecretKey: "",
        },
        appearance: {
          primaryColor: "#1890ff",
          secondaryColor: "#52c41a",
          fontFamily: "system-ui",
          headerLayout: "fixed",
          sidebarPosition: "left",
        },
        performance: {
          enableCaching: true,
          cacheExpiry: 3600,
          enableCompression: true,
          lazyLoadImages: true,
          minifyCSS: true,
          minifyJS: true,
        },
        security: {
          enable2FA: false,
          sessionTimeout: 3600,
          maxLoginAttempts: 5,
          passwordMinLength: 8,
          requireStrongPassword: true,
        },
        language: {
          defaultLanguage: "en",
          enableMultiLanguage: true,
          availableLanguages: ["en", "hi"],
        },
        advanced: {
          maintenanceMode: false,
          maintenanceMessage: "Website is under maintenance",
          customHeaderScript: "",
          customFooterScript: "",
          allowRegistration: true,
          enableComments: true,
        },
      };
      setSettings(defaultSettings);
      form.setFieldsValue(defaultSettings);
    }
  };

  const handleSave = (section: keyof WebsiteSettings) => {
    form.validateFields().then((values) => {
      const updatedSettings = {
        ...settings,
        [section]: values[section],
      };
      localStorage.setItem("websiteSettings", JSON.stringify(updatedSettings));
      setSettings(updatedSettings as WebsiteSettings);
      message.success(
        `${
          section.charAt(0).toUpperCase() + section.slice(1)
        } settings saved successfully`
      );
    });
  };

  const renderGeneralSettings = () => (
    <Card title="General Settings">
      <Form form={form} layout="vertical">
        <Form.Item
          label="Site Name"
          name={["general", "siteName"]}
          rules={[{ required: true, message: "Please enter site name" }]}
        >
          <Input placeholder="My Website" />
        </Form.Item>

        <Form.Item label="Site Tagline" name={["general", "siteTagline"]}>
          <Input placeholder="Your tagline here" />
        </Form.Item>

        <Form.Item
          label="Site Description"
          name={["general", "siteDescription"]}
        >
          <TextArea rows={3} placeholder="Brief description of your website" />
        </Form.Item>

        <Form.Item label="Admin Email" name={["general", "adminEmail"]}>
          <Input type="email" placeholder="admin@example.com" />
        </Form.Item>

        <Form.Item label="Timezone" name={["general", "timezone"]}>
          <Select>
            <Select.Option value="UTC">UTC</Select.Option>
            <Select.Option value="America/New_York">
              America/New York
            </Select.Option>
            <Select.Option value="Europe/London">Europe/London</Select.Option>
            <Select.Option value="Asia/Kolkata">Asia/Kolkata</Select.Option>
            <Select.Option value="Asia/Tokyo">Asia/Tokyo</Select.Option>
          </Select>
        </Form.Item>

        <Space>
          <Form.Item label="Date Format" name={["general", "dateFormat"]}>
            <Select style={{ width: 150 }}>
              <Select.Option value="YYYY-MM-DD">YYYY-MM-DD</Select.Option>
              <Select.Option value="DD/MM/YYYY">DD/MM/YYYY</Select.Option>
              <Select.Option value="MM/DD/YYYY">MM/DD/YYYY</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Time Format" name={["general", "timeFormat"]}>
            <Select style={{ width: 100 }}>
              <Select.Option value="24h">24 Hour</Select.Option>
              <Select.Option value="12h">12 Hour</Select.Option>
            </Select>
          </Form.Item>
        </Space>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("general")}
        >
          Save General Settings
        </Button>
      </Form>
    </Card>
  );

  const renderSEOSettings = () => (
    <Card title="SEO Settings">
      <Form form={form} layout="vertical">
        <Form.Item
          label="Default Meta Title"
          name={["seo", "defaultMetaTitle"]}
        >
          <Input placeholder="Default page title" maxLength={60} showCount />
        </Form.Item>

        <Form.Item
          label="Default Meta Description"
          name={["seo", "defaultMetaDescription"]}
        >
          <TextArea
            rows={3}
            placeholder="Default page description"
            maxLength={160}
            showCount
          />
        </Form.Item>

        <Form.Item
          label="Default Meta Keywords"
          name={["seo", "defaultMetaKeywords"]}
        >
          <Input placeholder="keyword1, keyword2, keyword3" />
        </Form.Item>

        <Form.Item
          label="Default OG Image URL"
          name={["seo", "defaultOgImage"]}
        >
          <Input placeholder="https://example.com/og-image.jpg" />
        </Form.Item>

        <Form.Item
          label="Google Analytics ID"
          name={["seo", "googleAnalyticsId"]}
        >
          <Input placeholder="G-XXXXXXXXXX" />
        </Form.Item>

        <Divider />

        <Space direction="vertical">
          <Form.Item
            label="Search Engine Indexing"
            name={["seo", "robotsIndex"]}
            valuePropName="checked"
          >
            <Switch checkedChildren="Allow" unCheckedChildren="Block" />
          </Form.Item>

          <Form.Item
            label="Follow Links"
            name={["seo", "robotsFollow"]}
            valuePropName="checked"
          >
            <Switch checkedChildren="Allow" unCheckedChildren="Block" />
          </Form.Item>

          <Form.Item
            label="Generate Sitemap"
            name={["seo", "sitemap"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Space>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("seo")}
        >
          Save SEO Settings
        </Button>
      </Form>
    </Card>
  );

  const renderSocialSettings = () => (
    <Card title="Social Media Settings">
      <Form form={form} layout="vertical">
        <Form.Item label="Facebook URL" name={["social", "facebook"]}>
          <Input placeholder="https://facebook.com/yourpage" />
        </Form.Item>

        <Form.Item label="Twitter URL" name={["social", "twitter"]}>
          <Input placeholder="https://twitter.com/yourhandle" />
        </Form.Item>

        <Form.Item label="Instagram URL" name={["social", "instagram"]}>
          <Input placeholder="https://instagram.com/yourprofile" />
        </Form.Item>

        <Form.Item label="LinkedIn URL" name={["social", "linkedin"]}>
          <Input placeholder="https://linkedin.com/company/yourcompany" />
        </Form.Item>

        <Form.Item label="YouTube URL" name={["social", "youtube"]}>
          <Input placeholder="https://youtube.com/channel/yourchannel" />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Enable Social Sharing"
          name={["social", "enableSocialSharing"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Default Share Image"
          name={["social", "defaultShareImage"]}
        >
          <Input placeholder="https://example.com/share-image.jpg" />
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("social")}
        >
          Save Social Settings
        </Button>
      </Form>
    </Card>
  );

  const renderEmailSettings = () => (
    <Card title="Email Settings (SMTP Configuration)">
      <Form form={form} layout="vertical">
        <Form.Item label="SMTP Host" name={["email", "smtpHost"]}>
          <Input placeholder="smtp.gmail.com" />
        </Form.Item>

        <Form.Item label="SMTP Port" name={["email", "smtpPort"]}>
          <InputNumber style={{ width: "100%" }} placeholder="587" />
        </Form.Item>

        <Form.Item label="SMTP Username" name={["email", "smtpUsername"]}>
          <Input placeholder="your-email@gmail.com" />
        </Form.Item>

        <Form.Item label="SMTP Password" name={["email", "smtpPassword"]}>
          <Input.Password placeholder="Your SMTP password" />
        </Form.Item>

        <Form.Item
          label="Use Secure Connection (SSL/TLS)"
          name={["email", "smtpSecure"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Divider />

        <Form.Item label="From Email" name={["email", "fromEmail"]}>
          <Input placeholder="noreply@example.com" />
        </Form.Item>

        <Form.Item label="From Name" name={["email", "fromName"]}>
          <Input placeholder="My Website" />
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("email")}
        >
          Save Email Settings
        </Button>
      </Form>
    </Card>
  );

  const renderAPISettings = () => (
    <Card title="API & Integrations">
      <Form form={form} layout="vertical">
        <Paragraph type="secondary">
          Configure third-party API keys and integrations
        </Paragraph>

        <Form.Item label="Google Maps API Key" name={["api", "googleMapsKey"]}>
          <Input placeholder="AIzaSy..." />
        </Form.Item>

        <Form.Item
          label="reCAPTCHA Site Key"
          name={["api", "recaptchaSiteKey"]}
        >
          <Input placeholder="6Lc..." />
        </Form.Item>

        <Form.Item
          label="reCAPTCHA Secret Key"
          name={["api", "recaptchaSecretKey"]}
        >
          <Input.Password placeholder="6Lc..." />
        </Form.Item>

        <Divider />

        <Form.Item label="Stripe Public Key" name={["api", "stripePublicKey"]}>
          <Input placeholder="pk_..." />
        </Form.Item>

        <Form.Item label="Stripe Secret Key" name={["api", "stripeSecretKey"]}>
          <Input.Password placeholder="sk_..." />
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("api")}
        >
          Save API Settings
        </Button>
      </Form>
    </Card>
  );

  const renderAppearanceSettings = () => (
    <Card
      title="Appearance Settings"
      extra={
        <Button type="primary" onClick={() => setCustomizerOpen(true)}>
          Customize Theme
        </Button>
      }
    >
      <Paragraph>
        Personalize your application's appearance by customizing colors, fonts,
        and theme settings.
      </Paragraph>
      <ThemeCustomizer
        open={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
      />

      <Divider />

      <Form form={form} layout="vertical">
        <Form.Item label="Header Layout" name={["appearance", "headerLayout"]}>
          <Select>
            <Select.Option value="fixed">Fixed</Select.Option>
            <Select.Option value="static">Static</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Sidebar Position"
          name={["appearance", "sidebarPosition"]}
        >
          <Select>
            <Select.Option value="left">Left</Select.Option>
            <Select.Option value="right">Right</Select.Option>
          </Select>
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("appearance")}
        >
          Save Appearance Settings
        </Button>
      </Form>
    </Card>
  );

  const renderPerformanceSettings = () => (
    <Card title="Performance & Optimization">
      <Form form={form} layout="vertical">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form.Item
            label="Enable Caching"
            name={["performance", "enableCaching"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Cache Expiry (seconds)"
            name={["performance", "cacheExpiry"]}
          >
            <InputNumber style={{ width: "100%" }} min={60} max={86400} />
          </Form.Item>

          <Form.Item
            label="Enable Compression"
            name={["performance", "enableCompression"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Lazy Load Images"
            name={["performance", "lazyLoadImages"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Minify CSS"
            name={["performance", "minifyCSS"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Minify JavaScript"
            name={["performance", "minifyJS"]}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Space>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("performance")}
        >
          Save Performance Settings
        </Button>
      </Form>
    </Card>
  );

  const renderSecuritySettings = () => (
    <Card title="Security Settings">
      <Form form={form} layout="vertical">
        <Form.Item
          label="Enable Two-Factor Authentication"
          name={["security", "enable2FA"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Session Timeout (seconds)"
          name={["security", "sessionTimeout"]}
        >
          <InputNumber style={{ width: "100%" }} min={300} max={86400} />
        </Form.Item>

        <Form.Item
          label="Max Login Attempts"
          name={["security", "maxLoginAttempts"]}
        >
          <InputNumber style={{ width: "100%" }} min={3} max={10} />
        </Form.Item>

        <Form.Item
          label="Minimum Password Length"
          name={["security", "passwordMinLength"]}
        >
          <InputNumber style={{ width: "100%" }} min={6} max={20} />
        </Form.Item>

        <Form.Item
          label="Require Strong Password"
          name={["security", "requireStrongPassword"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("security")}
        >
          Save Security Settings
        </Button>
      </Form>
    </Card>
  );

  const renderLanguageSettings = () => (
    <Card title="Language Settings">
      <Form form={form} layout="vertical">
        <Form.Item
          label="Default Language"
          name={["language", "defaultLanguage"]}
        >
          <Select>
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="hi">Hindi</Select.Option>
            <Select.Option value="es">Spanish</Select.Option>
            <Select.Option value="fr">French</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Enable Multi-Language"
          name={["language", "enableMultiLanguage"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Available Languages"
          name={["language", "availableLanguages"]}
        >
          <Select mode="multiple">
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="hi">Hindi</Select.Option>
            <Select.Option value="es">Spanish</Select.Option>
            <Select.Option value="fr">French</Select.Option>
            <Select.Option value="de">German</Select.Option>
            <Select.Option value="ja">Japanese</Select.Option>
            <Select.Option value="zh">Chinese</Select.Option>
          </Select>
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("language")}
        >
          Save Language Settings
        </Button>
      </Form>
    </Card>
  );

  const renderAdvancedSettings = () => (
    <Card title="Advanced Settings">
      <Form form={form} layout="vertical">
        <Form.Item
          label="Maintenance Mode"
          name={["advanced", "maintenanceMode"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Maintenance Message"
          name={["advanced", "maintenanceMessage"]}
        >
          <TextArea
            rows={2}
            placeholder="Website is under maintenance. Please check back later."
          />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Custom Header Script"
          name={["advanced", "customHeaderScript"]}
        >
          <TextArea
            rows={4}
            placeholder="<!-- Custom scripts for <head> section -->"
          />
        </Form.Item>

        <Form.Item
          label="Custom Footer Script"
          name={["advanced", "customFooterScript"]}
        >
          <TextArea
            rows={4}
            placeholder="<!-- Custom scripts before </body> tag -->"
          />
        </Form.Item>

        <Divider />

        <Form.Item
          label="Allow User Registration"
          name={["advanced", "allowRegistration"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label="Enable Comments"
          name={["advanced", "enableComments"]}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Button
          type="primary"
          icon={<SaveOutlined />}
          onClick={() => handleSave("advanced")}
        >
          Save Advanced Settings
        </Button>
      </Form>
    </Card>
  );

  const tabItems = [
    {
      key: "general",
      label: (
        <span>
          <GlobalOutlined />
          General
        </span>
      ),
      children: renderGeneralSettings(),
    },
    {
      key: "seo",
      label: (
        <span>
          <GlobalOutlined />
          SEO
        </span>
      ),
      children: renderSEOSettings(),
    },
    {
      key: "social",
      label: (
        <span>
          <ShareAltOutlined />
          Social Media
        </span>
      ),
      children: renderSocialSettings(),
    },
    {
      key: "email",
      label: (
        <span>
          <MailOutlined />
          Email
        </span>
      ),
      children: renderEmailSettings(),
    },
    {
      key: "api",
      label: (
        <span>
          <ApiOutlined />
          API & Integrations
        </span>
      ),
      children: renderAPISettings(),
    },
    {
      key: "appearance",
      label: (
        <span>
          <EyeOutlined />
          Appearance
        </span>
      ),
      children: renderAppearanceSettings(),
    },
    {
      key: "performance",
      label: (
        <span>
          <ThunderboltOutlined />
          Performance
        </span>
      ),
      children: renderPerformanceSettings(),
    },
    {
      key: "security",
      label: (
        <span>
          <SafetyOutlined />
          Security
        </span>
      ),
      children: renderSecuritySettings(),
    },
    {
      key: "language",
      label: (
        <span>
          <TranslationOutlined />
          Language
        </span>
      ),
      children: renderLanguageSettings(),
    },
    {
      key: "advanced",
      label: (
        <span>
          <SettingOutlined />
          Advanced
        </span>
      ),
      children: renderAdvancedSettings(),
    },
  ];

  return (
    <div>
      <Title level={2}>Settings</Title>
      <Paragraph>Manage your website settings and preferences</Paragraph>
      <Tabs
        defaultActiveKey="general"
        items={tabItems}
        style={{ marginTop: 24 }}
        type="card"
      />
    </div>
  );
};
