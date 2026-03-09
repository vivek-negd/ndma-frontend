import { useRef, useEffect, CSSProperties, useState } from "react";
import { Button, Space } from "antd";
import { CodeOutlined, EyeOutlined } from "@ant-design/icons";

interface MonacoEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  language?: string;
  height?: string;
  theme?: "light" | "vs-dark";
  readOnly?: boolean;
  placeholder?: string;
  showPreview?: boolean;
}

export const MonacoEditor = ({
  value = "",
  onChange,
  language = "html",
  height = "400px",
  theme = "light",
  readOnly = false,
  placeholder = "",
  showPreview = true,
}: MonacoEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");

  useEffect(() => {
    if (textareaRef.current && value !== undefined) {
      textareaRef.current.value = value;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue =
        textarea.value.substring(0, start) +
        "  " +
        textarea.value.substring(end);
      textarea.value = newValue;
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const editorStyles: CSSProperties = {
    width: "100%",
    height,
    padding: "12px",
    fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
    fontSize: "14px",
    lineHeight: "1.6",
    border: "none",
    borderRadius: "0",
    backgroundColor: theme === "vs-dark" ? "#1e1e1e" : "#f5f5f5",
    color: theme === "vs-dark" ? "#d4d4d4" : "#000000",
    resize: "vertical",
    outline: "none",
    tabSize: 2,
  };

  const previewStyles: CSSProperties = {
    width: "100%",
    height,
    padding: "12px",
    backgroundColor: "#ffffff",
    border: "none",
    overflow: "auto",
  };

  const containerStyles: CSSProperties = {
    position: "relative",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    overflow: "hidden",
    backgroundColor: theme === "vs-dark" ? "#1e1e1e" : "#ffffff",
  };

  const headerStyles: CSSProperties = {
    padding: "8px 12px",
    backgroundColor: theme === "vs-dark" ? "#252526" : "#f0f0f0",
    borderBottom: "1px solid #d9d9d9",
    fontSize: "12px",
    color: theme === "vs-dark" ? "#cccccc" : "#666666",
    fontFamily: "system-ui, -apple-system, sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={containerStyles}>
      <div style={headerStyles}>
        <span>{language.toUpperCase()} Editor</span>
        <Space size="small">
          {showPreview && language === "html" && (
            <Space size={0}>
              <Button
                type={activeTab === "code" ? "primary" : "default"}
                size="small"
                icon={<CodeOutlined />}
                onClick={() => setActiveTab("code")}
                style={{
                  fontSize: "11px",
                  height: "24px",
                  borderRadius: "4px 0 0 4px",
                }}
              >
                Code
              </Button>
              <Button
                type={activeTab === "preview" ? "primary" : "default"}
                size="small"
                icon={<EyeOutlined />}
                onClick={() => setActiveTab("preview")}
                style={{
                  fontSize: "11px",
                  height: "24px",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                Preview
              </Button>
            </Space>
          )}
          {!showPreview && (
            <span style={{ fontSize: "11px", opacity: 0.7 }}>
              Press Tab for indentation
            </span>
          )}
        </Space>
      </div>
      {activeTab === "code" ? (
        <textarea
          ref={textareaRef}
          defaultValue={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={readOnly}
          spellCheck={false}
          style={editorStyles}
        />
      ) : (
        <div style={previewStyles}>
          <div
            dangerouslySetInnerHTML={{
              __html: value || "<p>No content to preview</p>",
            }}
          />
        </div>
      )}
    </div>
  );
};
