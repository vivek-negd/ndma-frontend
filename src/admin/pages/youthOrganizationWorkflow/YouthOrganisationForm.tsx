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
  Modal,
} from "antd";
import {
  InboxOutlined,
  UploadOutlined,
  DownloadOutlined,
  ArrowLeftOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import { useNavigate } from "react-router-dom";
// services imported below (combined import)
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
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [orgTypesLoading, setOrgTypesLoading] = useState(false);
  const [uploadResult, setUploadResult] = useState<any>(null);

  const allowedTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/zip",
  ];

  // Fetch states on component mount
  useEffect(() => {
    console.log('🔹 YouthOrganisationForm mounted');
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
      console.log('🔹 Fetching states...');
      setStatesLoading(true);
      const res = await CommonService.getStates();
      console.log('🔹 States response:', res);
      if (Array.isArray(res)) {
        console.log('🔹 States (array):', res);
        setStates(res);
      } else if (res?.data && Array.isArray(res.data)) {
        console.log('🔹 States (res.data):', res.data);
        setStates(res.data);
      }
    } catch (error) {
      console.error('🔹 ❌ Failed to fetch states:', error);
      message.error('Failed to load states');
    } finally {
      setStatesLoading(false);
    }
  };

  const handleStateChange = async (stateId: number) => {
    try {
      console.log('🔹 State changed to:', stateId);
      const res = await CommonService.getDistrictsByState(String(stateId));
      console.log('🔹 Districts response:', res);
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
      console.log('🔹 Districts loaded:', districtList.length);
      setDistricts(districtList);
      form.setFieldValue('district', undefined);
    } catch (error) {
      console.error('🔹 ❌ Failed to fetch districts:', error);
      message.error('Failed to load districts');
      setDistricts([]);
    }
  };

  const fetchOrgTypes = async () => {
    try {
      console.log('🔹 Fetching organization types...');
      const res = await CommonService.getOrgTypes();
      console.log('🔹 Org types response:', res);
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
      console.log('🔹 Org types loaded:', orgTypesList.length);
      setOrgTypes(orgTypesList);
    } catch (error) {
      console.error('🔹 ❌ Failed to fetch organization types:', error);
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
    console.log('🔹 Upload button clicked');
    if (fileList.length === 0) {
      console.log('🔹 ❌ No file selected');
      message.warning("Please select a file first.");
      return;
    }

    try {
      // Get and validate form fields
      const formValues = await form.validateFields();
      console.log('🔹 Form values:', formValues);

      // Build FormData with correct format for backend
      const formData = new FormData();
      
      // REQUIRED: File
      formData.append('file', fileList[0]);

      // Attach organization id
      if (formValues.organization) {
        formData.append('organization_id', String(formValues.organization));
      }

      // Attach state and district names
      if (formValues.state) {
        const stateName = states.find((s) => s.id === formValues.state)?.name;
        if (stateName) formData.append('state_name', stateName);
      }

      if (formValues.district) {
        const districtName = districts.find((d) => d.id === formValues.district)?.name;
        if (districtName) formData.append('district_name', districtName);
      }

      // Expected count of volunteers
      if (formValues.numberOfVolunteers !== undefined) {
        formData.append('expected_count', String(formValues.numberOfVolunteers));
      }

      // Date - format to ISO if moment object
      if (formValues.date) {
        const dt = formValues.date?.toISOString ? formValues.date.toISOString() : String(formValues.date);
        formData.append('date', dt);
      }

      setLoading(true);
      console.log('🔹 Uploading file...');

      // Use volunteers bulk upload endpoint which exists on the backend
      const response = await CommonService.uploadVolunteersBulk(formData);
      console.log('🔹 Upload response:', response);
      
      // Store the upload result for display (response from API)
      const uploadData = (response as any)?.data || response;
      console.log('🔹 Extracted uploadData:', uploadData);
      console.log('🔹 uploadData.errors type:', typeof uploadData?.errors, 'is array:', Array.isArray(uploadData?.errors));
      if (uploadData?.errors && Array.isArray(uploadData.errors)) {
        console.log('🔹 First error:', uploadData.errors[0]);
      }
      setUploadResult(uploadData);
      
      // Show success/warning message based on response
      const createdCount = (uploadData as any)?.created_count || 0;
      const errorCount = (uploadData as any)?.error_count || 0;
      const warningCount = (uploadData as any)?.warnings?.length || 0;
      console.log('🔹 Upload summary - Created:', createdCount, 'Errors:', errorCount, 'Warnings:', warningCount);
      
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
      console.log('🔹 ✅ Upload completed');
      console.error('🔹 ❌ Upload error:', error);
      console.error('🔹 Error response:', error?.response);
      setLoading(false);
      
      const errorData = error?.response?.data;
      console.error('🔹 Error data:', errorData);
      
      // Check if there are location mismatch errors
      if (errorData?.data?.mismatched_rows && Array.isArray(errorData.data.mismatched_rows)) {
        const mismatchedRows = errorData.data.mismatched_rows;
        
        // Look up state and district names for expected values
        const expectedStateName = states.find(s => s.id === errorData.data.expected_state_id)?.name || 'Unknown';
        const expectedDistrictName = districts.find(d => d.id === errorData.data.expected_district_id)?.name || 'Unknown';
        
        Modal.error({
          title: '❌ Location Mismatch Error',
          width: 700,
          content: (
            <div>
              <p style={{ marginBottom: 16 }}>
                <strong>{errorData.message}</strong>
              </p>
              
              <div style={{ marginBottom: 16 }}>
                <p style={{ marginBottom: 8 }}>
                  <strong>Your assigned location:</strong>
                </p>
                <div style={{ 
                  backgroundColor: '#f0f2f5', 
                  padding: '12px', 
                  borderRadius: '4px',
                  borderLeft: '4px solid #1890ff'
                }}>
                  {errorData.data.expected_state_id && (
                    <div><strong>State:</strong> {expectedStateName} (ID: {errorData.data.expected_state_id})</div>
                  )}
                  {errorData.data.expected_district_id && (
                    <div><strong>District:</strong> {expectedDistrictName} (ID: {errorData.data.expected_district_id})</div>
                  )}
                </div>
              </div>

              <p style={{ marginBottom: 8 }}>
                <strong>Rows with mismatches ({mismatchedRows.length}):</strong>
              </p>
              
              <Table
                dataSource={mismatchedRows.map((row: any, idx: number) => ({
                  key: idx,
                  rowNumber: row.row_number,
                  state: row.state_name || 'N/A',
                  stateId: row.state_id || 'N/A',
                  expectedStateId: row.expected_state_id,
                  expectedStateName: states.find((s: any) => s.id === row.expected_state_id)?.name || 'N/A',
                  district: row.district_name || 'N/A',
                  districtId: row.district_id || 'N/A',
                  expectedDistrictId: row.expected_district_id,
                  expectedDistrictName: districts.find((d: any) => d.id === row.expected_district_id)?.name || 'N/A',
                }))}
                columns={[
                  {
                    title: "Row",
                    dataIndex: "rowNumber",
                    key: "rowNumber",
                    width: 60,
                    render: (text) => <Tag color="red">{text}</Tag>,
                  },
                  {
                    title: "Your Data",
                    key: "yourData",
                    render: (_, record: any) => (
                      <div style={{ fontSize: '12px' }}>
                        <div><strong>State:</strong> {record.state} (ID: {record.stateId})</div>
                        <div><strong>District:</strong> {record.district} (ID: {record.districtId})</div>
                      </div>
                    ),
                  },
                  {
                    title: "Expected",
                    key: "expected",
                    render: (_, record: any) => (
                      <div style={{ fontSize: '12px' }}>
                        <div><strong>State:</strong> {record.expectedStateName} (ID: {record.expectedStateId})</div>
                        <div><strong>District:</strong> {record.expectedDistrictName} (ID: {record.expectedDistrictId})</div>
                      </div>
                    ),
                  },
                ]}
                pagination={false}
                size="small"
              />
              
              <p style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
                Your organization can only upload volunteers for your assigned state and district. Please update the Excel file to match your location.
              </p>
            </div>
          ),
        });
        message.error('Location mismatch: Check your state and district values.');
      }
      // Check if there are database/processing errors in the response
      else if (errorData?.data?.errors && Array.isArray(errorData.data.errors)) {
        const dbErrors = errorData.data.errors;
        const createdCount = errorData.data.created_count || 0;
        const totalRows = errorData.data.total_rows || 0;
        const warnings = errorData.data.warnings || [];
        
        // Helper function to parse error messages
        const parseErrorMessage = (errorStr: string): string => {
          if (!errorStr) return 'Unknown error';
          
          // Match duplicate key errors: Duplicate entry '...' for key '...'
          const duplicateMatch = errorStr.match(/Duplicate entry '([^']+)' for key '([^']+)'/);
          if (duplicateMatch) {
            const [, value, field] = duplicateMatch;
            const fieldNames: Record<string, string> = {
              'aadhar': 'Aadhar Number',
              'mis_id': 'MIS ID',
              'mobile': 'Mobile Number',
              'email': 'Email Address',
              'mybharat_id': 'MyBharat ID',
            };
            const friendlyField = fieldNames[field] || field;
            return `⚠️ Duplicate ${friendlyField}: "${value}" already exists in the database`;
          }
          
          // Match transaction errors
          if (errorStr.includes('You can\'t execute queries until the end of the \'atomic\' block')) {
            return '⚠️ Database constraint error: This usually occurs when there are duplicate values';
          }
          
          // If it's still a tuple/list format, clean it up
          if (errorStr.startsWith('(')) {
            const match = errorStr.match(/"([^"]+)"/);
            if (match) return match[1];
          }
          
          return errorStr;
        };
        
        Modal.error({
          title: '❌ Upload Failed - Errors Occurred',
          width: 800,
          content: (
            <div>
              <p style={{ marginBottom: 16 }}>
                <strong>{errorData.message}</strong>
              </p>
              
              <div style={{ marginBottom: 16, display: 'flex', gap: 16 }}>
                <div style={{ flex: 1, backgroundColor: '#f6f8fb', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #52c41a' }}>
                  <div style={{ fontSize: '12px', color: '#666' }}>Created</div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#52c41a' }}>{createdCount}</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#fff2f0', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #ff4d4f' }}>
                  <div style={{ fontSize: '12px', color: '#666' }}>Errors</div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff4d4f' }}>{errorData.data.error_count || 0}</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#fffbe6', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #faad14' }}>
                  <div style={{ fontSize: '12px', color: '#666' }}>Total Rows</div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#faad14' }}>{totalRows}</div>
                </div>
              </div>

              <p style={{ marginBottom: 8, fontWeight: 'bold' }}>
                Error Details:
              </p>
              
              <Table
                dataSource={dbErrors.map((err: any, idx: number) => ({
                  key: idx,
                  rowNumber: (err.index || 0) + 2, // +2 because header row and 0-indexed
                  misId: err.data?.mis_id || 'N/A',
                  name: err.data?.name || 'N/A',
                  error: parseErrorMessage(err.error || 'Unknown error'),
                }))}
                columns={[
                  {
                    title: "Row",
                    dataIndex: "rowNumber",
                    key: "rowNumber",
                    width: 60,
                    render: (text) => <Tag color="red">{text}</Tag>,
                  },
                  {
                    title: "MIS ID",
                    dataIndex: "misId",
                    key: "misId",
                    width: 100,
                  },
                  {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    width: 150,
                  },
                  {
                    title: "Error Message",
                    dataIndex: "error",
                    key: "error",
                    render: (text) => (
                      <div style={{ fontSize: '12px', color: '#666', maxWidth: '300px', whiteSpace: 'normal' }}>
                        {text}
                      </div>
                    ),
                  },
                ]}
                pagination={false}
                size="small"
                scroll={{ x: true }}
              />

              {warnings && warnings.length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <p style={{ marginBottom: 8, fontWeight: 'bold', color: '#faad14' }}>⚠️ Warnings:</p>
                  <Alert
                    message="Upload Warnings"
                    description={
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {warnings.map((warning: any, idx: number) => {
                          let warningText = '';
                          
                          if (typeof warning === 'string') {
                            // Parse warning text
                            if (warning.includes('Row count does not match')) {
                              warningText = '📊 The number of rows in your Excel file does not match the expected count you specified.';
                            } else if (warning.includes('SECURITY')) {
                              warningText = '🔒 SECURITY: All volunteers will be assigned to your organization\'s assigned state and district, regardless of the values in your Excel file.';
                            } else {
                              warningText = warning;
                            }
                          } else if (warning?.message) {
                            warningText = warning.message;
                          } else if (warning?.expected_count) {
                            warningText = `📊 Expected ${warning.expected_count} rows but found ${warning.actual_rows} rows`;
                          } else {
                            warningText = JSON.stringify(warning);
                          }
                          
                          return <li key={idx} style={{ fontSize: '12px' }}>{warningText}</li>;
                        })}
                      </ul>
                    }
                    type="warning"
                    showIcon
                  />
                </div>
              )}

              <p style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
                <strong>💡 Troubleshooting:</strong>
                <ul style={{ margin: '8px 0 0 20px', fontSize: '12px' }}>
                  <li><strong>Duplicate Aadhar Number:</strong> The Aadhar number already exists. Ensure each person has a unique Aadhar number.</li>
                  <li><strong>Duplicate MIS ID:</strong> The MIS ID already exists. Use a new MIS ID for each volunteer.</li>
                  <li><strong>Duplicate Mobile:</strong> The mobile number is already registered. Use a unique mobile number.</li>
                  <li><strong>Duplicate Email:</strong> The email address is already in use. Use a different email address.</li>
                  <li><strong>Database constraint error:</strong> Check for duplicate values in any unique fields (Aadhar, MIS ID, Mobile, Email).</li>
                  <li><strong>Expected count mismatch:</strong> Update the "Expected Count" field or verify your Excel row count.</li>
                </ul>
              </p>
            </div>
          ),
        });
        message.error(`Upload failed: ${dbErrors.length} error(s), ${createdCount} created.`);
      }
      // Check if there are validation errors in the response
      else if (errorData?.errors && Array.isArray(errorData.errors)) {
        const validationErrors = errorData.errors;
        let errorMessage = 'Validation errors found in your file:\n\n';
        
        validationErrors.forEach((row: any, idx: number) => {
          if (row.errors) {
            errorMessage += `Row ${row.index + 1}:\n`;
            Object.entries(row.errors).forEach(([field, msgs]: [string, any]) => {
              if (Array.isArray(msgs)) {
                errorMessage += `  • ${field}: ${msgs.join(', ')}\n`;
              }
            });
            errorMessage += '\n';
          }
        });
        
        Modal.error({
          title: '❌ Upload Validation Failed',
          width: 700,
          content: (
            <div>
              <p style={{ marginBottom: 16 }}>
                <strong>Your Excel file has validation errors:</strong>
              </p>
              <pre
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: 12,
                  borderRadius: 4,
                  maxHeight: 300,
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {errorMessage}
              </pre>
              <p style={{ marginTop: 16, color: '#666' }}>
                <strong>Required fields:</strong>
              </p>
              <ul>
                <li><code>mis_id</code> - MIS ID (required)</li>
                <li><code>name</code> - Volunteer Name (required)</li>
              </ul>
              <p style={{ marginTop: 10, color: '#999', fontSize: 12 }}>
                Download the template to see the correct format.
              </p>
            </div>
          ),
        });
        message.error('Please fix the validation errors and try again.');
      } else {
        message.error(errorData?.message || errorData?.detail || 'Upload failed!');
      }
    } finally {
      setLoading(false);
      console.log('🔹 ✅ Upload process finished');
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
          description={
            <div>
              Upload an Excel (.xls / .xlsx) file or ZIP file with volunteer data.
              <br />
              <strong>Required Fields:</strong> mis_id, name
              <br />
              Download the sample template to see the correct format.
            </div>
          }
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
                    <Select.Option key={o.id} value={o.id}>{o.code}</Select.Option>
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
            onClick={async () => {
              try {
                console.log('🔹 Download button clicked');
                message.loading({ content: 'Downloading template...', key: 'download' });
                await CommonService.downloadVolunteerTemplate();
                message.success({ 
                  content: 'Template downloaded successfully!', 
                  key: 'download', 
                  duration: 2 
                });
              } catch (error: any) {
                console.error('🔹 Download error:', error);
                message.error({ 
                  content: error.message || 'Download failed', 
                  key: 'download', 
                  duration: 5 
                });
              }
            }}
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
                      index: error.index !== undefined ? error.index + 1 : (idx + 1),
                      errors: error.errors || error,
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
                        render: (errors: any) => {
                          if (!errors || typeof errors !== 'object') {
                            return <span>{String(errors)}</span>;
                          }
                          
                          // Handle case where errors is an array
                          if (Array.isArray(errors)) {
                            return (
                              <Space direction="vertical" size={0}>
                                {errors.map((error: any, idx: number) => (
                                  <div key={idx}>{String(error)}</div>
                                ))}
                              </Space>
                            );
                          }
                          
                          // Handle case where errors is an object with field names
                          return (
                            <Space direction="vertical" size={0}>
                              {Object.entries(errors).map(([field, errorValue]: [string, any]) => {
                                let errorText = '';
                                if (Array.isArray(errorValue)) {
                                  errorText = errorValue.join(", ");
                                } else if (typeof errorValue === 'object') {
                                  errorText = String(errorValue.message || JSON.stringify(errorValue));
                                } else {
                                  errorText = String(errorValue);
                                }
                                return (
                                  <div key={field}>
                                    <strong>{field}:</strong> {errorText}
                                  </div>
                                );
                              })}
                            </Space>
                          );
                        },
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
                        {uploadResult.warnings.map((warning: any, idx: number) => {
                          const warningText = typeof warning === 'string' ? warning : (warning?.message || JSON.stringify(warning));
                          return <li key={idx}>{warningText}</li>;
                        })}
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

