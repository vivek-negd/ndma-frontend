import React, { useState } from "react";
import { Typography, Form, Input, Button, message } from "antd";
import {
  ReloadOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import emblemIndia from "../../../assets/images/emblem-of-india.png";
import loginBg from "../../../assets/images/login2.jpeg";
import { AuthService } from "../../../services";
import { ROLE_DEFAULT_ROUTES, UserRole } from "../../../utils/rbac";

const { Title, Text } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
  captcha: string;
}

/* ── Styled CAPTCHA display ── */
const CAPTCHA_COLORS = ["#e11d48", "#1d4ed8", "#0ea5e9", "#7c3aed", "#059669", "#d97706"];

const CaptchaDisplay: React.FC<{ text: string }> = ({ text }) => {
  const chars = text.replace(/\s/g, "").split("");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      {chars.map((ch, i) => (
        <span
          key={i}
          style={{
            fontSize: i % 2 === 0 ? 20 : 17,
            fontWeight: 800,
            fontFamily: "'Courier New', monospace",
            color: CAPTCHA_COLORS[i % CAPTCHA_COLORS.length],
            transform: `rotate(${(i % 3 - 1) * 9}deg)`,
            display: "inline-block",
            textDecoration: i % 3 === 1 ? "line-through" : "none",
            userSelect: "none",
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
};

/* ── Main component ── */
const LoginPage: React.FC = () => {
  const [form] = Form.useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState("XSZ3\$v");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789$@#";
    let result = "";
    for (let i = 0; i < 6; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
    setCaptcha(result);
  };

  const handleSubmit = async (values: LoginFormValues) => {
    if (values.captcha.toUpperCase() !== captcha.replace(/\s/g, "").toUpperCase()) {
      message.error("Invalid captcha. Please try again.");
      generateCaptcha();
      form.setFieldsValue({ captcha: "" });
      return;
    }
    setLoading(true);
    try {
      const response= {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzcyMTY5NjgyLCJpYXQiOjE3NzIxNjc4ODIsImp0aSI6IjI2YTlhNmJhNDAzZjRiZjY5ZTRmNmYxYzY1OTJhMjhkIiwidXNlcl9pZCI6Mn0.a7yEzTNUmMII8o93lwid4efuzuZoakCpQ6fqyh63vrc",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc3MjI1NDI4MiwiaWF0IjoxNzcyMTY3ODgyLCJqdGkiOiIyYTQ5ZTJjNWE2ODA0ZTcyOGVkMWFkZDBiMjFmODA4ZCIsInVzZXJfaWQiOjJ9.UbjvjWA6SaRd_i-bx_aIBHWiiyIy1Y01xFFzS9DzbUE",
    "user_role": "NATIONAL_ADMIN",
    "email_address": "national@ndma.com"
}
      AuthService.setTokens(response.access_token, response.refresh_token);
      AuthService.setRole(response.user_role);
      const defaultRoute = ROLE_DEFAULT_ROUTES[response.user_role as UserRole] ?? '/dashboard';
      navigate(defaultRoute);
      setLoading(false);
      // const response = await AuthService.login({ email: values.email, password: values.password });
      // if (response.success) {
      //   message.success("Login successful!");
      //   AuthService.setTokens(response.data.token, response.data.refreshToken);
      //   navigate("/admin/dashboard");
      // } else {
      //   message.error(response.message || "Login failed");
      //   generateCaptcha();
      //   form.setFieldsValue({ captcha: "" });
      // }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "Login failed. Please try again.";
      message.error(errorMessage);
      generateCaptcha();
      form.setFieldsValue({ captcha: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Full-screen background */
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Blurred background layer */}
      <div
        style={{
          position: "absolute",
          inset: -10,
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0.5px)",
          transform: "scale(1.05)",
        }}
      />
      {/* Dark overlay to improve card contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(86, 72, 137, 0.25)",
        }}
      />
      {/* Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 820,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
          display: "flex",
        }}
      >
        {/* ── LEFT PANEL ── */}
        <div
          style={{
            width: "38%",
            flexShrink: 0,
            background: "linear-gradient(160deg, #475a89 0%, #656a77 100%)",
            padding: "18px 24px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            boxSizing: "border-box",
          }}
        >
          {/* Logos */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={emblemIndia} alt="Emblem" style={{ height: 50, objectFit: "contain", filter: "brightness(1.1)" }} />
            <div style={{ width: 1, height: 44, backgroundColor: "rgba(255,255,255,0.35)" }} />
            <img src={logo} alt="Aapda Mitra" style={{ height: 54, objectFit: "contain" }} />
          </div>

          {/* Text */}
          <div style={{ textAlign: "center" }}>
            <Text style={{ color: "rgba(255,255,255,0.80)", fontSize: 13, display: "block", marginBottom: 10 }}>
              Welcome to the
            </Text>
            <Title
              level={3}
              style={{ margin: "0 0 6px", fontWeight: 800, lineHeight: 1.25, color: "#fff" }}
            >
              <span style={{ color: "#ff4d4f" }}>Aapda Mitra</span>
              <br />
              <span style={{ color: "#ffffff" }}>Management</span>
              <br />
              <span style={{ color: "#ffffff" }}>Information System</span>
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, display: "block", lineHeight: 1.6, marginTop: 12 }}>
              National Disaster Management Authority
              <br />
              Ministry of Home Affairs, Govt. of India
            </Text>
          </div>

          {/* Bottom decorative bar */}
          <div
            style={{
              width: 56,
              height: 3,
              borderRadius: 4,
              background: "linear-gradient(90deg, #4f6ef7, #60a5fa)",
              marginTop: 8,
            }}
          />
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "16px 32px 16px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Heading */}
          <Title level={3} style={{ margin: "0 0 4px", fontWeight: 800, color: "#111" }}>
            Welcome Back!
          </Title>
          <Text style={{ fontSize: 14, color: "#666", display: "block", marginBottom: 16 }}>
            Login to the{" "}
            <span style={{ color: "#e11d48", fontWeight: 700 }}>Aapda Mitra</span> MIS
          </Text>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            style={{ marginTop: 4 }}
          >
            {/* Email */}
            <Form.Item
              label={<span style={{ fontWeight: 600, color: "#333" }}>Email Address</span>}
              name="email"
              style={{ marginBottom: 10 }}
              rules={[
                { required: true, message: "Please enter your email address" },
                { type: "email", message: "Please enter a valid email address" },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ color: "#aaa" }} />}
                placeholder="e.g., xyz@digitalindia.gov.in"
                size="large"
                style={{ borderRadius: 8 }}
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={<span style={{ fontWeight: 600, color: "#333" }}>Password</span>}
              name="password"
              style={{ marginBottom: 10 }}
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password
                prefix={<LockOutlined style={{ color: "#aaa" }} />}
                placeholder="Enter your password"
                size="large"
                style={{ borderRadius: 8 }}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            {/* Security Verification */}
            <Form.Item
              label={<span style={{ fontWeight: 600, color: "#333" }}>Security Verification</span>}
              style={{ marginBottom: 10 }}
            >
              {/* CAPTCHA display row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "7px 14px",
                  borderRadius: 8,
                  border: "1px solid #d9d9d9",
                  background: "linear-gradient(135deg, #f0f4ff, #e8f0fe)",
                  marginBottom: 8,
                }}
              >
                <CaptchaDisplay text={captcha} />
                <ReloadOutlined
                  style={{ color: "#4f6ef7", fontSize: 16, cursor: "pointer" }}
                  onClick={generateCaptcha}
                />
              </div>

              {/* CAPTCHA input */}
              <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: "Please enter the characters above" }]}
              >
                <Input
                  prefix={<SafetyOutlined style={{ color: "#aaa" }} />}
                  placeholder="Enter the characters above"
                  size="large"
                  style={{ borderRadius: 8 }}
                />
              </Form.Item>
            </Form.Item>

            {/* Forgot / Sign up row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                fontSize: 13,
              }}
            >
              <Button
                type="link"
                style={{ padding: 0, fontSize: 13, color: "#1677ff" }}
                onClick={() => message.info("Forgot password functionality coming soon!")}
              >
                Forgot Password?
              </Button>
              <Text style={{ fontSize: 13, color: "#888" }}>
                Don't have an account?
              </Text>
            </div>

            {/* Login button */}
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
              style={{
                background: "linear-gradient(90deg, #1677ff 0%, #4f8ef7 100%)",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                height: 46,
                letterSpacing: "0.3px",
              }}
            >
              {loading ? "Logging in..." : "Login  →"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
