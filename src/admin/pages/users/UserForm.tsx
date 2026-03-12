import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  message,
  Switch,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { CommonService } from "../../../services/common.service";
import { AuthService } from "../../../services";

const { Option } = Select;

const UserForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // if edit
  const isEditMode = Boolean(id);

  const [districts, setDistricts] = useState<any[]>([]);
  const [taluks, setTaluks] = useState<string[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const privileges = [
    { value: 'YOUTH_ORG_ADMIN', label: 'YOUTH_ORG_ADMIN' },
    { value: 'SDMA_ADMIN', label: 'SDMA_ADMIN' },
    { value: 'NDMA_ADMIN', label: 'NDMA_ADMIN' },
    { value: 'SUPERADMIN', label: 'SUPERADMIN' },
    { value: 'VOLUNTEER', label: 'VOLUNTEER' },
  ];

  // Handle Cascading Dropdown
  const handleStateChange = async (value: any) => {
    form.setFieldsValue({ district: undefined });
    setDistricts([]);
    try {
      if (!value) return;
      const res = await CommonService.getDistrictsByState(String(value));
      const list = (res as any)?.districts ?? (res as any)?.data?.districts ?? (res as any)?.data ?? [];
      setDistricts(Array.isArray(list) ? list : []);
    } catch (err) {
      console.error('Failed to load districts', err);
    }
  };

  const handleDistrictChange = (value: string) => {
    if (value === "Bangalore") {
      setTaluks(["North", "South"]);
    }
    form.setFieldsValue({ taluk: undefined });
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await CommonService.getStates({ limit: 1000 });
        const payload = (res as any)?.data ?? (res as any)?.results ?? res;
        let list: any[] = [];
        if (Array.isArray(payload)) list = payload;
        else if (Array.isArray((res as any)?.data?.results)) list = (res as any).data.results;
        else if ((res as any)?.results && Array.isArray((res as any).results)) list = (res as any).results;
        else if ((res as any)?.data && Array.isArray((res as any).data)) list = (res as any).data;
        setStates(list);
      } catch (err) {
        console.error('Failed to load states', err);
      }
    }
    fetchStates();
  }, [])

  // Ensure only authenticated super-admin can access this form
  useEffect(() => {
    const token = AuthService.getTokens()?.token;
    const role = AuthService.getRole();
    if (!token) {
      message.error('Authentication required. Please login.');
      navigate('/login');
      return;
    }
    if (role !== 'SUPERADMIN' && role !== 'SUPER_ADMIN') {
      message.error('Access denied: only Super Admin can create users');
      navigate('/dashboard');
    }
  }, [navigate]);

  // If editing, load existing user data and populate the form
  useEffect(() => {
    if (!isEditMode) return;
    const fetchUser = async () => {
      try {
        const res = await CommonService.getUserById(id as string);
        const payload = (res as any)?.data ?? res;
        if (!payload) return;

        // Map API fields to form fields
        form.setFieldsValue({
          name: payload.name ?? payload.full_name ?? payload.username,
          email: payload.email,
          privilege: payload.user_role ?? payload.privilege ?? payload.role ?? undefined,
          state: payload.state_id ?? payload.state ?? payload.state_code ?? undefined,
          district: payload.district_id ?? payload.district ?? undefined,
          designation: payload.designation ?? undefined,
          aadhar: payload.aadhar ?? undefined,
          mobile: payload.mobile ?? undefined,
          is_active: typeof payload.is_active !== 'undefined' ? payload.is_active : payload.active,
          auto_revoke_previous: payload.auto_revoke_previous ?? false,
        });

        // preload districts for selected state
        if (payload.state_id || payload.state) {
          try {
            const districtsRes = await CommonService.getDistrictsByState(String(payload.state_id ?? payload.state));
            const list = (districtsRes as any)?.districts ?? (districtsRes as any)?.data ?? [];
            setDistricts(Array.isArray(list) ? list : []);
          } catch (e) {
            // ignore
          }
        }
      } catch (err: any) {
        console.error('Failed to load user for edit', err);
        // Handle forbidden explicitly
        if (err?.response?.status === 403) {
          message.error('Access denied: you do not have permission to edit this user');
          navigate('/users');
          return;
        }
        message.error('Failed to load user data');
      }
    };
    fetchUser();
  }, [isEditMode, id, form]);

  // Submit
  const onFinish = async (values: any) => {
    try {
      // Coerce state/district to numeric ids when possible, otherwise null
      const state_id = values.state ? Number(values.state) : null;
      const district_id = values.district ? Number(values.district) : null;

      // Split name into first_name and last_name for API
      const nameParts = values.name ? values.name.trim().split(' ') : ['', ''];
      const first_name = nameParts[0] || '';
      const last_name = nameParts.slice(1).join(' ') || nameParts[0] || '';

      const payload = {
        email: values.email,
        // Only send password when provided (for create or change)
        ...(values.password ? { password: values.password } : {}),
        first_name: first_name,
        last_name: last_name,
        name: values.name,
        privilege: values.privilege, // API uses 'privilege' field
        mobile: values.mobile || '',
        designation: values.designation || '',
        aadhar: values.aadhar || '',
        state_id: state_id,
        district_id: district_id,
        is_active: !!values.is_active,
        auto_revoke_previous: !!values.auto_revoke_previous,
      };

      if (isEditMode) {
        const res = await CommonService.updateUserById(id as string, payload);
        if (res && (res.success || res.status_code === 200 || res.status_code === 204)) {
          message.success('User updated successfully');
          navigate('/users');
        } else {
          message.error(res?.message || 'Failed to update user');
        }
      } else {
        console.debug('create-user payload', payload);
        const res = await AuthService.createUserWithPrivilege(payload);
        console.debug('create-user response', res);
        
        // Check for various success indicators
        const isSuccess = res && (
          res.success === true ||
          (res as any).status_code === 200 ||
          (res as any).status_code === 201 ||
          (res as any).status === 'success' ||
          (res as any).data?.id || // if user object with id is returned
          res.message?.toLowerCase().includes('success')
        );
        
        if (isSuccess) {
          message.success('User created successfully');
          navigate('/users');
        } else {
          console.error('Unexpected response format:', res);
          message.error((res as any)?.message || (res as any)?.detail || 'Failed to create user');
        }
      }
    } catch (err: any) {
      console.error('create-user error', err?.response?.data ?? err.message ?? err);
      message.error(err?.response?.data?.detail || err?.response?.data?.message || err.message || 'Create user failed');
    }
  };

  return (
    <Card
      title={isEditMode ? "Edit Users Management" : "Add Users Management"}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Invalid email" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Privilege"
              name="privilege"
              rules={[{ required: true }]}
            >
              <Select placeholder="Please select a Privilege">
                {privileges.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Please select a State"
                onChange={handleStateChange}
                showSearch
                optionFilterProp="children"
              >
                {states.map((item: any) => (
                  <Option key={item.id ?? item.state_id ?? item.code ?? item.name} value={item.id ?? item.state_id ?? item.code ?? item.name}>
                    {item.name ?? item.state_name ?? item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="District"
              name="district"
              rules={[]}
            >
              <Select
                placeholder="Please select a District"
                onChange={handleDistrictChange}
                showSearch
                optionFilterProp="children"
              >
                {districts.map((item: any) => (
                  <Option key={item.id ?? item.lgd_code ?? item.name} value={item.id ?? item.lgd_code ?? item.name}>
                    {item.name ?? item.district_name ?? item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Designation" name="designation">
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Aadhar"
              name="aadhar"
              rules={[
                {
                  validator: (_: any, value: any) => {
                    if (!value || String(value).trim() === "") return Promise.resolve();
                    return /^\d{12}$/.test(String(value))
                      ? Promise.resolve()
                      : Promise.reject(new Error("Enter valid 12 digit Aadhar"));
                  },
                },
              ]}
            >
              <Input maxLength={12} />
            </Form.Item>
          </Col>

          {/* Removed extra location fields: Taluk, Panchayat, Village, Town/Zone, Ward */}

          <Col span={24}>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                { required: true },
                { pattern: /^[0-9]{10}$/, message: "Enter valid 10 digit mobile" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { 
                  required: !isEditMode, 
                  message: "Please enter password" 
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters"
                }
              ]}
              extra={isEditMode ? "Leave empty if not changing" : "Minimum 6 characters"}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="is_active" label="Is Active" valuePropName="checked" initialValue={true}>
              <Switch />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="auto_revoke_previous" label="Auto Revoke Previous" valuePropName="checked" initialValue={true}>
              <Switch />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="start" gutter={16}>
          <Col>
            <Button onClick={() => navigate("/users")}>Back</Button>
          </Col>

          <Col>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#28a745" }}
            >
              Save
            </Button>
          </Col>

          <Col>
            <Button
              type="primary"
              onClick={() => {
                form.validateFields().then((values) => {
                  console.log(values);
                  message.success("Saved & Ready for New Entry");
                  form.resetFields();
                });
              }}
            >
              Save & Add More
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default UserForm;
