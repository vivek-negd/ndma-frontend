import React, { useState, useEffect } from "react";
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
import { VolunteerService } from "../../../services";

const { Title, Text } = Typography;

/* Record shape used by the table */
interface Record {
  key: string;
  state: string;
  district: string;
  organization: string;
  volunteers: number;
  date: string;
  media: string[];
}

/* Component state will hold records fetched from API */
const EMPTY_RECORDS: Record[] = [];

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
export const YouthOrganisationRecords: React.FC = () => {
   const navigate = useNavigate();
  const [search, setSearch]   = useState("");
  const [state, setState]     = useState<string | undefined>(undefined);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate]   = useState("");
  const [records, setRecords] = useState<Record[]>(EMPTY_RECORDS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoverage = async () => {
      try {
        setLoading(true);
        const res = await VolunteerService.getCoverage();
        const payload = (res && (res as any).data) || res;
        const items = Array.isArray(payload) ? payload : (payload?.records || payload?.data || []);

        const mapped: Record[] = (items || []).map((item: any, idx: number) => ({
          key: item.id ? String(item.id) : String(idx + 1),
          state: item.state || item.state_name || item.state_name || item.state || '—',
          district: item.district || item.district_name || item.district || '—',
          organization: item.organization || item.organization_name || item.org_name || item.organization_type || '—',
          volunteers: item.volunteers || item.volunteers_count || item.count || 0,
          date: item.date || item.created_at || item.event_date || '',
          media: item.media || item.media_urls || item.images || [],
        }));

        setRecords(mapped);
      } catch (err) {
        console.error('Failed to fetch youth org coverage:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoverage();
  }, []);

  /* Derived stats */
  const totalRecords = records.length;
  const statesCovered = new Set(records.map((r) => r.state)).size;
  const totalVolunteers = records.reduce((s, r) => s + (r.volunteers || 0), 0);
  const totalMedia = records.reduce((s, r) => s + (r.media?.length || 0), 0);

  /* State options */
  const stateOptions = [...new Set(records.map((r) => r.state))].map((s) => ({ label: s, value: s }));

  /* Filtered rows */
  const filtered = records.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch = !q || (r.state || '').toLowerCase().includes(q) || (r.district || '').toLowerCase().includes(q) || (r.organization || '').toLowerCase().includes(q);
    const matchState = !state || r.state === state;
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
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>NO. OF VOL.</span>,
      dataIndex: "volunteers",
      key: "volunteers",
      width: 120,
      render: (v: number) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>DATE</span>,
      dataIndex: "date",
      key: "date",
      width: 130,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>MEDIA</span>,
      dataIndex: "media",
      key: "media",
      width: 100,
      render: (media: string[]) => {
        if (!media || media.length === 0) return <Text style={{ color: "#9ca3af" }}>—</Text>;
        return (
          <Badge count={media.length} size="small" style={{ backgroundColor: "#3b82f6" }}>
            <div
              style={{
                width: 40, height: 32, borderRadius: 4, overflow: "hidden",
                border: "1px solid #e5e7eb", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#f3f4f6",
              }}
            >
              <PictureOutlined style={{ color: "#6b7280", fontSize: 16 }} />
            </div>
          </Badge>
        );
      },
    },
  ];

  return (
    <div style={{ width: "100%", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Youth Org Workflow
          </Text>
          <Title level={2} style={{ margin: "0 0 4px", fontWeight: 700, color: "#111827" }}>
            Youth Organisation Records
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Track and manage NSS, NCC, NYKS and other youth organisation activities.
          </Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ borderRadius: 8, fontWeight: 600, height: 40, paddingInline: 20, background: "#1d4ed8", border: "none" }}
        onClick={() => navigate("/youth-organization-form")}
        >
          Add Record
        </Button>
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
        <StatCard label="Total Records"        value={totalRecords}    color="#2563eb" />
        <StatCard label="States Covered"       value={statesCovered}   color="#16a34a" />
        <StatCard label="Total Volunteers"     value={totalVolunteers} color="#d97706" />
        <StatCard label="Total Media Uploaded" value={totalMedia}      color="#7c3aed" />
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
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Text style={{ color: "#6b7280", fontSize: 13 }}>From</Text>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "4px 8px", fontSize: 13, color: "#374151", outline: "none" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Text style={{ color: "#6b7280", fontSize: 13 }}>To</Text>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "4px 8px", fontSize: 13, color: "#374151", outline: "none" }}
            />
          </div>
          <Text style={{ marginLeft: "auto", color: "#6b7280", fontSize: 13, whiteSpace: "nowrap" }}>
            {filtered.length} results
          </Text>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={filtered}
          loading={loading}
          rowKey="key"
          pagination={{ pageSize: 10, showSizeChanger: true }}
          style={{ borderRadius: 0 }}
        />
      </div>
    </div>
  );
};

