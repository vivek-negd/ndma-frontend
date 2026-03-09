import React from "react";
import {
  Table,
  Card,
  Typography,
  Button,
  Space,
  Tag,
  Avatar,
  Input,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

interface Volunteer {
  key: string;
  name: string;
  gender: string;
  dob: string;
  mobile: string;
  email: string;
  aadhaar: string;
  maritalStatus: string;
  education: string;
  district: string;
  state: string;
  status: string;
  photo: string;
}

const data: Volunteer[] = [
  {
    key: "1",
    name: "Rahul Sharma",
    gender: "Male",
    dob: "1998-02-20",
    mobile: "9876543210",
    email: "rahul@gmail.com",
    aadhaar: "XXXX-XXXX-1234",
    maritalStatus: "Unmarried",
    education: "B.Tech",
    district: "Bangalore",
    state: "Karnataka",
    status: "Active",
    photo: "https://i.pravatar.cc/40?img=1",
  },
  {
    key: "2",
    name: "Priya Singh",
    gender: "Female",
    dob: "1996-07-12",
    mobile: "9876501234",
    email: "priya@gmail.com",
    aadhaar: "XXXX-XXXX-5678",
    maritalStatus: "Married",
    education: "MBA",
    district: "Delhi",
    state: "Delhi",
    status: "Inactive",
    photo: "https://i.pravatar.cc/40?img=2",
  },
];

const UAMSVolunteers: React.FC = () => {
  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo: string) => <Avatar src={photo} />,
      width: 80,
      fixed: "left" as const,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 180,
      fixed: "left" as const,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: 120,
    },
    {
      title: "Date of Birth",
      dataIndex: "dob",
      width: 150,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 220,
    },
    {
      title: "Aadhaar",
      dataIndex: "aadhaar",
      width: 180,
    },
    {
      title: "Marital Status",
      dataIndex: "maritalStatus",
      width: 150,
    },
    {
      title: "Education",
      dataIndex: "education",
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
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) =>
        status === "Active" ? (
          <Tag color="green">Active</Tag>
        ) : (
          <Tag color="red">Inactive</Tag>
        ),
      width: 120,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right" as const,
      width: 160,
      render: () => (
        <Space>
          <Button size="small" icon={<EyeOutlined />} />
          <Button size="small" icon={<EditOutlined />} />
          <Button danger size="small" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ margin: 0 }}>
      <Space
        style={{ marginBottom: 16, width: "100%" }}
        align="center"
      >
        <Title level={4} style={{ margin: 0 }}>
          UAMS Volunteers
        </Title>

        <Space>
          <Search
            placeholder="Search volunteers"
            style={{ width: 250 }}
            allowClear
          />
          <Button icon={<DownloadOutlined />}>Export</Button>
        </Space>
      </Space>

      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1800 }}
        pagination={{ pageSize: 10 }}
        bordered
        size="small"
      />
    </Card>
  );
};

export default UAMSVolunteers;
