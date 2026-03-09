import React from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Typography,
  Button,
  List,
  Tag,
  Space,
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  UserOutlined,
  AlertOutlined,
} from "@ant-design/icons";
import { Column, Pie } from "@ant-design/charts";

const { Title } = Typography;

export const Dashboard1: React.FC = () => {
  /* ---------------- KPI DATA ---------------- */

  const kpis = [
    {
      title: "Total Volunteers",
      value: 19303,
      change: "12%",
      positive: true,
    },
    {
      title: "Active Deployments",
      value: 318,
      change: "12.5%",
      positive: false,
    },
    {
      title: "Training Completion",
      value: "4.2 days",
      change: "8%",
      positive: true,
    },
    {
      title: "Fund Utilization",
      value: "₹1.15Cr",
      change: "1.2%",
      positive: true,
    },
    {
      title: "Pending Approval",
      value: 97,
      change: "1.2%",
      positive: false,
    },
  ];

  /* ---------------- CHART DATA ---------------- */

  const trainingData = [
    { type: "Flood", value: 6500 },
    { type: "Earthquake", value: 4200 },
    { type: "Cyclone", value: 3800 },
    { type: "Landslide", value: 1347 },
  ];

  const bloodData = [
    { type: "O+", value: 92 },
    { type: "B+", value: 88 },
    { type: "A+", value: 85 },
    { type: "AB+", value: 82 },
  ];

  const columnConfig = {
    data: trainingData,
    xField: "type",
    yField: "value",
    columnWidthRatio: 0.6,
  };

  const pieConfig = {
    data: bloodData,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
  };

  /* ---------------- UI ---------------- */

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>AAPDA MITRA SCHEME</Title>

      {/* KPI Cards */}
      <Row gutter={16}>
        {kpis.map((item, index) => (
          <Col span={4} key={index}>
            <Card>
              <Statistic
                title={item.title}
                value={item.value}
              />
              <Space>
                {item.positive ? (
                  <ArrowUpOutlined style={{ color: "green" }} />
                ) : (
                  <ArrowDownOutlined style={{ color: "red" }} />
                )}
                <span
                  style={{
                    color: item.positive ? "green" : "red",
                  }}
                >
                  {item.change}
                </span>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Quick Actions */}
      <Card style={{ marginTop: 20 }}>
        <Title level={5}>Quick Actions</Title>
        <Space>
          <Button type="primary">Add Volunteer</Button>
          <Button>Update Training</Button>
          <Button>Generate Report</Button>
        </Space>
      </Card>

      {/* Charts Section */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card title="Training Progress">
            <Column {...columnConfig} />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Volunteer Blood Group">
            <Pie {...pieConfig} />
          </Card>
        </Col>
      </Row>

      {/* Live Alerts */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card title="Live Alerts">
            <List
              dataSource={[
                "Flood Alert - Kerala (50 volunteers deployed)",
                "Training Due - Mumbai (125 volunteers)",
                "Training Completed - Delhi (89 certified)",
              ]}
              renderItem={(item) => (
                <List.Item>
                  <AlertOutlined style={{ marginRight: 8 }} />
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Achievements">
            <Statistic
              title="Total Lives Rescued"
              value={78019}
              prefix={<UserOutlined />}
            />
            <Statistic
              title="Volunteers Involved"
              value={2953}
              style={{ marginTop: 16 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
