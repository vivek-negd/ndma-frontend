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
} from "antd";
import { SaveOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CommonService, AuthService } from "../../../services";

const { Title, Text } = Typography;

export const TrainingScheduleForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    fetchStates();
    fetchOrgTypes();
  }, []);

  // Auto-fill state from logged-in user after states load
  useEffect(() => {
    if (states.length > 0) {
      const userState = AuthService.getUserState();
      if (userState.state_id) {
        console.log('Auto-filling state:', userState);
        form.setFieldValue('state', userState.state_id);
        // Fetch districts for the auto-filled state
        handleStateChange(userState.state_id);
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
        // Check if the district exists in the loaded districts
        const districtExists = districts.some((d: any) => d.id === userDistrict.district_id);
        if (districtExists) {
          form.setFieldValue('district', userDistrict.district_id);
        } else {
          console.log('District not found in loaded list:', userDistrict.district_id);
        }
      } else {
        console.log('No user district found');
      }
    }
  }, [districts]);

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
      console.log('Districts response:', res);
      
      // Handle direct array response
      if (Array.isArray(res)) {
        console.log('Direct array response');
        setDistricts(res as any);
      }
      // Handle wrapped response { data: [...] }
      else if (res.data && Array.isArray(res.data)) {
        console.log('Wrapped array response');
        setDistricts(res.data as any);
      }
      // Handle district API response { data: { districts: [...] } }
      else if (res.data && (res.data as any).districts && Array.isArray((res.data as any).districts)) {
        console.log('District API response');
        setDistricts((res.data as any).districts as any);
      }
      // Handle paginated response { data: { data: [...] } }
      else if (res.data && typeof res.data === 'object' && 'data' in res.data) {
        console.log('Paginated response');
        setDistricts((res.data as any).data as any);
      } else {
        console.log('No districts found');
        setDistricts([]);
      }
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
      console.log("Form values:", values);
      
      // Find selected organization to get its name and code
      const selectedOrg = orgTypes.find((o: any) => o.id === values.organization);
      
      // Transform form data to API payload format
      const payload = {
        state: values.state,
        district: values.district,
        organization: values.organization,
        organization_name: values.organizationName || selectedOrg?.name || 'Training Center',
        organization_type: selectedOrg?.code || 'INSTITUTE',
        number_of_volunteers: parseInt(values.numberOfVolunteers, 10),
        batch_no: values.batchNumber,
        institute_details: values.venue,
        trainers_details: values.trainers,
        start_date: values.startDate ? values.startDate.format('YYYY-MM-DD') : null,
        end_date: values.endDate ? values.endDate.format('YYYY-MM-DD') : null,
        status: 'DRAFT',
        sessions: []
      };
      
      console.log("API Payload:", payload);
      
      // Call API to create training schedule
      const response = await CommonService.createTrainingSchedule(payload);
      console.log('Create training schedule response:', response);
      
      message.success("Training schedule created successfully!");
      form.resetFields();
      // Navigate back to records page after successful creation
      setTimeout(() => {
        navigate('/admin/training/schedule/records');
      }, 1500);
    } catch (error) {
      console.error("Error creating training schedule:", error);
      message.error("Failed to save training schedule!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <Text style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>
            Training Workflow /&nbsp;
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Add New Schedule</span>
          </Text>
          <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111827" }}>
            Add New Schedule
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280" }}>
            Fill in the details to create a new training schedule.
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
        <Form form={form} layout="vertical" onFinish={handleSubmit}>

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
                    <Select.Option key={o.id} value={o.id}>{o.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Organization Name" name="organizationName" rules={[{ required: true, message: "Please enter organization name!" }]}>
                <Input placeholder="e.g. Training Center Patna" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={6}>
              <Form.Item label="No. of Volunteers" name="numberOfVolunteers" rules={[{ required: true, message: "Please enter number of volunteers!" }]}>
                <Input type="number" placeholder="Enter Number of Volunteers" min={1} />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item label="Batch No." name="batchNumber" rules={[{ required: true, message: "Please enter batch number!" }]}>
                <Input placeholder="e.g. UP-LKO-2025-001" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: "Please select start date!" }]}>
                <DatePicker style={{ width: "100%" }} placeholder="Select Start Date" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: "Please select end date!" }]}>
                <DatePicker style={{ width: "100%" }} placeholder="Select End Date" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="Venue / Institute Details" name="venue" rules={[{ required: true, message: "Please enter venue!" }]}>
                <Input placeholder="Enter Venue / Institute Details" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Trainers Details" name="trainers" rules={[{ required: true, message: "Please enter trainers details!" }]}>
                <Input.TextArea placeholder="Enter Trainers Names and Details" rows={3} />
              </Form.Item>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
            <Button onClick={() => form.resetFields()} style={{ borderRadius: 8 }}>
              Clear
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={loading}
              style={{ borderRadius: 8, background: "#1d4ed8", border: "none" }}
            >
              Save Schedule
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
};
