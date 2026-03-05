import React, { useState } from "react";
import {
  Upload,
  Button,
  Card,
  Typography,
  Space,
  message,
  Divider,
  Alert,
  Progress,
  Form,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
} from "antd";
import {
  InboxOutlined,
  UploadOutlined,
  DownloadOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
const { Title, Text } = Typography;
const { Dragger } = Upload;

export const YouthOrganisationForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/zip",
  ];

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    fileList,
    beforeUpload: (file) => {
      if (!allowedTypes.includes(file.type)) {
        message.error("Only XLS, XLSX or ZIP files are allowed!");
        return Upload.LIST_IGNORE;
      }

      setFileList([file]);
      return false; // prevent auto upload
    },
    onRemove: () => setFileList([]),
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.warning("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", fileList[0]);
    
    // Add form fields
    const formValues = await form.validateFields();
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key]);
    });

    try {
      setLoading(true);

      await axios.post("/api/volunteers/bulk-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total || 1)
          );
          setUploadProgress(percent);
        },
      });

      message.success("File uploaded successfully!");
      setFileList([]);
      setUploadProgress(0);
      form.resetFields();
    } catch (error) {
      message.error("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ borderRadius: 8 }}
        >
          Back
        </Button>
      </div>

    <Card
      style={{ maxWidth: "100%", marginBottom: 16 }}
      bordered
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={4} style={{ margin: 0 }}>Add Youth Org Record</Title>
        <Paragraph>
          Fill in the details to register a new youth organisation activity.
        </Paragraph>

        <Alert
          message="Upload Instructions"
          description="Upload an Excel (.xls / .xlsx) file or ZIP file containing volunteer data with the required fields."
          type="info"
          showIcon
        />

        <Form
          form={form}
          layout="vertical"
          style={{ marginBottom: 0 }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true, message: 'Please select state!' }]}
              >
                <Select placeholder="Select State">
                  <Select.Option value="MH">Maharashtra</Select.Option>
                  <Select.Option value="GJ">Gujarat</Select.Option>
                  <Select.Option value="RJ">Rajasthan</Select.Option>
                  <Select.Option value="UP">Uttar Pradesh</Select.Option>
                  <Select.Option value="KA">Karnataka</Select.Option>
                  <Select.Option value="TN">Tamil Nadu</Select.Option>
                  <Select.Option value="WB">West Bengal</Select.Option>
                  <Select.Option value="DL">Delhi</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'Please enter district!' }]}
              >
                <Input placeholder="Enter District" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Organization"
                name="organization"
                rules={[{ required: true, message: 'Please enter organization!' }]}
              >
                <Input placeholder="Enter Organization Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="No. of Vol."
                name="numberOfVolunteers"
                rules={[{ required: true, message: 'Please enter number of volunteers!' }]}
              >
                <Input 
                  type="number" 
                  placeholder="Enter Number of Volunteers" 
                  min={1}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please select date!' }]}
              >
                <DatePicker 
                  style={{ width: "100%" }}
                  placeholder="Select Date"
                />
              </Form.Item>
            </Col>

            {/* <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Upload Option"
                name="uploadOption"
                rules={[{ required: true, message: 'Please select upload option!' }]}
              >
                <Select placeholder="Select Upload Option">
                  <Select.Option value="create">Create New Volunteers</Select.Option>
                  <Select.Option value="update">Update Existing Volunteers</Select.Option>
                  <Select.Option value="replace">Replace All Volunteers</Select.Option>
                </Select>
              </Form.Item>
            </Col> */}
          </Row>
        </Form>

        <Divider />

        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ fontSize: 40 }} />
          </p>
          <Text strong>
            Click or Drag XLS / XLSX / ZIP file to upload
          </Text>
          <br />
          <Text type="secondary">
            Only one file allowed. Max size depends on server limit.
          </Text>
        </Dragger>

        {uploadProgress > 0 && (
          <Progress percent={uploadProgress} />
        )}

        <Divider />

        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Button
            icon={<DownloadOutlined />}
            type="default"
          >
            Download Sample Template
          </Button>

          <Button
            type="primary"
            icon={<UploadOutlined />}
            onClick={handleUpload}
            loading={loading}
            disabled={fileList.length === 0}
          >
            Upload File
          </Button>
        </Space>
      </Space>
    </Card>
    </>
  );
};

