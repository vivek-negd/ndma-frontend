import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Descriptions,
  Avatar,
  Tag,
  Button,
  Space,
  Divider,
} from "antd";
import {
  UserOutlined,
  EditOutlined,
  ArrowLeftOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export const MasterTrainersDetail: React.FC = () => {
  const navigate = useNavigate();

  // Dummy Data (Replace with API)
  const trainer = {
    name: "Rajesh Kumar",
    gender: "Male",
    dob: "1985-06-15",
    mobile: "9876543210",
    email: "rajesh.kumar@gmail.com",
    state: "Himachal Pradesh",
    district: "Shimla",
    qualification: "M.Sc Disaster Management",
    experience: "10 Years",
    specialization: "Flood & Earthquake Rescue",
    status: "Active",
    photo: "https://i.pravatar.cc/120?img=15",
  };

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <Space style={{ marginBottom: 16 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>

        <Title level={3} style={{ margin: 0 }}>
          Master Trainer Detail
        </Title>
      </Space>

      <Row gutter={16}>
        {/* Profile Card */}
        <Col span={6}>
          <Card>
            <Space direction="vertical" align="center" style={{ width: "100%" }}>
              <Avatar size={120} src={trainer.photo} icon={<UserOutlined />} />
              <Title level={4}>{trainer.name}</Title>

              <Tag color={trainer.status === "Active" ? "green" : "red"}>
                {trainer.status}
              </Tag>

              <Button
                type="primary"
                icon={<EditOutlined />}
                block
              >
                Edit Trainer
              </Button>
            </Space>
          </Card>
        </Col>

        {/* Details Section */}
        <Col span={18}>
          <Card title="Personal Information">
            <Descriptions column={2} bordered>
              <Descriptions.Item label="Gender">
                {trainer.gender}
              </Descriptions.Item>

              <Descriptions.Item label="Date of Birth">
                {trainer.dob}
              </Descriptions.Item>

              <Descriptions.Item label="Mobile">
                {trainer.mobile}
              </Descriptions.Item>

              <Descriptions.Item label="Email">
                {trainer.email}
              </Descriptions.Item>

              <Descriptions.Item label="State">
                {trainer.state}
              </Descriptions.Item>

              <Descriptions.Item label="District">
                {trainer.district}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Divider />

          <Card title="Professional Information">
            <Descriptions column={2} bordered>
              <Descriptions.Item label="Qualification">
                {trainer.qualification}
              </Descriptions.Item>

              <Descriptions.Item label="Experience">
                {trainer.experience}
              </Descriptions.Item>

              <Descriptions.Item label="Specialization">
                {trainer.specialization}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Divider />

          <Card title="Documents">
            <Space>
              <Button icon={<FileTextOutlined />}>
                View Certificate
              </Button>
              <Button icon={<FileTextOutlined />}>
                View ID Proof
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

