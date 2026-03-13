import React, { useEffect, useState } from "react";
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
  PictureOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CommonService, AuthService } from "../../../services";
const { Title, Text } = Typography;

export const FirstDayTrainingForm = () => {
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
    const fetchStates = async () => {
      try {
        setStatesLoading(true);
        const res = await CommonService.getStates();
        // Normalize response shapes into [{id,name}]
        let list: any[] = [];
        if (Array.isArray(res)) list = res;
        else if (res && Array.isArray((res as any).data)) list = (res as any).data;
        else if (res && (res as any).data && Array.isArray((res as any).data.data)) list = (res as any).data.data;
        else if (res && (res as any).data && Array.isArray((res as any).data.states)) list = (res as any).data.states;
        else list = [];

        const normalized = list.map((s: any) => ({ id: s.id ?? s.state_id ?? s.code ?? s.name, name: s.name ?? s.state_name ?? String(s) }));
        setStates(normalized as any[]);
      } catch (e) {
        console.error('Failed to load states', e);
        messageApi.error("Failed to load states");
      } finally {
        setStatesLoading(false);
      }
    };

    const fetchOrgTypes = async () => {
      try {
        setOrgTypesLoading(true);
        const res = await CommonService.getOrgTypes();
        if (res && (res as any).organization_types && Array.isArray((res as any).organization_types)) {
          setOrgTypes((res as any).organization_types as any[]);
        } else if (Array.isArray(res)) {
          setOrgTypes(res as any[]);
        } else if (res && Array.isArray((res as any).data)) {
          setOrgTypes((res as any).data as any[]);
        } else {
          setOrgTypes([]);
        }
      } catch (e) {
        console.error('Failed to load org types', e);
        messageApi.error("Failed to load organization types");
      } finally {
        setOrgTypesLoading(false);
      }
    };

    fetchStates();
    fetchOrgTypes();
  }, []);

  // Auto-fill state from logged-in user after states load
  useEffect(() => {
    if (states.length > 0) {
      const userState = AuthService.getUserState();
      if (userState.state_id) {
        const match = states.find((s: any) => String(s.id) === String(userState.state_id));
        const valueToSet = match ? match.id : userState.state_id;
        console.log('Auto-filling state (first day):', valueToSet);
        form.setFieldValue('state', valueToSet);
        handleStateChange(valueToSet);
      }
    }
  }, [states]);

  const handleStateChange = async (stateId: string | number) => {
    form.setFieldValue("district", undefined);
    setDistricts([]);
    if (!stateId) return;
    try {
      setDistrictsLoading(true);
      const res = await CommonService.getDistrictsByState(String(stateId));
      // Normalize district shapes
      let list: any[] = [];
      if (Array.isArray(res)) list = res;
      else if (res && Array.isArray((res as any).data)) list = (res as any).data;
      else if (res && (res as any).data && Array.isArray((res as any).data.districts)) list = (res as any).data.districts;
      else if (res && (res as any).districts && Array.isArray((res as any).districts)) list = (res as any).districts;
      else list = [];

      const normalized = list.map((d: any) => ({ id: d.id ?? d.district_id ?? d.lgd_code ?? d.name, name: d.name ?? d.district_name ?? String(d) }));
      setDistricts(normalized as any[]);

      // Auto-fill district if user's district present
      const userDistrict = AuthService.getUserDistrict();
      if (userDistrict.district_id) {
        const match = normalized.find((d: any) => String(d.id) === String(userDistrict.district_id));
        if (match) {
          form.setFieldValue('district', match.id);
        }
      }
    } catch (e) {
      console.error('Failed to load districts', e);
      messageApi.error("Failed to load districts");
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
        day: 1,
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
      {contextHolder}
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Training Workflow /&nbsp;
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Add New 1st Day Training</span>
          </Text>
          <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
            Add New 1st Day Training Record
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Fill in the details and upload media from day one.
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
              <Form.Item label="State" name="state" rules={[{ required: true, message: "Please select state!" }]}>
                <Select
                  placeholder="Select State"
                  loading={statesLoading}
                  showSearch
                  optionFilterProp="children"
                  onChange={handleStateChange}
                >
                  {states.map((s) => (
                    <Select.Option key={s.id} value={s.id}>{s.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label="District" name="district" rules={[{ required: true, message: "Please select district!" }]}>
                <Select
                  placeholder="Select District"
                  loading={districtsLoading}
                  showSearch
                  optionFilterProp="children"
                  disabled={districts.length === 0}
                >
                  {districts.map((d) => (
                    <Select.Option key={d.id} value={d.id}>{d.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Organization" name="organization" rules={[{ required: true, message: "Please select organization!" }]}>
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
            <Col xs={24} sm={12} md={8}>
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

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Batch No."
                name="batchNumber"
                rules={[{ required: true, message: 'Please enter batch number!' }]}
              >
                <Input placeholder="Enter Batch Number" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Institute Details"
                name="instituteDetails"
                rules={[{ required: true, message: 'Please enter institute details!' }]}
              >
                <Input placeholder="Enter Institute Details" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
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



            <Col xs={24} sm={12} md={8}>
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
          </Row>

          {/* ── Upload Media ── */}
          <div style={{ marginTop: 16, border: "1px solid #e5e7eb", borderRadius: 10, overflow: "hidden" }}>
            {/* Header */}
            <div style={{ background: "#f8fafc", borderBottom: "1px solid #e5e7eb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <PictureOutlined style={{ fontSize: 16, color: "#2563eb" }} />
                <span style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>Upload Training Photos</span>
              </div>
              {fileList.length > 0 && (
                <span style={{ fontSize: 12, background: "#dbeafe", color: "#1d4ed8", padding: "2px 10px", borderRadius: 20, fontWeight: 500 }}>
                  {fileList.length} / 10 uploaded
                </span>
              )}
            </div>

            {/* Dragger zone */}
            <div style={{ padding: 16 }}>
              <Upload.Dragger
                multiple
                accept="image/*"
                fileList={fileList}
                beforeUpload={(file) => {
                  setFileList((prev) => [...prev, file]);
                  return false;
                }}
                onRemove={(file) => {
                  setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
                }}
                listType="picture-card"
                showUploadList={{ showRemoveIcon: true }}
                style={{ background: "#f0f7ff", borderColor: "#93c5fd", borderRadius: 8 }}
              >
                <div style={{ padding: "12px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 44, height: 44, background: "#dbeafe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <UploadOutlined style={{ fontSize: 20, color: "#2563eb" }} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1d4ed8" }}>Click or drag photos here</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>Supports JPG, PNG, WEBP · Max 10 files</div>
                </div>
              </Upload.Dragger>
            </div>
          </div>



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

          </div>

        </Form>
      </div>
    </div>
  );
};