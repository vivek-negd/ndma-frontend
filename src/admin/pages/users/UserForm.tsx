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
} from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UserForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams(); // if edit
  const isEditMode = Boolean(id);

  const [districts, setDistricts] = useState<string[]>([]);
  const [taluks, setTaluks] = useState<string[]>([]);

  // Dummy Data
  const states = ["Karnataka", "Delhi"];
  const privileges = ["Admin", "State Admin", "District Admin"];

  // Handle Cascading Dropdown
  const handleStateChange = (value: string) => {
    if (value === "Karnataka") {
      setDistricts(["Bangalore", "Mysore"]);
    } else {
      setDistricts(["New Delhi"]);
    }
    form.setFieldsValue({ district: undefined });
  };

  const handleDistrictChange = (value: string) => {
    if (value === "Bangalore") {
      setTaluks(["North", "South"]);
    }
    form.setFieldsValue({ taluk: undefined });
  };

  // Submit
  const onFinish = (values: any) => {
    console.log("Form Data:", values);

    message.success(
      isEditMode ? "User Updated Successfully" : "User Created Successfully"
    );

    navigate("/users");
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
                  <Option key={item} value={item}>
                    {item}
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
              >
                {states.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="District"
              name="district"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Please select a District"
                onChange={handleDistrictChange}
              >
                {districts.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Taluk"
              name="taluk"
              rules={[{ required: true }]}
            >
              <Select placeholder="Please select a Taluk">
                {taluks.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Panchayat" name="panchayat">
              <Select placeholder="Please select a Panchayat" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Village" name="village">
              <Select placeholder="Please select a Village" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Town/Zone" name="town">
              <Select placeholder="Please select a Town/Zone" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Ward" name="ward">
              <Select placeholder="Please select a Ward" />
            </Form.Item>
          </Col>

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
              extra="Leave empty if not changing"
            >
              <Input.Password />
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
