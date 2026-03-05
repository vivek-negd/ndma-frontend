import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Typography,
  Button,
  Select,
  Input,
  Tag,
  Avatar,
  Row,
  Col,
} from "antd";
import {
  UploadOutlined,
  DownloadOutlined,
  UserAddOutlined,
  SearchOutlined,
  PhoneOutlined,
  FilterOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

/* ── Dummy data ── */
interface Volunteer {
  key: string;
  name: string;
  myBharatId: string;
  mobile: string;
  district: string;
  areaType: "Urban" | "Rural";
  organisation: string;
  primarySkill: string;
  education: string;
}

const ALL_VOLUNTEERS: Volunteer[] = [
  { key: "1",  name: "Amit Kumar Sharma",   myBharatId: "MYB-24-00001", mobile: "9876543201", district: "Mumbai City",  areaType: "Urban", organisation: "NSS",  primarySkill: "First Aid",     education: "Graduate"      },
  { key: "2",  name: "Priya Suresh Nair",   myBharatId: "MYB-24-00002", mobile: "9876543202", district: "Mumbai City",  areaType: "Urban", organisation: "NCC",  primarySkill: "Swimming",      education: "Post Graduate" },
  { key: "3",  name: "Rahul Singh Yadav",   myBharatId: "MYB-24-00003", mobile: "9876543203", district: "Pune",         areaType: "Rural", organisation: "NYKS", primarySkill: "Fire Safety",   education: "Graduate"      },
  { key: "4",  name: "Sunita Devi Kumari",  myBharatId: "MYB-24-00004", mobile: "9876543204", district: "Nagpur",       areaType: "Rural", organisation: "NSS",  primarySkill: "First Aid",     education: "Undergraduate" },
  { key: "5",  name: "Kiran Babu Reddy",    myBharatId: "MYB-24-00005", mobile: "9876543205", district: "Thane",        areaType: "Urban", organisation: "NCC",  primarySkill: "Rescue Ops",    education: "Graduate"      },
  { key: "6",  name: "Meena Lakshmi Das",   myBharatId: "MYB-24-00006", mobile: "9876543206", district: "Nashik",       areaType: "Rural", organisation: "NYKS", primarySkill: "First Aid",     education: "Post Graduate" },
  { key: "7",  name: "Deepak Mohan Joshi",  myBharatId: "MYB-24-00007", mobile: "9876543207", district: "Aurangabad",   areaType: "Urban", organisation: "NSS",  primarySkill: "Swimming",      education: "Graduate"      },
  { key: "8",  name: "Anjali Priya Pandey", myBharatId: "MYB-24-00008", mobile: "9876543208", district: "Solapur",      areaType: "Rural", organisation: "NCC",  primarySkill: "Fire Safety",   education: "Undergraduate" },
  { key: "9",  name: "Vivek Rajan Pillai",  myBharatId: "MYB-24-00009", mobile: "9876543209", district: "Kolhapur",     areaType: "Urban", organisation: "NYKS", primarySkill: "Rescue Ops",    education: "Post Graduate" },
  { key: "10", name: "Kavya Nair Menon",    myBharatId: "MYB-24-00010", mobile: "9876543210", district: "Mumbai City",  areaType: "Urban", organisation: "NSS",  primarySkill: "First Aid",     education: "Graduate"      },
];

/* ── Avatar helpers ── */
const AVATAR_COLORS = [
  "#f59e0b", "#8b5cf6", "#10b981", "#3b82f6",
  "#ef4444", "#ec4899", "#06b6d4", "#84cc16",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const getAvatarColor = (name: string) =>
  AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

/* ── Stats card ── */
const StatCard: React.FC<{
  label: string;
  value: string | number;
  color: string;
}> = ({ label, value, color }) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #e8ecf0",
      borderRadius: 12,
      padding: "20px 24px",
      flex: 1,
    }}
  >
    <Text
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: "#9ca3af",
        letterSpacing: "0.7px",
        textTransform: "uppercase",
        display: "block",
        marginBottom: 10,
      }}
    >
      {label}
    </Text>
    <Text style={{ fontSize: 36, fontWeight: 700, color, lineHeight: 1 }}>
      {value}
    </Text>
  </div>
);

/* ── Main component ── */
const UploadedVolunteerList: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch]     = useState("");
  const [district, setDistrict] = useState<string | undefined>(undefined);
  const [areaType, setAreaType] = useState<string | undefined>(undefined);

  /* Derived stats */
  const total  = ALL_VOLUNTEERS.length;
  const urban  = ALL_VOLUNTEERS.filter((v) => v.areaType === "Urban").length;
  const rural  = ALL_VOLUNTEERS.filter((v) => v.areaType === "Rural").length;
  const docRate = Math.round((total / 73) * 100); // mock denominator

  /* Filtered rows */
  const filtered = ALL_VOLUNTEERS.filter((v) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.myBharatId.toLowerCase().includes(q) ||
      v.mobile.includes(q);
    const matchDistrict = !district || v.district === district;
    const matchArea     = !areaType || v.areaType === areaType;
    return matchSearch && matchDistrict && matchArea;
  });

  /* District options */
  const districtOptions = [
    ...new Set(ALL_VOLUNTEERS.map((v) => v.district)),
  ].map((d) => ({ label: d, value: d }));

  /* Table columns */
  const columns = [
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>PHOTO</span>,
      key: "photo",
      width: 70,
      render: (_: any, record: Volunteer) => (
        <Avatar
          size={42}
          style={{
            backgroundColor: getAvatarColor(record.name),
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {getInitials(record.name)}
        </Avatar>
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>NAME</span>,
      dataIndex: "name",
      key: "name",
      width: 160,
      render: (name: string) => (
        <Text style={{ color: "#1d4ed8", fontWeight: 500, cursor: "pointer", fontSize: 13 }}>
          {name.split(" ").slice(0, 2).join(" ")}
          <br />
          {name.split(" ").slice(2).join(" ")}
        </Text>
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>MY BHARAT ID</span>,
      dataIndex: "myBharatId",
      key: "myBharatId",
      width: 140,
      render: (id: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{id}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>MOBILE</span>,
      dataIndex: "mobile",
      key: "mobile",
      width: 140,
      render: (mobile: string) => (
        <Text style={{ fontSize: 13, color: "#374151" }}>
          <PhoneOutlined style={{ marginRight: 6, color: "#9ca3af" }} />
          {mobile}
        </Text>
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>DISTRICT</span>,
      dataIndex: "district",
      key: "district",
      width: 130,
      render: (d: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{d}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>AREA TYPE</span>,
      dataIndex: "areaType",
      key: "areaType",
      width: 110,
      render: (type: string) => (
        <Tag
          style={{
            background: "#eff6ff",
            color: "#3b82f6",
            border: "none",
            borderRadius: 20,
            fontWeight: 500,
            fontSize: 12,
          }}
        >
          {type}
        </Tag>
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>ORGANISATION</span>,
      dataIndex: "organisation",
      key: "organisation",
      width: 130,
      render: (o: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{o}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>PRIMARY SKILL</span>,
      dataIndex: "primarySkill",
      key: "primarySkill",
      width: 130,
      render: (s: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{s}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>EDUCATION</span>,
      dataIndex: "education",
      key: "education",
      width: 130,
      render: (e: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{e}</Text>,
    },
  ];

  return (
    <div style={{ width: "100%", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ── Page header ── */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
            Volunteer Details
          </Title>
          <Text style={{ color: "#6b7280", fontSize: 13 }}>
            Manage, monitor, and update volunteer records at the state level.
          </Text>
        </Col>
        <Col>
          <div style={{ display: "flex", gap: 10 }}>
            <Button
              type="primary"
              icon={<UploadOutlined />}
              style={{ borderRadius: 8, fontWeight: 600 }}
              onClick={() => navigate("/bulk-volunteer-upload")}
            >
              Bulk Upload
            </Button>
            <Button
              icon={<DownloadOutlined />}
              style={{ borderRadius: 8, fontWeight: 600 }}
            >
              Export Data
            </Button>
            <Button
              icon={<UserAddOutlined style={{ color: "#1d4ed8" }} />}
              style={{ borderRadius: 8, fontWeight: 600, color: "#1d4ed8", borderColor: "#1d4ed8" }}
            >
              Add Volunteer
            </Button>
          </div>
        </Col>
      </Row>

      {/* ── Stat cards ── */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <StatCard label="Total Volunteers"    value={total}        color="#2563eb" />
        <StatCard label="Urban Volunteers"    value={urban}        color="#7c3aed" />
        <StatCard label="Rural Volunteers"    value={rural}        color="#16a34a" />
        <StatCard label="Documentation Rate"  value={`${docRate}%`} color="#d97706" />
      </div>

      {/* ── Filter + table card ── */}
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          border: "1px solid #e8ecf0",
          overflow: "hidden",
        }}
      >
        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 20px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Input
            placeholder="Search by name, MY Bharat ID, mobile..."
            prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 320, borderRadius: 8 }}
            allowClear
          />
          <Select
            placeholder="All Districts"
            options={districtOptions}
            value={district}
            onChange={setDistrict}
            allowClear
            style={{ width: 160, borderRadius: 8 }}
          />
          <Select
            placeholder="All Area Types"
            options={[
              { label: "Urban", value: "Urban" },
              { label: "Rural", value: "Rural" },
            ]}
            value={areaType}
            onChange={setAreaType}
            allowClear
            style={{ width: 160, borderRadius: 8 }}
          />
          <Button icon={<FilterOutlined />} style={{ borderRadius: 8 }}>
            More Filters
          </Button>
          <Text style={{ marginLeft: "auto", color: "#6b7280", fontSize: 13, whiteSpace: "nowrap" }}>
            {filtered.length} records
          </Text>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={filtered}
          rowKey="key"
          scroll={{ x: 1100 }}
          pagination={{ pageSize: 10, showSizeChanger: true }}
          style={{ borderRadius: 0 }}
          rowClassName={() => "volunteer-row"}
        />
      </div>
    </div>
  );
};

export default UploadedVolunteerList;
