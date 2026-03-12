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
  Modal,
  Tabs,
  Tag,
  Space,
  Card,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  FileExcelOutlined,
  DownloadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { VolunteerService, AuthService } from "../../../services";
import { apiClient } from '../../../server/endpoints/common.endpoint';

const { Title, Text } = Typography;

/* Record shape used by the table */
interface Record {
  key: string;
  state: string;
  district: string;
  organization: string;
  organization_type_code?: string;
  volunteers: number;
  date: string;
  dateObj?: Date;
  media: string[];
  state_id?: number | string;
  district_id?: number | string;
  organization_id?: number | string;
  timeSinceLastRecord?: string;
  // Session-specific fields for coverage rows with upload sessions
  bulk_upload_session_id?: number | string | null;
  upload_file_name?: string;
  session_download_url?: string;
  excel_download_url?: string;
}

/* Upload session shape */
interface UploadSession {
  key: string;
  id: string;
  uploaded_at: string;
  uploadedAtObj?: Date;
  uploadDate?: string;
  uploadTime?: string;
  file_name: string;
  status: 'success' | 'partial' | 'failed';
  volunteers_created: number;
  error_count: number;
  total_rows: number;
  uploaded_by?: string;
  state?: string;
  district?: string;
  organization?: string;
  session_download_url?: string;
  excel_download_url?: string;
}

/* Component state will hold records fetched from API */
const EMPTY_RECORDS: Record[] = [];
const EMPTY_SESSIONS: UploadSession[] = [];

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

  // Upload history states
  const [uploadSessions, setUploadSessions] = useState<UploadSession[]>(EMPTY_SESSIONS);
  const [uploadSessionsLoading, setUploadSessionsLoading] = useState(false);
  const [uploadHistoryFromDate, setUploadHistoryFromDate] = useState("");
  const [uploadHistoryToDate, setUploadHistoryToDate] = useState("");
  const [downloadingSessionId, setDownloadingSessionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"coverage" | "history">("coverage");

  useEffect(() => {
    const fetchCoverage = async () => {
      try {
        setLoading(true);

        // Build filters based on user role, state/district and permissions
        const role = AuthService.getRole();
        const user = AuthService.getUser();
        const userState = AuthService.getUserState();
        const userDistrict = AuthService.getUserDistrict();

        console.log('🔹 fetchCoverage: Role:', role);
        console.log('🔹 fetchCoverage: User:', user);
        console.log('🔹 fetchCoverage: UserState:', userState);
        console.log('🔹 fetchCoverage: UserDistrict:', userDistrict);

        const filters: Record<string, any> = {};

        // Permissions may encode explicit scope like "state:18" or "district:180" or "org:1"
        const perms = user?.permissions || [];
        perms.forEach((p: string) => {
          if (typeof p !== 'string') return;
          if (p.startsWith('state:')) filters.state = p.split(':')[1];
          if (p.startsWith('district:')) filters.district = p.split(':')[1];
          if (p.startsWith('org:') || p.startsWith('organization:')) filters.organization = p.split(':')[1];
        });

        // If no explicit permission filters, fall back to role-based defaults
        if (!filters.state && !filters.district && !filters.organization) {
          if (role === 'SDMA_ADMIN') {
            if (userState.state_id) filters.state = userState.state_id;
          } else if (role === 'YOUTH_ORG_ADMIN') {
            // Youth org admins likely limited to their district/state
            if (userDistrict.district_id) filters.district = userDistrict.district_id;
            else if (userState.state_id) filters.state = userState.state_id;
          } else {
            // SUPERADMIN / NDMA_ADMIN - no filters (global)
          }
        }

        console.log('🔹 fetchCoverage: Final filters:', filters);

        const res = await VolunteerService.getCoverage(filters);
        console.log('🔹 fetchCoverage: Received response:', res);
        const payload = (res && (res as any).data) || res;
        console.log('🔹 fetchCoverage: Extracted payload:', payload);
        const body = payload?.data ?? payload;
        console.log('🔹 fetchCoverage: Final body:', body);
        // Normalize possible response shapes:
        // 1) Array of records
        // 2) { records: [...] } or { data: [...] }
        // 3) { tabular_format: { coverage: [...] } } - NEW FORMAT with session data
        // 4) State-level summary with `state_id`, `state_name`, `total_volunteers`, `districts: [...]`
        
        // Helper function to parse date and create Date object
        const parseDate = (dateStr: string): Date | undefined => {
          if (!dateStr) return undefined;
          let input = dateStr;
          // Convert 'YYYY-MM-DD HH:MM:SS' to ISO format
          if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dateStr)) {
            input = dateStr.replace(' ', 'T');
          }
          const d = new Date(input);
          return isNaN(d.getTime()) ? undefined : d;
        };
        
        let mapped: Record[] = [];
        
        // Check if response has tabular_format.coverage (new session-based format)
        if (body?.tabular_format && Array.isArray(body.tabular_format.coverage)) {
          const coverageItems = body.tabular_format.coverage;
          
          console.log('🔹 Processing tabular_format.coverage:', coverageItems);
          
          // Map each coverage item to a Record
          // Note: Items with bulk_upload_session_id are individual uploads
          // Items with bulk_upload_session_id=null are aggregate rows
          mapped = coverageItems.map((item: any, idx: number) => {
            const dateObj = parseDate(item.date || '');
            
            // Determine display label based on session id
            let organizationLabel = item.organization || '—';
            let dateLabel = item.date || '';
            
            if (item.bulk_upload_session_id) {
              // This is a session-based row - add session info to label
              organizationLabel = `${organizationLabel} (Session #${item.bulk_upload_session_id})`;
              dateLabel = `${item.date || ''} [${item.upload_file_name || 'Uploaded'}]`;
            } else {
              // This is an aggregate row - mark it as current/aggregate
              organizationLabel = `${organizationLabel} (Current Total)`;
            }
            
            return {
              key: item.bulk_upload_session_id ? `session_${item.bulk_upload_session_id}` : `aggregate_${item.organization_id}_${idx}`,
              state: item.state || item.state_name || '—',
              district: item.district || item.district_name || '—',
              organization: organizationLabel,
              organization_type_code: item.organization_type_code || undefined,
              volunteers: item.no_of_volunteers || 0,
              date: dateLabel,
              dateObj,
              media: [],
              state_id: item.state_id,
              district_id: item.district_id,
              organization_id: item.organization_id,
              // Session-specific fields
              bulk_upload_session_id: item.bulk_upload_session_id,
              upload_file_name: item.upload_file_name,
              session_download_url: item.session_download_url,
              excel_download_url: item.excel_download_url,
            };
          });
        } else if (Array.isArray(body)) {
          mapped = body.map((item: any, idx: number) => {
            const dateObj = parseDate(item.date || item.created_at || item.event_date || '');
            return {
              key: item.id ? String(item.id) : String(idx + 1),
              state: item.state || item.state_name || '—',
              district: item.district || item.district_name || '—',
              organization: item.organization || item.organization_name || item.org_name || item.organization_type || '—',
              organization_type_code: item.organization_type_code || undefined,
              volunteers: item.volunteers || item.volunteers_count || item.count || 0,
              date: item.date || item.created_at || item.event_date || '',
              dateObj,
              media: item.media || item.media_urls || item.images || [],
              state_id: item.state_id || item.stateId || undefined,
              district_id: item.district_id || item.districtId || undefined,
              organization_id: item.organization_id || item.organizationId || undefined,
            };
          });
        } else if (Array.isArray(body?.records) || Array.isArray(body?.data)) {
          const items = body.records || body.data;
          mapped = items.map((item: any, idx: number) => {
            const dateObj = parseDate(item.date || item.created_at || item.event_date || '');
            return {
              key: item.id ? String(item.id) : String(idx + 1),
              state: item.state || item.state_name || '—',
              district: item.district || item.district_name || '—',
              organization: item.organization || item.organization_name || item.org_name || item.organization_type || '—',
              organization_type_code: item.organization_type_code || undefined,
              volunteers: item.volunteers || item.volunteers_count || item.count || 0,
              date: item.date || item.created_at || item.event_date || '',
              dateObj,
              media: item.media || item.media_urls || item.images || [],
              state_id: item.state_id || item.stateId || undefined,
              district_id: item.district_id || item.districtId || undefined,
              organization_id: item.organization_id || item.organizationId || undefined,
            };
          });
        } else if (body && (body.state_id || body.state_name) && Array.isArray(body.districts)) {
          // Map district entries into table rows (district-only summary; these objects don't include organization names)
          mapped = (body.districts || []).map((d: any, idx: number) => {
            const dateObj = parseDate(body.date || '');
            return {
              key: d.district_id ? String(d.district_id) : String(idx + 1),
              state: body.state_name || body.state || '—',
              district: d.district_name || d.district || '—',
              organization: d.organization || d.organization_name || '—',
              organization_type_code: d.organization_type_code || undefined,
              volunteers: d.volunteer_count || d.volunteers || 0,
              date: body.date || '',
              dateObj,
              media: d.media || [],
              state_id: body.state_id || undefined,
              district_id: d.district_id || undefined,
            };
          });
        } else {
          console.warn('🔹 fetchCoverage: Response body does not match expected format');
          console.log('🔹 fetchCoverage: body keys:', Object.keys(body || {}));
          mapped = [];
        }
        
        // Sort records by date (newest first) and calculate time gaps
        mapped.sort((a, b) => {
          if (!a.dateObj && !b.dateObj) return 0;
          if (!a.dateObj) return 1;
          if (!b.dateObj) return -1;
          return b.dateObj.getTime() - a.dateObj.getTime();
        });
        
        // Calculate time since last record for each entry
        mapped = mapped.map((record, idx) => {
          if (idx === mapped.length - 1) {
            // Last record has no next record
            return record;
          }
          const nextRecord = mapped[idx + 1];
          if (record.dateObj && nextRecord.dateObj) {
            const timeDiff = record.dateObj.getTime() - nextRecord.dateObj.getTime();
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            if (daysDiff > 0) {
              record.timeSinceLastRecord = `${daysDiff} day${daysDiff > 1 ? 's' : ''} apart`;
            } else if (hoursDiff > 0) {
              record.timeSinceLastRecord = `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} apart`;
            } else {
              record.timeSinceLastRecord = 'Minutes apart';
            }
          }
          return record;
        });

        console.log('🔹 fetchCoverage: Mapped records:', mapped);
        setRecords(mapped);
      } catch (err) {
        console.error('Failed to fetch youth org coverage:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchUploadSessions = async () => {
      try {
        setUploadSessionsLoading(true);

        // Build filters for upload sessions
        const role = AuthService.getRole();
        const user = AuthService.getUser();
        const userState = AuthService.getUserState();
        const userDistrict = AuthService.getUserDistrict();

        const filters: Record<string, any> = {};

        // Apply date filters if set
        if (uploadHistoryFromDate) {
          filters.from_date = uploadHistoryFromDate;
        }
        if (uploadHistoryToDate) {
          filters.to_date = uploadHistoryToDate;
        }

        // Apply permissions-based filters
        const perms = user?.permissions || [];
        perms.forEach((p: string) => {
          if (typeof p !== 'string') return;
          if (p.startsWith('state:')) filters.state = p.split(':')[1];
          if (p.startsWith('district:')) filters.district = p.split(':')[1];
          if (p.startsWith('org:') || p.startsWith('organization:')) filters.organization = p.split(':')[1];
        });

        // If no explicit permission filters, fall back to role-based defaults
        if (!filters.state && !filters.district && !filters.organization) {
          if (role === 'SDMA_ADMIN') {
            if (userState.state_id) filters.state = userState.state_id;
          } else if (role === 'YOUTH_ORG_ADMIN') {
            if (userDistrict.district_id) filters.district = userDistrict.district_id;
            else if (userState.state_id) filters.state = userState.state_id;
          }
        }

        console.log('🔹 fetchUploadSessions filters:', filters);

        const res = await VolunteerService.getBulkUploadSessions(filters);
        const payload = (res && (res as any).data) || res;
        const body = payload?.data ?? payload;
        
        console.log('🔹 fetchUploadSessions response:', body);

        // Normalize response - handle both array and object with sessions
        let sessionsList: any[] = [];
        if (Array.isArray(body)) {
          sessionsList = body;
        } else if (Array.isArray(body?.sessions)) {
          sessionsList = body.sessions;
        } else if (Array.isArray(body?.bulk_upload_sessions)) {
          sessionsList = body.bulk_upload_sessions;
        } else if (Array.isArray(body?.data)) {
          sessionsList = body.data;
        }

        // Map to UploadSession interface
        const mapped: UploadSession[] = sessionsList.map((item: any, idx: number) => {
          const dateStr = item.uploaded_at || item.created_at || '';
          let uploadedAtObj: Date | undefined;
          let uploadDate = '';
          let uploadTime = '';

          if (dateStr) {
            let input = dateStr;
            if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dateStr)) {
              input = dateStr.replace(' ', 'T');
            }
            uploadedAtObj = new Date(input);
            if (!isNaN(uploadedAtObj.getTime())) {
              uploadDate = uploadedAtObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
              uploadTime = uploadedAtObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            }
          }

          return {
            key: String(item.id || idx),
            id: String(item.id || idx),
            uploaded_at: dateStr,
            uploadedAtObj,
            uploadDate,
            uploadTime,
            file_name: item.file_name || 'Unknown',
            status: item.status || 'unknown',
            volunteers_created: item.volunteers_created || 0,
            error_count: item.error_count || 0,
            total_rows: item.total_rows || 0,
            uploaded_by: item.uploaded_by || 'System',
            state: item.state || '—',
            district: item.district || '—',
            organization: item.organization || '—',
            session_download_url: item.session_download_url,
            excel_download_url: item.excel_download_url,
          };
        });

        // Sort by date descending (newest first)
        mapped.sort((a, b) => {
          const aTime = a.uploadedAtObj?.getTime() || 0;
          const bTime = b.uploadedAtObj?.getTime() || 0;
          return bTime - aTime;
        });

        console.log('🔹 fetchUploadSessions: Mapped sessions:', mapped);
        setUploadSessions(mapped);
      } catch (err) {
        console.error('Failed to fetch upload sessions:', err);
      } finally {
        setUploadSessionsLoading(false);
      }
    };

    fetchCoverage();
    fetchUploadSessions();
  }, [uploadHistoryFromDate, uploadHistoryToDate]);

  /* Derived stats */
  const totalRecords = records.length;
  const statesCovered = new Set(records.map((r) => r.state)).size;
  const totalVolunteers = records.reduce((s, r) => s + (r.volunteers || 0), 0);
  const totalMedia = records.reduce((s, r) => s + (r.media?.length || 0), 0);

  /* Date formatter used in table */
  const formatDate = (s: string) => {
    if (!s) return '—';
    // Some backends return 'YYYY-MM-DD HH:MM:SS' — convert to ISO-compatible string
    let input = s;
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(s)) {
      input = s.replace(' ', 'T');
    }
    const d = new Date(input);
    if (isNaN(d.getTime())) return s;
    // Format: "12 Mar 2026, 9:25 PM"
    return d.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    }) + ', ' + d.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const downloadExcel = async (districtId?: number | string, districtName?: string, record?: Record) => {
    // Determine which URL to use based on record type
    let downloadUrl: string | null = null;
    let filename = '';

    if (record) {
      // Session-based download (when bulk_upload_session_id exists)
      if (record.bulk_upload_session_id) {
        downloadUrl = record.session_download_url || `/volunteer/export/?bulk_upload_session_id=${record.bulk_upload_session_id}`;
        filename = `session_${record.bulk_upload_session_id}_${record.upload_file_name || 'upload'}.xlsx`;
      }
      // Aggregate download (when bulk_upload_session_id is null or undefined)
      else if (record.excel_download_url) {
        downloadUrl = record.excel_download_url;
        filename = `organization_${record.organization_id}_all_volunteers.xlsx`;
      } else if (record.organization_id) {
        downloadUrl = `/volunteer/export/?organization_id=${record.organization_id}`;
        filename = `organization_${record.organization_id}_all_volunteers.xlsx`;
      }
    } else {
      // Legacy behavior - use district ID
      if (!districtId) {
        alert('No district id available for this row');
        return;
      }
      downloadUrl = `/volunteer/export/?district_id=${districtId}`;
      filename = `volunteers_${districtName ? districtName.replace(/\s+/g, '_') : districtId}.xlsx`;
    }

    if (!downloadUrl) {
      alert('No download URL available for this row');
      return;
    }

    // Strip /api/v1/ prefix if present (to avoid double-prefixing by apiClient)
    const cleanUrl = downloadUrl.replace(/^\/api\/v1\//, '/');

    const idKey = String(record?.bulk_upload_session_id || districtId || 'download');
    setDownloadingId(idKey);

    try {
      console.log('🔹 Downloading from:', cleanUrl);
      const res = await apiClient.get(cleanUrl, { responseType: 'arraybuffer' });

      const status = res.status;
      const headers = (res.headers || {}) as Record<string, any>;
      const contentType = (headers['content-type'] || headers['Content-Type'] || '').toLowerCase();

      if (status < 200 || status >= 300) {
        const text = new TextDecoder().decode(res.data as ArrayBuffer);
        let pretty = text;
        try { pretty = JSON.stringify(JSON.parse(text), null, 2); } catch (e) {}
        console.error('Export failed response:', status, pretty);
        Modal.error({ title: 'Export failed', content: (<div style={{ maxHeight: 240, overflow: 'auto' }}><pre style={{ whiteSpace: 'pre-wrap' }}>{pretty}</pre></div>) });
        return;
      }

      // If the server returned JSON/text disguised as a download, decode and show it
      if (contentType.includes('application/json') || contentType.includes('text/')) {
        const text = new TextDecoder().decode(res.data as ArrayBuffer);
        console.error('Export returned non-binary content:', contentType, text.slice(0, 200));
        Modal.error({ title: 'Export returned invalid file', content: (<div style={{ maxHeight: 240, overflow: 'auto' }}><pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre></div>) });
        return;
      }

      const arrayBuffer = res.data as ArrayBuffer;
      const u8 = new Uint8Array(arrayBuffer);
      const isZip = u8.length >= 4 && u8[0] === 0x50 && u8[1] === 0x4b && (u8[2] === 0x03 || u8[2] === 0x05 || u8[2] === 0x07) && u8[3] === 0x04;
      if (!isZip) {
        const prefix = new TextDecoder().decode(arrayBuffer.slice(0, Math.min(1024, arrayBuffer.byteLength)));
        console.error('Downloaded file does not appear to be a ZIP/XLSX. Preview:', prefix.slice(0, 400));
        Modal.error({
          title: 'Downloaded file format invalid',
          content: (
            <div style={{ maxHeight: 300, overflow: 'auto' }}>
              <div style={{ marginBottom: 8 }}><b>Content-Type:</b> {contentType}</div>
              <div style={{ marginBottom: 8 }}><b>Content-Disposition:</b> {headers['content-disposition'] || headers['Content-Disposition'] || '(none)'}</div>
              <pre style={{ whiteSpace: 'pre-wrap' }}>{prefix}</pre>
            </div>
          ),
        });
        return;
      }

      console.debug('Export: downloaded byteLength=', arrayBuffer?.byteLength);
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: contentType || 'application/octet-stream' });
      const disposition = headers['content-disposition'] || headers['Content-Disposition'] || '';
      
      // Try to extract filename from disposition header
      const fnameMatch = /filename\*=UTF-8''([^;]+)/i.exec(disposition) || /filename="?([^";]+)"?/i.exec(disposition);
      if (fnameMatch && fnameMatch[1]) {
        filename = decodeURIComponent(fnameMatch[1]);
      }

      const downloadUrlObj = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrlObj;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(downloadUrlObj);

      console.log('✅ Download complete:', filename);
    } catch (err: any) {
      console.error('Download failed', err);
      Modal.error({ title: 'Download failed', content: String(err?.message || err) });
    } finally {
      setDownloadingId(null);
    }
  };

  const downloadUploadSession = async (session: UploadSession) => {
    if (!session.id) {
      Modal.error({ title: 'Download failed', content: 'Session ID not available' });
      return;
    }

    const sessionIdKey = String(session.id);
    setDownloadingSessionId(sessionIdKey);

    try {
      console.log('🔹 Downloading session:', session.id, 'URL:', session.session_download_url);

      let url = session.session_download_url || `/volunteer/export/?bulk_upload_session_id=${session.id}`;
      // Strip /api/v1/ prefix if present (to avoid double-prefixing by apiClient)
      url = url.replace(/^\/api\/v1\//, '/');
      
      const res = await apiClient.get(url, { responseType: 'arraybuffer' });

      const status = res.status;
      const headers = (res.headers || {}) as Record<string, any>;
      const contentType = (headers['content-type'] || headers['Content-Type'] || '').toLowerCase();

      if (status < 200 || status >= 300) {
        const text = new TextDecoder().decode(res.data as ArrayBuffer);
        Modal.error({ title: 'Download failed', content: String(text.slice(0, 200)) });
        return;
      }

      if (contentType.includes('application/json') || contentType.includes('text/')) {
        const text = new TextDecoder().decode(res.data as ArrayBuffer);
        Modal.error({ title: 'Download failed', content: String(text.slice(0, 200)) });
        return;
      }

      const arrayBuffer = res.data as ArrayBuffer;
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: contentType || 'application/octet-stream' });
      const disposition = headers['content-disposition'] || headers['Content-Disposition'] || '';
      
      let filename = `upload_session_${session.id}.xlsx`;
      const fnameMatch = /filename\*=UTF-8''([^;]+)/i.exec(disposition) || /filename="?([^";]+)"?/i.exec(disposition);
      if (fnameMatch && fnameMatch[1]) {
        filename = decodeURIComponent(fnameMatch[1]);
      }

      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(downloadUrl);

      console.log('✅ Session download complete');
    } catch (err: any) {
      console.error('Download failed', err);
      Modal.error({ title: 'Download failed', content: String(err?.message || err) });
    } finally {
      setDownloadingSessionId(null);
    }
  };

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
      render: (v: string, record: Record) => {
        // Show organization_type_code with styling if available
        const orgCode = record.organization_type_code;
        if (orgCode) {
          const codeColors: Record<string, string> = {
            'NSS': '#e0f2fe',
            'NCC': '#fee2e2',
            'NYKS': '#fef3c7',
            'BSG': '#dcfce7',
          };
          const codeBgColor = codeColors[orgCode] || '#f0f0f0';
          const codeTextColor = codeColors[orgCode] === '#e0f2fe' ? '#0369a1' : 
                              codeColors[orgCode] === '#fee2e2' ? '#991b1b' :
                              codeColors[orgCode] === '#fef3c7' ? '#92400e' : '#166534';
          
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span 
                style={{
                  backgroundColor: codeBgColor,
                  color: codeTextColor,
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                {orgCode}
              </span>
              <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>
            </div>
          );
        }
        return <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>;
      },
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
      width: 180,
      sorter: (a, b) => {
        const aTime = a.dateObj?.getTime() || 0;
        const bTime = b.dateObj?.getTime() || 0;
        return bTime - aTime; // Sort newest first
      },
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151", fontFamily: 'monospace' }}>{formatDate(v)}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>TIME GAP</span>,
      dataIndex: "timeSinceLastRecord",
      key: "timeSinceLastRecord",
      width: 130,
      render: (v: string | undefined) => (
        v ? (
          <span style={{
            backgroundColor: '#eff6ff',
            color: '#1e40af',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            display: 'inline-block'
          }}>
            {v}
          </span>
        ) : (
          <Text style={{ color: "#9ca3af", fontSize: 13 }}>Latest</Text>
        )
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>EXCEL</span>,
      dataIndex: "media",
      key: "excel",
      width: 150,
      render: (_: any, record: Record) => {
        // Determine if this is a session or aggregate download
        const isSessionDownload = record.bulk_upload_session_id !== null && record.bulk_upload_session_id !== undefined;
        const downloadId = isSessionDownload ? `session_${record.bulk_upload_session_id}` : `org_${record.organization_id}`;
        const isDownloading = downloadingId === downloadId;
        const isAvailable = !!(isSessionDownload ? record.session_download_url : record.excel_download_url);
        const badgeCount = record.volunteers || 0;
        
        if (!isAvailable) return <Text style={{ color: "#9ca3af" }}>—</Text>;
        
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              onClick={() => downloadExcel(undefined, undefined, record)}
              role="button"
              aria-label="Download Excel"
              style={{
                width: 40, height: 32, borderRadius: 8, overflow: 'hidden',
                border: '1px solid #dcfce7', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#ecfdf5',
              }}
              title={isSessionDownload ? `Download Session #${record.bulk_upload_session_id}` : 'Download All Volunteers'}
            >
              {isDownloading ? <Spin size="small" /> : <FileExcelOutlined style={{ color: '#047857', fontSize: 16 }} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
              <Badge count={badgeCount} size="small" style={{ backgroundColor: '#16a34a', boxShadow: 'none' }} />
              <Text style={{ fontSize: 11, color: '#9ca3af' }}>{isSessionDownload ? 'Session' : 'All'}</Text>
            </div>
          </div>
        );
      },
    },
  ];

  /* Upload session columns */
  const uploadSessionColumns = [
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280" }}>#</span>,
      key: "index",
      width: 50,
      render: (_: any, __: any, i: number) => <Text style={{ color: "#6b7280", fontSize: 13 }}>{i + 1}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>DATE</span>,
      dataIndex: "uploadDate",
      key: "uploadDate",
      width: 120,
      sorter: (a, b) => {
        const aTime = a.uploadedAtObj?.getTime() || 0;
        const bTime = b.uploadedAtObj?.getTime() || 0;
        return bTime - aTime;
      },
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>TIME</span>,
      dataIndex: "uploadTime",
      key: "uploadTime",
      width: 100,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151", fontFamily: 'monospace' }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>FILE NAME</span>,
      dataIndex: "file_name",
      key: "file_name",
      width: 160,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>STATUS</span>,
      dataIndex: "status",
      key: "status",
      width: 110,
      render: (status: string) => {
        const statusConfig: Record<string, { color: string; bgColor: string }> = {
          'success': { color: '#166534', bgColor: '#dcfce7' },
          'partial': { color: '#b45309', bgColor: '#fef3c7' },
          'failed': { color: '#991b1b', bgColor: '#fee2e2' },
        };
        const config = statusConfig[status] || { color: '#6b7280', bgColor: '#f3f4f6' };
        return (
          <Tag
            style={{
              backgroundColor: config.bgColor,
              color: config.color,
              border: 'none',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>CREATED</span>,
      dataIndex: "volunteers_created",
      key: "volunteers_created",
      width: 80,
      sorter: (a, b) => a.volunteers_created - b.volunteers_created,
      render: (v: number) => (
        <Badge
          count={v}
          style={{
            backgroundColor: '#16a34a',
            color: '#fff',
            fontWeight: 600,
            boxShadow: 'none'
          }}
        />
      ),
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>ERRORS</span>,
      dataIndex: "error_count",
      key: "error_count",
      width: 80,
      sorter: (a, b) => a.error_count - b.error_count,
      render: (v: number) => v > 0 ? (
        <Badge
          count={v}
          style={{
            backgroundColor: '#dc2626',
            color: '#fff',
            fontWeight: 600,
            boxShadow: 'none'
          }}
        />
      ) : <Text style={{ color: "#9ca3af" }}>—</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>TOTAL</span>,
      dataIndex: "total_rows",
      key: "total_rows",
      width: 70,
      sorter: (a, b) => a.total_rows - b.total_rows,
      render: (v: number) => <Text style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>UPLOADED BY</span>,
      dataIndex: "uploaded_by",
      key: "uploaded_by",
      width: 120,
      render: (v: string) => <Text style={{ fontSize: 13, color: "#374151" }}>{v}</Text>,
    },
    {
      title: <span style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", letterSpacing: "0.5px" }}>DOWNLOAD</span>,
      key: "download",
      width: 100,
      render: (_: any, record: UploadSession) => {
        const isDownloading = downloadingSessionId === String(record.id);
        return (
          <Button
            type="text"
            icon={<DownloadOutlined />}
            loading={isDownloading}
            onClick={() => downloadUploadSession(record)}
            size="small"
            disabled={!record.session_download_url && !record.id}
            style={{ color: '#1d4ed8' }}
          >
            {isDownloading ? 'Downloading' : 'Download'}
          </Button>
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

      {/* ── Tabs for Coverage and History ── */}
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key as "coverage" | "history")}
        style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden" }}
        tabBarStyle={{ borderBottom: "1px solid #e5e7eb", margin: 0 }}
      >
        <Tabs.TabPane
          tab={<span style={{ fontWeight: 600, fontSize: 14 }}>📊 Coverage Summary</span>}
          key="coverage"
        >
          {/* ── Filter + table card ── */}
          <div style={{ padding: 0 }}>

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
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={<span style={{ fontWeight: 600, fontSize: 14 }}>📋 Upload History</span>}
          key="history"
        >
          <div style={{ padding: 0 }}>
            {/* Filter bar for upload history */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", borderBottom: "1px solid #f0f0f0", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Text style={{ color: "#6b7280", fontSize: 13 }}>From</Text>
                <input
                  type="date"
                  value={uploadHistoryFromDate}
                  onChange={(e) => setUploadHistoryFromDate(e.target.value)}
                  style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "4px 8px", fontSize: 13, color: "#374151", outline: "none" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Text style={{ color: "#6b7280", fontSize: 13 }}>To</Text>
                <input
                  type="date"
                  value={uploadHistoryToDate}
                  onChange={(e) => setUploadHistoryToDate(e.target.value)}
                  style={{ border: "1px solid #d1d5db", borderRadius: 6, padding: "4px 8px", fontSize: 13, color: "#374151", outline: "none" }}
                />
              </div>
              <Button
                type="text"
                icon={<ReloadOutlined />}
                onClick={() => {
                  setUploadHistoryFromDate("");
                  setUploadHistoryToDate("");
                }}
                style={{ marginLeft: "auto" }}
              >
                Reset Filters
              </Button>
              <Text style={{ color: "#6b7280", fontSize: 13, whiteSpace: "nowrap" }}>
                {uploadSessions.length} uploads
              </Text>
            </div>

            {/* Upload history table */}
            {uploadSessions.length === 0 && !uploadSessionsLoading ? (
              <div style={{
                padding: "60px 20px",
                textAlign: "center",
                color: "#9ca3af"
              }}>
                <Text style={{ fontSize: 14, display: "block", marginBottom: 8 }}>
                  📭 No upload history found
                </Text>
                <Text style={{ fontSize: 12, color: "#d1d5db" }}>
                  Upload history will appear here once you upload volunteers
                </Text>
              </div>
            ) : (
              <Table
                columns={uploadSessionColumns}
                dataSource={uploadSessions}
                loading={uploadSessionsLoading}
                rowKey="key"
                pagination={{ pageSize: 10, showSizeChanger: true }}
                style={{ borderRadius: 0 }}
              />
            )}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

