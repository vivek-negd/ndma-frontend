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
import { CommonService } from "../../../services";

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
        console.log(res,"state");
        setStates(res ?? (res as any) ?? []);
      } catch {
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

  const handleStateChange = async (stateId: string) => {
    form.setFieldValue("district", undefined);
    setDistricts([]);
    try {
      setDistrictsLoading(true);
      const res = await CommonService.getDistrictsByState(stateId);
      console.log(res?.data?.districts? res : [], "districts");
      setDistricts(Array.isArray(res?.data?.districts) ? res.data.districts : []);
    } catch {
      message.error("Failed to load districts");
    } finally {
      setDistrictsLoading(false);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);
      console.log("Training Schedule Data:", values);
      message.success("Training schedule saved successfully!");
      form.resetFields();
    } catch {
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
                    <Select.Option key={o.id} value={o.id}>{o.name}</Select.Option>
                  ))}
                </Select>
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
