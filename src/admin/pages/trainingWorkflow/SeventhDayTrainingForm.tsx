import React, { useState } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  Space,
  message,
  Upload,
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const SeventhDayTrainingForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      console.log("Seventh Day Training Data:", values);
      message.success("Seventh day training saved successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to save training data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", background: "#f5f5f5" }}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Training Workflow /&nbsp;
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Add New 7th Day Training</span>
          </Text>
          <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
            Add New 7th Day Training Record
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Fill in the details and upload media from the final day.
          </Text>
        </div>
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ borderRadius: 8 }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      {/* ── Form card ── */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px" }}>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ padding: "24px" }}
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
            <Col xs={24} sm={12} md={6}>
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

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Batch No."
                name="batchNumber"
                rules={[{ required: true, message: 'Please enter batch number!' }]}
              >
                <Input placeholder="Enter Batch Number" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Institute Details"
                name="instituteDetails"
                rules={[{ required: true, message: 'Please enter institute details!' }]}
              >
                <Input placeholder="Enter Institute Details" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Trainers Details"
                name="trainersDetails"
                rules={[{ required: true, message: 'Please enter trainers details!' }]}
              >
                <Input.TextArea
                  placeholder="Enter Trainers Details"
                  rows={3}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={12}>
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

            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Upload Option"
                name="uploadOption"
                rules={[{ required: true, message: 'Please select upload option!' }]}
              >
                <Select placeholder="Select Upload Option">
                  <Select.Option value="photos">Upload Photos</Select.Option>
                  <Select.Option value="documents">Upload Documents</Select.Option>
                  <Select.Option value="attendance">Upload Attendance</Select.Option>
                  <Select.Option value="materials">Upload Training Materials</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={loading}
              size="large"
              style={{ borderRadius: 8, background: "#1d4ed8", border: "none" }}
            >
              Save Training
            </Button>
            <Button
              type="default"
              icon={<UploadOutlined />}
              size="large"
            >
              Upload Files
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};