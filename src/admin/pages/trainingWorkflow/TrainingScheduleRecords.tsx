import React, { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Select,
  Table,
  Image,
  Badge,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

/* ── Dummy data ── */
interface Record {
  key: string;
  state: string;
  district: string;
  organization: string;
  volunteers: number;
  date: string;
  media: string[];
}

const ALL_RECORDS: Record[] = [
  { key: "1",  state: "Jharkhand",       district: "Ranchi",      organization: "NSS (National Service Scheme)",   volunteers: 90,  date: "09 Jun 2025", media: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { key: "2",  state: "Assam",           district: "Guwahati",    organization: "Bharat Scouts & Guides",          volunteers: 60,  date: "02 Jun 2025", media: [] },
  { key: "3",  state: "Madhya Pradesh",  district: "Bhopal",      organization: "NCC (National Cadet Corps)",      volunteers: 120, date: "28 May 2025", media: ["https://via.placeholder.com/40"] },
  { key: "4",  state: "Rajasthan",       district: "Jaipur",      organization: "NYKS (Nehru Yuva Kendra)",        volunteers: 95,  date: "22 May 2025", media: [] },
  { key: "5",  state: "Odisha",          district: "Bhubaneswar", organization: "NSS (National Service Scheme)",   volunteers: 110, date: "18 May 2025", media: ["https://via.placeholder.com/40", "https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { key: "6",  state: "Bihar",           district: "Patna",       organization: "NCC (National Cadet Corps)",      volunteers: 80,  date: "14 May 2025", media: [] },
  { key: "7",  state: "West Bengal",     district: "Kolkata",     organization: "Bharat Scouts & Guides",          volunteers: 150, date: "10 May 2025", media: ["https://via.placeholder.com/40"] },
  { key: "8",  state: "Uttar Pradesh",   district: "Lucknow",     organization: "NYKS (Nehru Yuva Kendra)",        volunteers: 200, date: "05 May 2025", media: [] },
  { key: "9",  state: "Gujarat",         district: "Ahmedabad",   organization: "NSS (National Service Scheme)",   volunteers: 75,  date: "30 Apr 2025", media: ["https://via.placeholder.com/40", "https://via.placeholder.com/40"] },
  { key: "10", state: "Karnataka",       district: "Bengaluru",   organization: "NCC (National Cadet Corps)",      volunteers: 130, date: "25 Apr 2025", media: [] },
  { key: "11", state: "Tamil Nadu",      district: "Chennai",     organization: "Bharat Scouts & Guides",          volunteers: 100, date: "20 Apr 2025", media: ["https://via.placeholder.com/40"] },
  { key: "12", state: "Kerala",          district: "Thiruvananthapuram", organization: "NYKS (Nehru Yuva Kendra)", volunteers: 150, date: "15 Apr 2025", media: [] },
];

/* ── Stat Card ── */
const StatCard: React.FC<{ label: string; value: string | number; color: string }> = ({ label, value, color }) => (
  <div style={{ flex: 1, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 24px" }}>
    <Text style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", letterSpacing: "0.7px", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
      {label}
    </Text>
    <Text style={{ fontSize: 36, fontWeight: 700, color, lineHeight: 1 }}>
      {typeof value === "number" ? value.toLocaleString() : value}
    </Text>
  </div>
);

/* ── Main component ── */
export const TrainingScheduleRecords: React.FC = () => {
   const navigate = useNavigate();
  const [search, setSearch]   = useState("");
  const [state, setState]     = useState<string | undefined>(undefined);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate]   = useState("");

  /* Derived stats */
  const totalRecords   = ALL_RECORDS.length;
  const statesCovered  = new Set(ALL_RECORDS.map((r) => r.state)).size;
  const totalVolunteers = ALL_RECORDS.reduce((s, r) => s + r.volunteers, 0);
  const totalMedia     = ALL_RECORDS.reduce((s, r) => s + r.media.length, 0);

  /* State options */
  const stateOptions = [...new Set(ALL_RECORDS.map((r) => r.state))].map((s) => ({ label: s, value: s }));

  /* Filtered rows */
  const filtered = ALL_RECORDS.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch = !q || r.state.toLowerCase().includes(q) || r.district.toLowerCase().includes(q) || r.organization.toLowerCase().includes(q);
    const matchState  = !state || r.state === state;
    return matchSearch && matchState;
  });

  /* Table columns */
  const columns = [
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280" }}>#</span>,
      key: "index",
      width: 50,
      render: (_: any, __: any, i: number) => <Text style={{ color: "#6b7280", fontSize: 13 }}>{i + 1}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>STATE</span>,
      dataIndex: "state",
      key: "state",
      width: 160,
      render: (v: string) => <Text style={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>DISTRICT</span>,
      dataIndex: "district",
      key: "district",
      width: 140,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>ORGANIZATION</span>,
      dataIndex: "organization",
      key: "organization",
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>NO. OF VOLUNTEERS</span>,
      dataIndex: "volunteers",
      key: "volunteers",
      width: 120,
      render: (v: number) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>BATCH NO.</span>,
      dataIndex: "batchNo",
      key: "batchNo",
      width: 120,
      render: (v: number) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>VENUE</span>,
      dataIndex: "venue",
      key: "venue",
      width: 120,
      render: (v: string) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>TRAINERS DETAILS</span>,
      dataIndex: "trainers details",
      key: "trainers details",
      width: 120,
      render: (v: string) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>START DATE</span>,
      dataIndex: "startDate",
      key: "startDate",
      width: 130,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}> END DATE</span>,
      dataIndex: "endDate",
      key: "endDate",
      width: 130,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}> STATUS</span>,
      dataIndex: "status",
      key: "status",
      width: 130,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
  ];

  return (
    <div style={{ width: "100%", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Training Workflow /&nbsp;
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Training Schedule</span>
          </Text>
          <Title level={2} style={{ margin: "0 0 4px", fontWeight: 700, color: "#111827" }}>
            Training Schedule
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Manage and track all Aapda Mitra training batches across states.
          </Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ borderRadius: 8, fontWeight: 600, height: 40, paddingInline: 20, background: "#1d4ed8", border: "none" }}
        onClick={() => navigate("/training-schedule-form")}
        >
          Add New Schedule
        </Button>
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        <StatCard label="Total Schedules"        value={totalRecords}    color="#2563eb" />
        <StatCard label="Upcoming"       value={statesCovered}   color="#16a34a" />
        <StatCard label="Ongoing"     value={totalVolunteers} color="#d97706" />
        <StatCard label="Completed" value={totalMedia}      color="#7c3aed" />
      </div>

      {/* ── Filter + table card ── */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden" }}>

        {/* Filter bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", borderBottom: "1px solid #f0f0f0", flexWrap: "wrap" }}>
          <Input
            placeholder="Search state, district, org..."
            prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 280, borderRadius: 8 }}
            allowClear
          />
          <Select
            placeholder="All States"
            options={stateOptions}
            value={state}
            onChange={setState}
            allowClear
            style={{ width: 160 }}
          />
          <Text style={{ marginLeft: "auto", color: "#6b7280", fontSize: 13, whiteSpace: "nowrap" }}>
            {filtered.length} results
          </Text>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={filtered}
          rowKey="key"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          style={{ borderRadius: 0 }}
        />
      </div>
    </div>
  );
};

