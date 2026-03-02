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
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

export const FourthDayTraining = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      console.log("Fourth Day Training Data:", values);
      message.success("Fourth day training saved successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to save training data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "24px", background: "#f5f5f5" }}>
      <Card
        title="Fourth Day Training"
        style={{ maxWidth: 1200, margin: "0 auto" }}
        bordered
      >
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

          <Form.Item style={{ textAlign: "center", marginTop: 24 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
                size="large"
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
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};