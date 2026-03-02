import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  Typography,
  Space,
  Tag,
  Avatar,
  Button,
  Row,
  Col,
  Statistic,
  Input,
} from "antd";
import {
  DownloadOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Search } = Input;

interface Volunteer {
  key: string;
  name: string;
  email: string;
  mobile: string;
  district: string;
  state: string;
  photo: string;
  status: string;
}

const dummyData: Volunteer[] = [
  {
    key: "1",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    district: "Kullu",
    state: "Himachal Pradesh",
    photo: "https://i.pravatar.cc/40?img=11",
    status: "Success",
  },
  {
    key: "2",
    name: "Priya Singh",
    email: "priya@gmail.com",
    mobile: "9876501234",
    district: "Shimla",
    state: "Himachal Pradesh",
    photo: "https://i.pravatar.cc/40?img=12",
    status: "Failed",
  },
];

const BatchWiseVolunteerList: React.FC = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<Volunteer[]>([]);

  useEffect(() => {
    // Replace with API call
    setData(dummyData);
  }, [batchId]);

  const successCount = data.filter(v => v.status === "Success").length;
  const failedCount = data.filter(v => v.status === "Failed").length;

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo: string) => <Avatar src={photo} />,
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 180,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 220,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      width: 150,
    },
    {
      title: "District",
      dataIndex: "district",
      width: 150,
    },
    {
      title: "State",
      dataIndex: "state",
      width: 180,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Success" ? (
          <Tag color="green">Success</Tag>
        ) : (
          <Tag color="red">Failed</Tag>
        ),
      width: 120,
    },
  ];

  return (
    <Card style={{ margin: 24 }}>
      {/* Header */}
      <Space style={{ marginBottom: 16 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>

        <Title level={4} style={{ margin: 0 }}>
          Batch: {batchId}
        </Title>
      </Space>

      {/* Batch Summary */}
      <Row gutter={16} style={{ marginBottom: 20 }}>
        <Col span={6}>
          <Statistic title="Total Records" value={data.length} />
        </Col>
        <Col span={6}>
          <Statistic title="Success" value={successCount} />
        </Col>
        <Col span={6}>
          <Statistic title="Failed" value={failedCount} />
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
          >
            Download Failed Records
          </Button>
        </Col>
      </Row>

      {/* Search */}
      <Search
        placeholder="Search volunteer"
        allowClear
        style={{ width: 300, marginBottom: 16 }}
      />

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1000 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
        }}
        bordered
        size="small"
      />
    </Card>
  );
};

export default BatchWiseVolunteerList;
