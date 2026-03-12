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
        // Normalize different API shapes: array, { data: [...] }, { data: { data: [...] } }
        let list: any[] = [];
        if (Array.isArray(res)) list = res;
        else if (res && Array.isArray((res as any).data)) list = (res as any).data;
        else if (res && (res as any).data && Array.isArray((res as any).data.data)) list = (res as any).data.data;
        else if (res && (res as any).data && Array.isArray((res as any).data.states)) list = (res as any).data.states;
        else list = [];

        // Ensure each state has { id, name }
        const normalized = list.map((s: any) => ({ id: s.id ?? s.state_id ?? s.code ?? s.name, name: s.name ?? s.state_name ?? String(s) }));
        setStates(normalized);
      } catch (e) {
        console.error('Failed to load states', e);
        message.error("Failed to load states");
      } finally {
        setStatesLoading(false);
      }
    };

    const fetchOrgTypes = async () => {
      try {
        setOrgTypesLoading(true);
        const res = await CommonService.getOrgTypes();
        if(res.status_code === 200){
          console.log(res,"org types");
          setOrgTypes((res.organization_types as any) ?? []);
        }
      } catch {
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
      const res = await CommonService.getDistrictsByState(stateId);
      // Normalize response shapes similar to states
      let list: any[] = [];
      if (Array.isArray(res)) list = res;
      else if (res && Array.isArray((res as any).data)) list = (res as any).data;
      else if (res && (res as any).data && Array.isArray((res as any).data.districts)) list = (res as any).data.districts;
      else if (res && (res as any).districts && Array.isArray((res as any).districts)) list = (res as any).districts;
      else list = [];

      const normalized = list.map((d: any) => ({ id: d.id ?? d.district_id ?? d.lgd_code ?? d.name, name: d.name ?? d.district_name ?? String(d) }));
      setDistricts(normalized);
    } catch (err) {
      console.error('Failed to load districts', err);
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
      // Validate dates
      const start = values.startDate;
      const end = values.endDate;
      if (!start || !end) {
        message.error('Start date and end date are required');
        setLoading(false);
        return;
      }

      // Ensure schedule covers at least 7 days (Day 1..Day 7)
      const daysRange = end.diff(start, 'days');
      if (daysRange < 6) {
        message.error('Schedule must span at least 7 days (start and end inclusive)');
        setLoading(false);
        return;
      }

      // Build 7 sessions starting from start date
      const sessions: any[] = [];
      for (let i = 0; i < 7; i++) {
        const sessionDate = start.clone().add(i, 'day').format('YYYY-MM-DD');
        sessions.push({
          day_label: `Day ${i + 1}`,
          date: sessionDate,
          upload_option: 'mandatory',
          notes: `Day ${i + 1}`
        });
      }

      // Transform form data to API payload format
      const payload = {
        state: values.state,
        district: values.district,
        organization: values.organization,
        organization_name: selectedOrg?.name || 'Training Center',
        organization_type: selectedOrg?.code || 'INSTITUTE',
        number_of_volunteers: parseInt(values.numberOfVolunteers, 10),
        batch_no: values.batchNumber,
        institute_details: values.venue,
        trainers_details: values.trainers,
        start_date: start.format('YYYY-MM-DD'),
        end_date: end.format('YYYY-MM-DD'),
        status: 'DRAFT',
        sessions
      };
      
      console.log("API Payload:", payload);
      
      // Call API to create training schedule (with 7 sessions)
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
                  {states?.map((s) => (
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
                  {districts?.map((d) => (
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

            {/* Organization Name removed from UI per request */}
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
