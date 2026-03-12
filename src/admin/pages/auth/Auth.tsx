import { Card, Form, Input, Button, Typography, message, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthService } from "../../../services/auth.service";

const { Title } = Typography;

export const Auth = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: any) => {
    console.log("🔐 Login Attempt Started");
    console.log("📝 Login Form Values:", values);
    
    setLoading(true);
    setError(null);
    
    try {
      // Call the actual AuthService
      const response = await AuthService.login({
        email: values.username, // Form uses 'username' field but API expects 'email'
        password: values.password,
      });
      
      console.log("✅ Login Successful:", response);
      message.success("Login successful!");
      
      // Store tokens if available
      if (response.access) {
        AuthService.setTokens(response.access, response.refresh || "");
      }
      
      // Store role if available
      if (response.user?.user_role) {
        AuthService.setRole(response.user.user_role);
      }
      
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err: any) {
      console.error("❌ Login Error:", err);
      
      const errorMessage = 
        err?.response?.data?.message ||
        err?.message ||
        "Network error: Could not connect to the backend API at http://127.0.0.1:8000/api/v1";
      
      setError(errorMessage);
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Card style={{ width: 400, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
          Welcome Back
        </Title>
        
        {error && (
          <Alert
            type="error"
            message="Login Failed"
            description={error}
            closable
            onClose={() => setError(null)}
            style={{ marginBottom: 16 }}
          />
        )}
        
        <Form form={form} onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email address"
              size="large"
              disabled={loading}
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large"
              loading={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
