import React, { useState } from "react";
import {
  Table,
  Card,
  Typography,
  Button,
  Space,
  Input,
  Avatar,
  Tag,
  Dropdown,
  MenuProps,
} from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

interface Volunteer {
  key: string;
  salutation: string;
  name: string;
  gender: string;
  bloodGroup: string;
  dob: string;
  mobile: string;
  email: string;
  education: string;
  skill: string;
  state: string;
  district: string;
  areaType: string;
  photo: string;
  status: string;
}

const data: Volunteer[] = [
  {
    key: "1",
    salutation: "Mr.",
    name: "Ajay Kumar",
    gender: "Male",
    bloodGroup: "B+",
    dob: "2001-04-12",
    mobile: "9876543210",
    email: "ajay@gmail.com",
    education: "Graduate",
    skill: "CPR",
    state: "Himachal Pradesh",
    district: "Kullu",
    areaType: "Rural",
    photo: "https://i.pravatar.cc/40?img=3",
    status: "Active",
  },
];

const YAMSVolunteers: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys);
    },
  };

  const bulkMenu: MenuProps["items"] = [
    { key: "delete", label: "Delete Selected" },
    { key: "export", label: "Export Selected" },
  ];

  const columns = [
    { title: "Salutation", dataIndex: "salutation", width: 100 },
    { title: "Name", dataIndex: "name", width: 180, fixed: "left" as const },
    { title: "Gender", dataIndex: "gender", width: 100 },
    { title: "Blood Group", dataIndex: "bloodGroup", width: 120 },
    { title: "Date of Birth", dataIndex: "dob", width: 140 },
    { title: "Mobile", dataIndex: "mobile", width: 140 },
    { title: "Email", dataIndex: "email", width: 220 },
    { title: "Education", dataIndex: "education", width: 150 },
    { title: "Skill", dataIndex: "skill", width: 150 },
    { title: "State", dataIndex: "state", width: 180 },
    { title: "District", dataIndex: "district", width: 150 },
    { title: "Area Type", dataIndex: "areaType", width: 120 },
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo: string) => <Avatar src={photo} />,
      width: 80,
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
      fixed: "right" as const,
      width: 150,
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
      {/* Top Header */}
      <Space
        style={{ marginBottom: 16, width: "100%" }}
        align="center"
      >
        <Title level={4} style={{ margin: 0, flex: 1 }}>
          YAMS Volunteers
        </Title>

        <Button type="default">Show Data</Button>

        <Button type="primary" icon={<PlusOutlined />}>
          Add Data
        </Button>

        <Button icon={<DownloadOutlined />}>Export Data</Button>
      </Space>

      {/* Bulk Actions + Search */}
      <Space style={{ marginBottom: 16 }}>
        <Dropdown menu={{ items: bulkMenu }}>
          <Button>
            Bulk Actions <DownOutlined />
          </Button>
        </Dropdown>

        <Search
          placeholder="Search volunteers"
          allowClear
          style={{ width: 250 }}
        />
      </Space>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        scroll={{ x: 2000 }}
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

export default YAMSVolunteers;
