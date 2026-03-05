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
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
  UploadOutlined,
  PictureOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CommonService } from "../../../services";
const { Title, Text } = Typography;

export const FirstDayTrainingForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
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
        console.log(res, "state");
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
        if (res.status_code === 200) {
          console.log(res, "org types");
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
      console.log(res?.data?.districts ? res : [], "districts");
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
      const formData = new FormData();

      // Append form fields
      Object.entries(values).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as string);
        }
      });

      // Append photos
      fileList.forEach((file) => {
        formData.append("photos", file);
      });

      console.log("First Day Training Payload:");
      formData.forEach((val, key) => console.log(key, val));

      message.success("First day training saved successfully!");
      form.resetFields();
      setFileList([]);
    } catch (error) {
      message.error("Failed to save training data!");
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
                    <Select.Option key={o.id} value={o.id}>{o.name}</Select.Option>
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