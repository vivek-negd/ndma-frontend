import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Input, Button, Card, Space, message, Select } from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

interface ContentItem {
  id: string;
  title: string;
  language: string;
  jsonData: any;
  createdAt: string;
  updatedAt: string;
}

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
  { value: "zh", label: "Chinese" },
];

export const ContentEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [jsonValue, setJsonValue] = useState("{}");
  const [jsonError, setJsonError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const saved = localStorage.getItem("jsonContents");
      const contents: ContentItem[] = saved ? JSON.parse(saved) : [];
      const content = contents.find((c) => c.id === id);

      if (content) {
        form.setFieldsValue({
          title: content.title,
          language: content.language,
        });
        setJsonValue(JSON.stringify(content.jsonData, null, 2));
      }
    } else {
      // Default JSON for new content
      setJsonValue(JSON.stringify({ key: "value", example: true }, null, 2));
    }
  }, [id, form]);

  const validateJSON = (value: string): boolean => {
    try {
      JSON.parse(value);
      setJsonError(null);
      return true;
    } catch (e: any) {
      setJsonError(e.message);
      return false;
    }
  };

  const handleJsonChange = (value: string) => {
    setJsonValue(value);
    validateJSON(value);
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(jsonValue);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonValue(formatted);
      setJsonError(null);
      message.success("JSON formatted successfully");
    } catch (e: any) {
      message.error("Invalid JSON: " + e.message);
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(jsonValue);
      const minified = JSON.stringify(parsed);
      setJsonValue(minified);
      setJsonError(null);
      message.success("JSON minified successfully");
    } catch (e: any) {
      message.error("Invalid JSON: " + e.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (!validateJSON(jsonValue)) {
        message.error("Please fix JSON errors before saving");
        return;
      }

      const saved = localStorage.getItem("jsonContents");
      const contents: ContentItem[] = saved ? JSON.parse(saved) : [];

      const jsonData = JSON.parse(jsonValue);

      if (id) {
        // Update existing content
        const updatedContents = contents.map((content) =>
          content.id === id
            ? {
                ...content,
                title: values.title,
                language: values.language,
                jsonData,
                updatedAt: new Date().toISOString(),
              }
            : content
        );
        localStorage.setItem("jsonContents", JSON.stringify(updatedContents));
        message.success("Content updated successfully");
      } else {
        // Create new content
        const newContent: ContentItem = {
          id: Date.now().toString(),
          title: values.title,
          language: values.language,
          jsonData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        localStorage.setItem(
          "jsonContents",
          JSON.stringify([...contents, newContent])
        );
        message.success("Content created successfully");
      }

      navigate("/content");
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Card
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <CodeOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
          <span style={{ fontSize: "18px", fontWeight: 600 }}>
            {id ? "Edit Content" : "Add New Content"}
          </span>
        </div>
      }
      extra={
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/content")}
          style={{ fontSize: "14px", height: "36px" }}
        >
          Back to Content List
        </Button>
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
    >
      <Form form={form} layout="vertical" style={{ fontSize: "14px" }}>
        <Form.Item
          label={
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Title</span>
          }
          name="title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input
            placeholder="e.g., API Configuration, Menu Items, etc."
            style={{ fontSize: "14px" }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontSize: "14px", fontWeight: 500 }}>Language</span>
          }
          name="language"
          rules={[{ required: true, message: "Please select a language" }]}
          initialValue="en"
        >
          <Select
            placeholder="Select language"
            style={{ fontSize: "14px" }}
            options={LANGUAGES}
          />
        </Form.Item>

        <Form.Item
          label={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                JSON Content
              </span>
              <Space>
                <Button
                  size="small"
                  onClick={formatJSON}
                  style={{ fontSize: "12px" }}
                >
                  Format
                </Button>
                <Button
                  size="small"
                  onClick={minifyJSON}
                  style={{ fontSize: "12px" }}
                >
                  Minify
                </Button>
              </Space>
            </div>
          }
        >
          <TextArea
            value={jsonValue}
            onChange={(e) => handleJsonChange(e.target.value)}
            placeholder='{"key": "value"}'
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              minHeight: "400px",
              backgroundColor: "#f5f5f5",
            }}
            spellCheck={false}
          />
          {jsonError && (
            <div
              style={{
                marginTop: "8px",
                padding: "8px 12px",
                background: "#fff2f0",
                border: "1px solid #ffccc7",
                borderRadius: "4px",
                color: "#cf1322",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            >
              <strong>JSON Error:</strong> {jsonError}
            </div>
          )}
          {!jsonError && jsonValue && (
            <div
              style={{
                marginTop: "8px",
                padding: "8px 12px",
                background: "#f6ffed",
                border: "1px solid #b7eb8f",
                borderRadius: "4px",
                color: "#389e0d",
                fontSize: "12px",
              }}
            >
              ✓ Valid JSON
            </div>
          )}
        </Form.Item>

        <Space style={{ marginTop: "24px" }}>
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={handleSubmit}
            disabled={!!jsonError}
            style={{ fontSize: "14px", height: "36px" }}
          >
            {id ? "Update Content" : "Create Content"}
          </Button>
          <Button
            onClick={() => navigate("/content")}
            style={{ fontSize: "14px", height: "36px" }}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
