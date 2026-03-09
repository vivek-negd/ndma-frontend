import React, { useState, useEffect } from "react";
import {
  Upload,
  Button,
  Card,
  Typography,
  Space,
  message,
  Divider,
  Alert,
  Progress,
  Form,
  Input,
  Select,
  DatePicker,
  Row,
  Col,
  Spin,
  Table,
  Tag,
} from "antd";
import {
  InboxOutlined,
  UploadOutlined,
  DownloadOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import { useNavigate } from "react-router-dom";
import { CommonService } from "../../../services";
import Paragraph from "antd/es/typography/Paragraph";
import { CommonService, AuthService } from "../../../services";

const { Title, Text } = Typography;
const { Dragger } = Upload;

export const YouthOrganisationForm: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [states, setStates] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [orgTypes, setOrgTypes] = useState<any[]>([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [uploadResult, setUploadResult] = useState<any>(null);

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

  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/zip",
  ];

  // Fetch states on component mount
  useEffect(() => {
    fetchStates();
    fetchOrgTypes();
  }, []);

  // Auto-fill state from logged-in user after states load
  useEffect(() => {
    if (states.length > 0) {
      const userState = AuthService.getUserState();
      if (userState.state_id) {
        form.setFieldValue('state', userState.state_id);
        handleStateChange(userState.state_id);
      }
    }
  }, [states]);

  // Auto-fill district after districts load
  useEffect(() => {
    if (districts.length > 0) {
      const userDistrict = AuthService.getUserDistrict();
      if (userDistrict.district_id) {
        const districtExists = districts.some(d => d.id === userDistrict.district_id);
        if (districtExists) {
          form.setFieldValue('district', userDistrict.district_id);
        }
      }
    }
  }, [districts]);

  const fetchStates = async () => {
    try {
      setStatesLoading(true);
      const res = await CommonService.getStates();
      if (Array.isArray(res)) {
        setStates(res);
      } else if (res?.data && Array.isArray(res.data)) {
        setStates(res.data);
      }
    } catch (error) {
      console.error('Failed to fetch states:', error);
      message.error('Failed to load states');
    } finally {
      setStatesLoading(false);
    }
  };

  const handleStateChange = async (stateId: number) => {
    try {
      const res = await CommonService.getDistrictsByState(String(stateId));
      let districtList = [];
      if (res && typeof res === 'object') {
        if (Array.isArray(res)) {
          districtList = res;
        } else if ((res as any)?.data?.districts && Array.isArray((res as any).data.districts)) {
          districtList = (res as any).data.districts;
        } else if ((res as any)?.districts && Array.isArray((res as any).districts)) {
          districtList = (res as any).districts;
        } else if ((res as any)?.data && Array.isArray((res as any).data)) {
          districtList = (res as any).data;
        }
      }
      setDistricts(districtList);
      form.setFieldValue('district', undefined);
    } catch (error) {
      console.error('Failed to fetch districts:', error);
      message.error('Failed to load districts');
      setDistricts([]);
    }
  };

  const fetchOrgTypes = async () => {
    try {
      const res = await CommonService.getOrgTypes();
      let orgTypesList = [];
      if (res && typeof res === 'object') {
        if (Array.isArray(res)) {
          orgTypesList = res;
        } else if ((res as any)?.organization_types && Array.isArray((res as any).organization_types)) {
          orgTypesList = (res as any).organization_types;
        } else if ((res as any)?.data?.organization_types && Array.isArray((res as any).data.organization_types)) {
          orgTypesList = (res as any).data.organization_types;
        } else if ((res as any)?.data && Array.isArray((res as any).data)) {
          orgTypesList = (res as any).data;
        }
      }
      setOrgTypes(orgTypesList);
    } catch (error) {
      console.error('Failed to fetch organization types:', error);
      message.error('Failed to load organization types');
    }
  };

  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    fileList,
    beforeUpload: (file) => {
      if (!allowedTypes.includes(file.type)) {
        message.error("Only XLS, XLSX or ZIP files are allowed!");
        return Upload.LIST_IGNORE;
      }

      setFileList([file]);
      return false; // prevent auto upload
    },
    onRemove: () => setFileList([]),
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.warning("Please select a file first.");
      return;
    }

    try {
      // Get and validate form fields
      const formValues = await form.validateFields();
      console.log('Form values:', formValues);

      // Build FormData with correct format for backend
      const formData = new FormData();
      
      // REQUIRED: File
      formData.append('file', fileList[0]);
      
      // Get organization name/id
      if (formValues.organization) {
        formData.append('organization_id', formValues.organization);
      }
      
      // Get state name from selected state ID
      if (formValues.state) {
        const stateName = states.find(s => s.id === formValues.state)?.name;
        if (stateName) {
          formData.append('state_name', stateName);
        }
      }
      
      // Get district name from selected district ID
      if (formValues.district) {
        const districtName = districts.find(d => d.id === formValues.district)?.name;
        if (districtName) {
          formData.append('district_name', districtName);
        }
      }

      setLoading(true);

      const response = await CommonService.uploadVolunteersBulk(formData);
      
      // Store the upload result for display (response from API)
      const uploadData = (response as any)?.data || response;
      setUploadResult(uploadData);
      
      // Show success/warning message based on response
      const createdCount = (uploadData as any)?.created_count || 0;
      const errorCount = (uploadData as any)?.error_count || 0;
      const warningCount = (uploadData as any)?.warnings?.length || 0;
      
      if (errorCount === 0 && warningCount === 0) {
        message.success(`Successfully created ${createdCount} youth organization(s)!`);
      } else if (errorCount > 0) {
        message.warning(`${createdCount} created, ${errorCount} error(s) found. See details below.`);
      } else if (warningCount > 0) {
        message.info(`${createdCount} created with ${warningCount} warning(s).`);
      }
      
      setFileList([]);
      setUploadProgress(0);
      form.resetFields();
      
      // Re-apply auto-fill after form reset
      const userState = AuthService.getUserState();
      if (userState.state_id) {
        form.setFieldValue('state', userState.state_id);
        await handleStateChange(userState.state_id);
        // Auto-fill district after state
        const userDistrict = AuthService.getUserDistrict();
        if (userDistrict.district_id) {
          setTimeout(() => {
            form.setFieldValue('district', userDistrict.district_id);
          }, 100);
        }
      }
    } catch (error: any) {
      console.error('Upload error:', error);
      console.error('Error response:', error?.response);
      console.error('Error status:', error?.response?.status);
      console.error('Error data:', error?.response?.data);
      message.error(error?.response?.data?.message || "Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ borderRadius: 8 }}
        >
          Back
        </Button>
      </div>

    <Card
      style={{ maxWidth: "100%", marginBottom: 16 }}
      bordered
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={4} style={{ margin: 0 }}>Add Youth Org Record</Title>
        <Paragraph>
          Fill in the details to register a new youth organisation activity.
        </Paragraph>

        <Alert
          message="Upload Instructions"
          description="Upload an Excel (.xls / .xlsx) file or ZIP file containing volunteer data with the required fields."
          type="info"
          showIcon
        />

        <Form
          form={form}
          layout="vertical"
          style={{ marginBottom: 0 }}
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
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'Please select district!' }]}
              >
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
              <Form.Item
                label="Organization"
                name="organization"
                rules={[{ required: true, message: 'Please select organization!' }]}
              >
                <Select
                  placeholder="Select Organization"
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

            {/* <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="Upload Option"
                name="uploadOption"
                rules={[{ required: true, message: 'Please select upload option!' }]}
              >
                <Select placeholder="Select Upload Option">
                  <Select.Option value="create">Create New Volunteers</Select.Option>
                  <Select.Option value="update">Update Existing Volunteers</Select.Option>
                  <Select.Option value="replace">Replace All Volunteers</Select.Option>
                </Select>
              </Form.Item>
            </Col> */}
          </Row>
        </Form>

        <Divider />

        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ fontSize: 40 }} />
          </p>
          <Text strong>
            Click or Drag XLS / XLSX / ZIP file to upload
          </Text>
          <br />
          <Text type="secondary">
            Only one file allowed. Max size depends on server limit.
          </Text>
        </Dragger>

        {uploadProgress > 0 && (
          <Progress percent={uploadProgress} />
        )}

        <Divider />

        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Button
            icon={<DownloadOutlined />}
            type="default"
          >
            Download Sample Template
          </Button>

          <Button
            type="primary"
            icon={<UploadOutlined />}
            onClick={handleUpload}
            loading={loading}
            disabled={fileList.length === 0}
          >
            Upload File
          </Button>
        </Space>

        {/* Upload Result Summary */}
        {uploadResult && (
          <>
            <Divider />
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div style={{ display: "flex", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircleOutlined style={{ fontSize: 18, color: "#52c41a" }} />
                  <span>
                    <strong>Created:</strong> {uploadResult.created_count || 0}
                  </span>
                </div>
                {uploadResult.error_count > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <ExclamationCircleOutlined style={{ fontSize: 18, color: "#ff4d4f" }} />
                    <span>
                      <strong>Errors:</strong> {uploadResult.error_count}
                    </span>
                  </div>
                )}
                {uploadResult.warnings && uploadResult.warnings.length > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <ExclamationCircleOutlined style={{ fontSize: 18, color: "#faad14" }} />
                    <span>
                      <strong>Warnings:</strong> {uploadResult.warnings.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Errors Table */}
              {uploadResult.errors && uploadResult.errors.length > 0 && (
                <div>
                  <Typography.Title level={5}>Errors</Typography.Title>
                  <Table
                    dataSource={uploadResult.errors.map((error: any, idx: number) => ({
                      key: idx,
                      index: error.index + 1,
                      errors: error.errors,
                    }))}
                    columns={[
                      {
                        title: "Row",
                        dataIndex: "index",
                        key: "index",
                        width: 80,
                        render: (text) => <Tag color="red">{text}</Tag>,
                      },
                      {
                        title: "Error Details",
                        dataIndex: "errors",
                        key: "errors",
                        render: (errors: any) => (
                          <Space direction="vertical" size={0}>
                            {Object.entries(errors).map(([field, errorArray]: [string, any]) => (
                              <div key={field}>
                                <strong>{field}:</strong> {errorArray.join(", ")}
                              </div>
                            ))}
                          </Space>
                        ),
                      },
                    ]}
                    pagination={false}
                    size="small"
                  />
                </div>
              )}

              {/* Warnings Table */}
              {uploadResult.warnings && uploadResult.warnings.length > 0 && (
                <div>
                  <Typography.Title level={5}>Warnings</Typography.Title>
                  <Alert
                    message="Upload Warnings"
                    description={
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {uploadResult.warnings.map((warning: any, idx: number) => (
                          <li key={idx}>{warning}</li>
                        ))}
                      </ul>
                    }
                    type="warning"
                    showIcon
                  />
                </div>
              )}
            </Space>
          </>
        )}
      </Space>
    </Card>
    </>
  );
};

