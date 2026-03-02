import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  Typography,
  Space,
  Tag,
  Button,
  Select,
  DatePicker,
  Input,
  Row,
  Col,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  EyeOutlined,
  DownloadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { Search } = Input;

interface UploadedVolunteer {
  key: string;
  batchId: string;
  fileName: string;
  organization: string;
  totalRecords: number;
  successCount: number;
  failedCount: number;
  uploadedBy: string;
  uploadedAt: string;
  status: string;
}

const dummyData: UploadedVolunteer[] = [
  {
    key: "1",
    batchId: "BATCH-001",
    fileName: "uams_volunteers.xlsx",
    organization: "NCC",
    totalRecords: 200,
    successCount: 180,
    failedCount: 20,
    uploadedBy: "Admin",
    uploadedAt: "2026-02-18",
    status: "Completed",
  },
  {
    key: "2",
    batchId: "BATCH-002",
    fileName: "yams_volunteers.zip",
    organization: "NSS",
    totalRecords: 150,
    successCount: 150,
    failedCount: 0,
    uploadedBy: "State Admin",
    uploadedAt: "2026-02-17",
    status: "Processing",
  },
];

const UploadedVolunteerList: React.FC = () => {
  const [data, setData] = useState<UploadedVolunteer[]>([]);

  useEffect(() => {
    // Replace with API call
    setData(dummyData);
  }, []);

  const navigate = useNavigate();

  const columns = [
    {
      title: "Batch ID",
      dataIndex: "batchId",
      width: 150,
      render: (batchId: string) => (
        <Button type="link" onClick={() => navigate(`/batchwise-volunteers-list/${batchId}`)}>
          {batchId}
        </Button>
      ),
    },
    {
      title: "File Name",
      dataIndex: "fileName",
      width: 200,
    },
    {
      title: "Organization",
      dataIndex: "organization",
      width: 150,
    },
    {
      title: "Total Records",
      dataIndex: "totalRecords",
      width: 130,
    },
    {
      title: "Success",
      dataIndex: "successCount",
      render: (value: number) => <Tag color="green">{value}</Tag>,
      width: 100,
    },
    {
      title: "Failed",
      dataIndex: "failedCount",
      render: (value: number) => <Tag color="red">{value}</Tag>,
      width: 100,
    },
    {
      title: "Uploaded By",
      dataIndex: "uploadedBy",
      width: 150,
    },
    {
      title: "Upload Date",
      dataIndex: "uploadedAt",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        if (status === "Completed")
          return <Tag color="green">Completed</Tag>;
        if (status === "Processing")
          return <Tag color="blue">Processing</Tag>;
        return <Tag color="red">Failed</Tag>;
      },
      width: 130,
    },
    {
      title: "Action",
      fixed: "right" as const,
      width: 150,
      render: () => (
        <Space>
          <Button size="small" icon={<EyeOutlined />} />
          <Button size="small" icon={<DownloadOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ margin: 24 }}>
      <Title level={4}>Uploaded Volunteer Batches</Title>

      {/* Filters */}
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col>
          <Select
            placeholder="Filter by Organization"
            style={{ width: 200 }}
            allowClear
            options={[
              { label: "NCC", value: "NCC" },
              { label: "NSS", value: "NSS" },
              { label: "NYKS", value: "NYKS" },
            ]}
          />
        </Col>

        <Col>
          <RangePicker />
        </Col>

        <Col>
          <Search
            placeholder="Search by Batch ID"
            allowClear
            style={{ width: 250 }}
          />
        </Col>

        <Col>
          <Button icon={<ReloadOutlined />}>Refresh</Button>
        </Col>
      </Row>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1200 }}
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

export default UploadedVolunteerList;
