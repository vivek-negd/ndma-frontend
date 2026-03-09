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
import { CommonService, AuthService } from "../../../services";

const { Title, Text } = Typography;

/* ── Record interface ── */
interface TrainingScheduleRecord {
  id?: string;
  state: string;
  district: string;
  organization: string;
  volunteers: number;
  startDate: string;
  endDate: string;
  batchNo: string;
  venue: string;
  trainersDetails: string;
  status: string;
}

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
  const [state, setState]     = useState<string | number | undefined>(undefined);
  const [district, setDistrict] = useState<string | number | undefined>(undefined);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate]   = useState("");
  const [states, setStates] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [records, setRecords] = useState<TrainingScheduleRecord[]>([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [recordsLoading, setRecordsLoading] = useState(false);
  const [orgTypes, setOrgTypes] = useState<any[]>([]);

  useEffect(() => {
    fetchStates();
    fetchOrgTypes();
  }, []);

  useEffect(() => {
    if (states.length > 0) {
      // Auto-fill state and district from logged-in user
      const userState = AuthService.getUserState();
      const userDistrict = AuthService.getUserDistrict();
      if (userState.state_id) {
        console.log('Auto-filling state filter:', userState);
        setState(userState.state_id);
      }
      if (userDistrict.district_id) {
        console.log('Auto-filling district filter:', userDistrict);
        setDistrict(userDistrict.district_id);
      }
    }
  }, [states]);

  useEffect(() => {
    if (states.length > 0) {
      fetchAllDistricts();
    }
  }, [states]);

  useEffect(() => {
    if (states.length > 0 && districts.length > 0) {
      fetchRecords();
    }
  }, [states, districts]);

  const fetchStates = async () => {
    try {
      setStatesLoading(true);
      const res = await CommonService.getStates();
      // 1. Direct array (YOUR API FORMAT)
      if (Array.isArray(res)) {
        setStates(res);
      }
      // 2. Wrapped { data: [...] }
      else if (res.data && Array.isArray(res.data)) {
        setStates(res.data);
      }
      // 3. Paginated { data: { data: [...] } }
      else if (res.data && typeof res.data === 'object' && 'data' in res.data) {
        setStates((res.data as any).data);
      } else {
        setStates([]);
      }
    } catch (error) {
      console.error("State fetch error:", error);
    } finally {
      setStatesLoading(false);
    }
  };

  const fetchAllDistricts = async () => {
    try {
      console.log('Fetching districts for all states...');
      const allDistricts: any[] = [];
      
      // Fetch districts for each state
      for (const state of states) {
        try {
          const res = await CommonService.getDistrictsByState(String(state.id));
          console.log(`Districts for state ${state.id} (${state.name}):`, res);
          
          let stateDistricts: any[] = [];
          if (res.data && (res.data as any).districts && Array.isArray((res.data as any).districts)) {
            stateDistricts = (res.data as any).districts;
          } else if (Array.isArray(res)) {
            stateDistricts = res;
          } else if (res.data && Array.isArray(res.data)) {
            stateDistricts = res.data;
          }
          
          // Add state_id to each district for easy lookup
          stateDistricts.forEach((d: any) => {
            d.state_id = state.id;
          });
          
          allDistricts.push(...stateDistricts);
        } catch (error) {
          console.error(`Failed to fetch districts for state ${state.id}:`, error);
        }
      }
      
      console.log('All districts loaded:', allDistricts);
      setDistricts(allDistricts);
    } catch (error) {
      console.error("Error fetching all districts:", error);
      setDistricts([]);
    }
  };

  const fetchOrgTypes = async () => {
    try {
      const res = await CommonService.getOrgTypes();
      let orgs: any[] = [];
      
      if (res.data && Array.isArray(res.data)) {
        orgs = res.data;
      } else if (res.data && typeof res.data === 'object' && 'data' in res.data) {
        orgs = (res.data as any).data;
      } else if (Array.isArray(res)) {
        orgs = res;
      } else {
        orgs = [];
      }
      
      console.log('Organization types loaded:', orgs);
      setOrgTypes(orgs);
    } catch (error) {
      console.error("Org types fetch error:", error);
      setOrgTypes([]);
    }
  };

  const fetchRecords = async () => {
    try {
      setRecordsLoading(true);
      const res = await CommonService.getTrainingSchedules();
      let rawRecords: any[] = [];
      
      // Handle direct array response
      if (Array.isArray(res)) {
        rawRecords = res;
      }
      // Handle wrapped response { data: [...] }
      else if (res.data && Array.isArray(res.data)) {
        rawRecords = res.data;
      }
      // Handle paginated response { data: { data: [...] } }
      else if (res.data && typeof res.data === 'object' && 'data' in res.data) {
        rawRecords = (res.data as any).data;
      } else {
        rawRecords = [];
      }
      
      console.log('Raw training schedules:', rawRecords);
      console.log('Available states for mapping:', states);
      
      // Debug: Log first record structure if available
      if (rawRecords.length > 0) {
        console.log('First record structure:', {
          state: `${rawRecords[0].state} (type: ${typeof rawRecords[0].state})`,
          district: `${rawRecords[0].district} (type: ${typeof rawRecords[0].district})`,
          organization: `${rawRecords[0].organization} (type: ${typeof rawRecords[0].organization})`,
          organization_name: `${rawRecords[0].organization_name}`,
          batch_no: `${rawRecords[0].batch_no}`,
          all_keys: Object.keys(rawRecords[0])
        });
      }
      
      // Enrich records with human-readable names
      const enrichedRecords = rawRecords.map((r: any, idx: number) => {
        // Get state name - handle both number and string IDs
        let stateName = String(r.state);
        console.log(`[Record ${idx + 1}] Looking for state ID: ${r.state} (type: ${typeof r.state})`);
        
        // Try to find state by ID (handle both numeric and string IDs)
        const stateObj = states.find((s: any) => {
          const sId = String(s.id);
          const rId = String(r.state);
          return sId === rId || parseInt(sId) === parseInt(rId);
        });
        
        if (stateObj) {
          stateName = stateObj.name;
          console.log(`  ✓ Found state: ${stateName}`);
        } else {
          console.log(`  ✗ State not found. Searched states:`, states.map((s: any) => ({ id: s.id, name: s.name })));
        }
        
        // Get district name
        let districtName = r.district || 'N/A';
        if (typeof r.district === 'number') {
          const districtObj = districts.find((d: any) => 
            d.id === r.district || d.id === parseInt(String(r.district))
          );
          districtName = districtObj?.name || `District ${r.district}`;
        }
        console.log(`  District: ${districtName} (lookup from ${districts.length} districts)`);
        
        // Get organization type - for display
        let orgName = r.organization_type || r.organization_name;
        
        // If organization_type is not available, try to find from orgTypes by ID
        if (!orgName && r.organization) {
          const orgObj = orgTypes.find((o: any) => 
            o.id === r.organization || o.id === parseInt(String(r.organization))
          );
          orgName = orgObj?.code || orgObj?.name || `Org ${r.organization}`;
        }
        
        if (!orgName) {
          orgName = 'N/A';
        }
        console.log(`  Organization: ${orgName} (from organization_type: ${r.organization_type}, organization_name: ${r.organization_name})`, orgTypes);
        
        return {
          ...r,
          state: stateName,
          district: districtName,
          organization: orgName,
          volunteers: r.number_of_volunteers || 0,
          batchNo: r.batch_no,
          venue: r.institute_details,
          trainersDetails: r.trainers_details,
          startDate: r.start_date,
          endDate: r.end_date,
          status: r.status
        };
      });
      
      console.log('Enriched records:', enrichedRecords);
      setRecords(enrichedRecords as TrainingScheduleRecord[]);
    } catch (error) {
      console.error("Records fetch error:", error);
      setRecords([]);
    } finally {
      setRecordsLoading(false);
    }
  };

  /* Derived stats */
  const totalRecords   = records.length;
  const statesCovered  = new Set(records.map((r) => r.state)).size;
  const totalVolunteers = records.reduce((s, r) => s + r.volunteers, 0);
  const ongoingCount = records.filter((r) => r.status === 'ongoing').length;

  /* State options - from API */
  const stateOptions = states.map((s: any) => ({ label: s.name, value: s.id }));

  /* District options - filtered by selected state */
  const districtOptions = state 
    ? districts.filter((d: any) => d.state_id === state).map((d: any) => ({ label: d.name, value: d.id }))
    : [];

  /* Filtered rows */
  const filtered = records.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch = !q || 
      (typeof r.state === 'string' ? r.state.toLowerCase().includes(q) : false) || 
      (typeof r.district === 'string' ? r.district.toLowerCase().includes(q) : false) || 
      (typeof r.organization === 'string' ? r.organization.toLowerCase().includes(q) : false);
    
    // Match by state name (after enrichment)
    let matchState = !state;
    if (state && !matchState) {
      const selectedStateName = states.find((s: any) => s.id === state)?.name;
      matchState = selectedStateName && r.state === selectedStateName;
    }

    // Match by district
    let matchDistrict = !district;
    if (district && !matchDistrict) {
      const selectedDistrictName = districts.find((d: any) => d.id === district)?.name;
      matchDistrict = selectedDistrictName && r.district === selectedDistrictName;
    }

    return matchSearch && matchState && matchDistrict;
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
      dataIndex: "trainersDetails",
      key: "trainersDetails",
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
        <StatCard label="Total Schedules"        value={totalRecords}      color="#2563eb" />
        <StatCard label="States Covered"       value={statesCovered}     color="#16a34a" />
        <StatCard label="Total Volunteers"     value={totalVolunteers}   color="#d97706" />
        <StatCard label="Ongoing"              value={ongoingCount}      color="#7c3aed" />
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
            onChange={(val) => {
              setState(val);
              setDistrict(undefined); // Reset district when state changes
            }}
            allowClear
            style={{ width: 160 }}
          />
          <Select
            placeholder="All Districts"
            options={districtOptions}
            value={district}
            onChange={setDistrict}
            allowClear
            disabled={!state}
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
          rowKey="id"
          loading={recordsLoading}
          pagination={{ pageSize: 10, showSizeChanger: true }}
          style={{ borderRadius: 0 }}
        />
      </div>
    </div>
  );
};

