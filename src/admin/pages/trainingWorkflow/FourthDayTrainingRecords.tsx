import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Input,
  Select,
  Table,
  Image,
  Badge,
  Spin,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CommonService } from "../../../services";

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
export const FourthDayTrainingRecords: React.FC = () => {
   const navigate = useNavigate();
  const [search, setSearch]   = useState("");
  const [state, setState]     = useState<string | undefined>(undefined);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate]   = useState("");
  const [states, setStates] = useState<any[]>([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [records, setRecords] = useState<Record[]>([]);
  const [loadingRecords, setLoadingRecords] = useState(false);

  useEffect(() => {
    fetchStates();
    fetchRecords();
  }, []);

  // Helper: Extract day number from session, trying multiple approaches
  const getSessionDay = (session: any, sessionIndex: number): number | null => {
    if (!session) return null;
    
    // Primary: Try numeric day field
    if (typeof session.day === 'number') return session.day;
    if (typeof session.day === 'string' && /^\d+$/.test(session.day)) return parseInt(session.day);
    
    // Secondary: Extract from day_label
    if (typeof session.day_label === 'string') {
      const match = session.day_label.match(/Day\s*(\d+)/i);
      if (match) return parseInt(match[1]);
    }
    
    // Fallback: Use index-based mapping (1st session = Day 1, 2nd = Day 4, 3rd = Day 7)
    if (sessionIndex === 0) return 1;
    if (sessionIndex === 1) return 4;
    if (sessionIndex === 2) return 7;
    
    return null;
  };

  const fetchRecords = async () => {
    try {
      setLoadingRecords(true);
      const res = await CommonService.getTrainingSchedules(4);
      console.log('📥 API Response for Day 4:', res);
      
      let list: any[] = [];
      if (res && Array.isArray((res as any).results)) list = (res as any).results;
      else if (res && Array.isArray((res as any).data)) list = (res as any).data;
      else if (Array.isArray(res)) list = res as any;

      console.log('📋 Parsed list:', list);
      const rows: Record[] = [];
      
      list.forEach((sch: any) => {
        const sessions = sch.sessions || [];
        console.log(`\n🔄 Schedule ${sch.id}: Total sessions = ${sessions.length}`);
        
        // If backend returned only 1 session, use it (backend already filtered by day)
        let session = null;
        if (sessions.length === 1) {
          session = sessions[0];
          console.log(`   ✅ Single session (backend filtered): ID=${session.id}, day=${session.day || session.day_label}`);
        } else if (sessions.length > 1) {
          // Multiple sessions: filter strictly by day 4
          sessions.forEach((s: any, idx: number) => {
            const day = getSessionDay(s, idx);
            console.log(`   Session[${idx}] ID=${s.id}: day=${day}, day_label="${s.day_label}", date="${s.date || s.day_date}"`);
          });
          session = sessions.find((s: any, idx: number) => getSessionDay(s, idx) === 4);
          if (session) {
            console.log(`   ✅ Filtered to Day 4 session: ID=${session.id}`);
          } else {
            console.log(`   ❌ No Day 4 session found`);
          }
        }
        
        if (!session) return;
        
        rows.push({
          key: `${sch.id}-${session.id}`,
          state: sch.state_name || sch.state || String(sch.state),
          district: sch.district_name || sch.district || String(sch.district),
          organization: sch.organization_name || sch.organization || '',
          volunteers: sch.number_of_volunteers || sch.numberOfVol || 0,
          date: session.date || session.day_date || '',
          media: Array.isArray(session.media) ? session.media : [],
          batchNo: sch.batch_no || sch.batchNo || '',
          instituteDetails: sch.institute_details || sch.venue || '',
          trainer: sch.trainers_details || sch.trainers || '',
          status: sch.status || ''
        });
      });
      
      console.log(`\n✅ Final Day 4 Records: ${rows.length} found\n`);
      setRecords(rows);
    } catch (err) {
      console.error('❌ Failed to load training records', err);
    } finally {
      setLoadingRecords(false);
    }
  };

  const fetchStates = async () => {
    try {
      setStatesLoading(true);
      const res = await CommonService.getStates();
      // Handle direct array response
      if (Array.isArray(res)) {
        setStates(res as any);
      }
      // Handle wrapped response { data: [...] }
      else if (res.data && Array.isArray(res.data)) {
        setStates(res.data as any);
      }
      // Handle paginated response { data: { data: [...] } }
      else if (res.data && typeof res.data === 'object' && 'data' in res.data) {
        setStates((res.data as any).data as any);
      } else {
        setStates([]);
      }
    } catch (error) {
      console.error("State fetch error:", error);
    } finally {
      setStatesLoading(false);
    }
  };

  /* Derived stats */
  const totalRecords   = records.length || ALL_RECORDS.length;
  const statesCovered  = new Set((records.length ? records : ALL_RECORDS).map((r) => r.state)).size;
  const totalVolunteers = (records.length ? records : ALL_RECORDS).reduce((s, r) => s + (r.volunteers || 0), 0);
  const totalMedia     = (records.length ? records : ALL_RECORDS).reduce((s, r) => s + ((r.media && r.media.length) || 0), 0);

  /* State options - from API */
  const stateOptions = states.map((s: any) => ({ label: s.name, value: s.id }));

  /* Filtered rows */
  const dataSource = records.length ? records : ALL_RECORDS;
  const filtered = dataSource.filter((r) => {
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
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>NO. OF VOL.</span>,
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
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>INSTITUTE DETAILS</span>,
      dataIndex: "instituteDetails",
      key: "instituteDetails",
      width: 120,
      render: (v: number) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>TRAINER</span>,
      dataIndex: "trainer",
      key: "trainer",
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
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>STATUS</span>,
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
            <span style={{ color: "#2563eb", fontWeight: 500 }}>4th Day Training</span>
          </Text>
          <Title level={2} style={{ margin: "0 0 4px", fontWeight: 700, color: "#111827" }}>
            4th Day of Training 
          </Title> 
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Record and track fourth-day training activities with media documentation.
          </Text>
        </div>
        <Button 
          type="primary"
          icon={<PlusOutlined />}
          style={{ borderRadius: 8, fontWeight: 600, height: 40, paddingInline: 20, background: "#1d4ed8", border: "none" }}
        onClick={() => navigate("/fourth-day-training-form")}
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
          rowKey="key"
          loading={loadingRecords}
          pagination={{ pageSize: 10, showSizeChanger: true }}
          style={{ borderRadius: 0 }}
        />
      </div>
    </div>
  );
};

