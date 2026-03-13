import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  Space,
  message,
  Upload,
  Spin,
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CommonService, AuthService } from "../../../services";

const { Title, Text } = Typography;

export const SeventhDayTrainingForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [orgTypes, setOrgTypes] = useState<any[]>([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [orgTypesLoading, setOrgTypesLoading] = useState(false);

  useEffect(() => {
    fetchStates();
    fetchOrgTypes();
  }, []);

  // Auto-fill state from logged-in user after states load
  useEffect(() => {
    if (states.length > 0) {
      const userState = AuthService.getUserState();
      if (userState.state_id) {
        console.log('Auto-filling state:', userState);
        const match = states.find((s: any) => String(s.id) === String(userState.state_id));
        const valueToSet = match ? match.id : userState.state_id;
        form.setFieldValue('state', valueToSet);
        // Fetch districts for the auto-filled state
        handleStateChange(valueToSet);
      } else {
        console.log('No user state found');
      }
    }
  }, [states]);

  // Auto-fill district after districts load
  useEffect(() => {
    if (districts.length > 0) {
      const userDistrict = AuthService.getUserDistrict();
      if (userDistrict.district_id) {
        console.log('Auto-filling district:', userDistrict);
        const match = districts.find((d: any) => String(d.id) === String(userDistrict.district_id));
        if (match) {
          form.setFieldValue('district', match.id);
        } else {
          console.log('District not found in loaded list:', userDistrict.district_id);
        }
      } else {
        console.log('No user district found');
      }
    }
  }, [districts]);

  const fetchStates = async () => {
    try {
      setStatesLoading(true);
      const res = await CommonService.getStates();
      // Handle direct array response
      // Normalize different shapes into an array of { id, name }
      let list: any[] = [];
      if (Array.isArray(res)) list = res;
      else if (res && Array.isArray((res as any).data)) list = (res as any).data;
      else if (res && (res as any).data && Array.isArray((res as any).data.data)) list = (res as any).data.data;
      else if (res && (res as any).data && Array.isArray((res as any).data.states)) list = (res as any).data.states;
      else list = [];

      const normalized = list.map((s: any) => ({ id: s.id ?? s.state_id ?? s.code ?? s.name, name: s.name ?? s.state_name ?? String(s) }));
      setStates(normalized as any[]);
    } catch (error) {
      console.error("State fetch error:", error);
      message.error("Failed to load states");
    } finally {
      setStatesLoading(false);
    }
  };

  const fetchOrgTypes = async () => {
    try {
      setOrgTypesLoading(true);
      const res = await CommonService.getOrgTypes();
      console.log('Organization Types raw response:', res);
      
      // Handle API response { organization_types: [...] }
      if (res.organization_types && Array.isArray(res.organization_types)) {
        console.log('✓ Organization_types API response - Found', res.organization_types.length, 'org types');
        setOrgTypes(res.organization_types as any);
      }
      // Handle direct array response
      else if (Array.isArray(res)) {
        console.log('✓ Direct array response - Found', res.length, 'org types');
        setOrgTypes(res as any);
      }
      // Handle wrapped response { data: [...] }
      else if (res.data && Array.isArray(res.data)) {
        console.log('✓ Wrapped array response - Found', res.data.length, 'org types');
        setOrgTypes(res.data as any);
      }
      // Handle org-types API response { data: { org_types: [...] } }
      else if (res.data && (res.data as any).org_types && Array.isArray((res.data as any).org_types)) {
        console.log('✓ Org-types API response - Found', (res.data as any).org_types.length, 'org types');
        setOrgTypes((res.data as any).org_types as any);
      }
      // Handle organizations API response { data: { organizations: [...] } }
      else if (res.data && (res.data as any).organizations && Array.isArray((res.data as any).organizations)) {
        console.log('✓ Organizations API response - Found', (res.data as any).organizations.length, 'org types');
        setOrgTypes((res.data as any).organizations as any);
      }
      // Handle paginated response { data: { data: [...] } }
      else if (res.data && typeof res.data === 'object' && 'data' in res.data && Array.isArray((res.data as any).data)) {
        console.log('✓ Paginated response - Found', (res.data as any).data.length, 'org types');
        setOrgTypes((res.data as any).data as any);
      } else {
        console.log('✗ No org types found - Response structure:', JSON.stringify(res, null, 2));
        setOrgTypes([]);
      }
    } catch (error) {
      console.error("Org types fetch error:", error);
      message.error("Failed to load organization types");
    } finally {
      setOrgTypesLoading(false);
    }
  };

  const handleStateChange = async (stateId: string | number) => {
    console.log('State selected:', stateId);
    form.setFieldValue("district", undefined);
    setDistricts([]);
    
    if (!stateId) {
      setDistricts([]);
      return;
    }
    
    try {
      setDistrictsLoading(true);
      const res = await CommonService.getDistrictsByState(String(stateId));
      // Normalize response shapes similar to states
      let list: any[] = [];
      if (Array.isArray(res)) list = res;
      else if (res && Array.isArray((res as any).data)) list = (res as any).data;
      else if (res && (res as any).data && Array.isArray((res as any).data.districts)) list = (res as any).data.districts;
      else if (res && (res as any).districts && Array.isArray((res as any).districts)) list = (res as any).districts;
      else list = [];

      const normalized = list.map((d: any) => ({ id: d.id ?? d.district_id ?? d.lgd_code ?? d.name, name: d.name ?? d.district_name ?? String(d) }));
      setDistricts(normalized as any[]);
    } catch (error) {
      console.error("Districts fetch error:", error);
      message.error("Failed to load districts");
      setDistricts([]);
    } finally {
      setDistrictsLoading(false);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      // Validation: All required fields
      if (!values.state || !values.district || !values.organization || !values.date) {
        messageApi.error('Please fill all required fields');
        setLoading(false);
        return;
      }

      // Get selected organization details
      const selectedOrg = orgTypes.find((o: any) => o.id === values.organization);
      if (!selectedOrg) {
        messageApi.error('Invalid organization selected');
        setLoading(false);
        return;
      }

      // ===== STEP 1: Create Training Day =====
      const payload = {
        state: Number(values.state),
        district: Number(values.district),
        organization_name: selectedOrg.name || '',
        organization_type: selectedOrg.code || '',
        number_of_volunteers: Number(values.numberOfVolunteers) || 0,
        batch_no: values.batchNumber || '',
        institute_details: values.instituteDetails || '',
        trainers_details: values.trainersDetails || '',
        day_date: values.date ? values.date.format('YYYY-MM-DD') : null,
        day: 7,
        day_notes: ''
      };

      console.log('📤 Submitting payload:', JSON.stringify(payload, null, 2));
      const createRes = await CommonService.createDaywiseTraining(payload);
      console.log('📥 API Response:', createRes);

      // Extract session_id from response (following guide structure)
      let sessionId: number | null = null;
      
      // Try different response structures
      if (createRes?.data?.session?.id) {
        sessionId = createRes.data.session.id;
        console.log('✅ Session ID found at .data.session.id:', sessionId);
      } else if ((createRes as any)?.session?.id) {
        sessionId = (createRes as any).session.id;
        console.log('✅ Session ID found at .session.id:', sessionId);
      } else if (createRes?.data?.id) {
        sessionId = createRes.data.id;
        console.log('✅ Session ID found at .data.id:', sessionId);
      }

      if (!sessionId) {
        console.error('❌ Could not extract session ID from response:', createRes);
        messageApi.error('Training created but session ID not found in response');
        form.resetFields();
        setFileList([]);
        setLoading(false);
        return;
      }

      // ===== STEP 2: Upload Photos (if provided) =====
      if (fileList && fileList.length > 0) {
        console.log(`📸 Uploading ${fileList.length} photo(s) for session ${sessionId}`);
        const filesToUpload = fileList.map((f: any) => f.originFileObj || f);
        
        try {
          const uploadRes = await CommonService.uploadSessionPhotos(sessionId, filesToUpload);
          console.log('📥 Upload Response:', uploadRes);
          const uploadedCount = uploadRes?.data?.length || fileList.length;
          messageApi.success(`✅ Training created! ${uploadedCount} photo(s) uploaded`);
        } catch (uploadErr) {
          console.error('⚠️ Photo upload failed:', uploadErr);
          messageApi.warning('Training created but photo upload failed');
        }
      } else {
        messageApi.success('✅ Training created successfully!');
      }

      // Reset form
      form.resetFields();
      setFileList([]);
      
      // Navigate back after 1 second
      setTimeout(() => navigate(-1), 1000);
      
    } catch (error: any) {
      console.error('❌ Submit error:', error);
      const errorMsg = error?.response?.data?.message || error?.message || 'Failed to save training';
      messageApi.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", background: "#f5f5f5" }}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Training Workflow /&nbsp;
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Add New 7th Day Training</span>
          </Text>
          <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
            Add New 7th Day Training Record
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Fill in the details and upload media from the final day.
          </Text>
        </div>
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ borderRadius: 8 }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      {/* ── Form card ── */}
      <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px" }}>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{ padding: "24px" }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true, message: 'Please select state!' }]}
              >
                <Select 
                  placeholder="Select State"
                  loading={statesLoading}
                  onChange={handleStateChange}
                >
                  {states.map((state: any) => (
                    <Select.Option key={state.id} value={state.id}>
                      {state.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'Please select district!' }]}
              >
                <Select 
                  placeholder="Select District"
                  loading={districtsLoading}
                  disabled={districts.length === 0}
                >
                  {districts.map((district: any) => (
                    <Select.Option key={district.id} value={district.id}>
                      {district.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Organization"
                name="organization"
                rules={[{ required: true, message: 'Please select organization!' }]}
              >
                <Select
                  placeholder="Select Organization Type"
                  loading={orgTypesLoading}
                  showSearch
                  optionFilterProp="children"
                >
                  {orgTypes.map((o) => (
                    <Select.Option key={o.id} value={o.id}>{o.code || o.name || o.id}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="No. of Vol."
                name="numberOfVolunteers"
                rules={[{ required: true, message: 'Please enter number of volunteers!' }]}
              >
                <Input
                  type="number"
                  placeholder="Enter Number of Volunteers"
                  min={1}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Batch No."
                name="batchNumber"
                rules={[{ required: true, message: 'Please enter batch number!' }]}
              >
                <Input placeholder="Enter Batch Number" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Institute Details"
                name="instituteDetails"
                rules={[{ required: true, message: 'Please enter institute details!' }]}
              >
                <Input placeholder="Enter Institute Details" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="Trainers Details"
                name="trainersDetails"
                rules={[{ required: true, message: 'Please enter trainers details!' }]}
              >
                <Input.TextArea
                  placeholder="Enter Trainers Details"
                  rows={3}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: 'Please select date!' }]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Select Date"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Upload Option"
                name="uploadOption"
                rules={[{ required: true, message: 'Please select upload option!' }]}
              >
                <Select placeholder="Select Upload Option">
                  <Select.Option value="photos">Upload Photos</Select.Option>
                  <Select.Option value="documents">Upload Documents</Select.Option>
                  <Select.Option value="attendance">Upload Attendance</Select.Option>
                  <Select.Option value="materials">Upload Training Materials</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={loading}
              size="large"
              style={{ borderRadius: 8, background: "#1d4ed8", border: "none" }}
            >
              Save Training
            </Button>
            <Button
              type="default"
              icon={<UploadOutlined />}
              size="large"
            >
              Upload Files
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};