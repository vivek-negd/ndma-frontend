import React, { useState, useEffect } from "react";
import { Layout, Avatar, Badge, Space, Typography, Button, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { BellOutlined, UserOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../services";
import emblemIndia from "../../../assets/images/emblem-of-india.png";
import logo from "../../../assets/images/logo.png";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader: React.FC = () => {
  const [mode, setMode] = useState<"UAMS" | "YAMS">("YAMS");
  const navigate = useNavigate();

  const user = AuthService.getUser();

  const handleLogout = () => {
    AuthService.clearTokens();
    AuthService.clearRole();
    AuthService.clearUser();
    navigate("/auth");
  };

  const profileMenuItems: MenuProps["items"] = [
    {
      key: "profile",
      icon: <ProfileOutlined />,
      label: "My Profile",
      onClick: () => navigate("/admin/profile"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => navigate("/admin/settings"),
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout,
    },
  ];

  // Inject custom CSS to override Ant Design header styles
  useEffect(() => {
    const styleId = 'header-custom-styles';
    
    // Check if style already exists
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .ant-layout-header {
          background-color: #0a2e5f !important;
          background: #0a2e5f !important;
        }
        .app-header {
          background-color: #0a2e5f !important;
          background: #0a2e5f !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      // Cleanup style on component unmount
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <Header
      className="app-header"
      style={{
        backgroundColor: "#0a2e5f",
        height: 64,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        borderBottom: "1px solid #1a3d7a",
      }}
    >
      {/* ── LEFT: Logos + Brand ── */}
      <Space size={12} align="center">
        <img src={emblemIndia} alt="Emblem" style={{ height: 40, objectFit: "contain", marginTop: 24 }} />
        <div style={{ width: 1, height: 36, backgroundColor: "rgba(255,255,255,0.3)" }} />
        <img src={logo} alt="Aapda Mitra" style={{ height: 40, objectFit: "contain", marginTop: 24 }} />
        <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, letterSpacing: "0.5px" }}>
          Aapda Mitra
        </Text>
      </Space>

      {/* ── CENTER: Title + FY badge ── */}
      <Space size={16} align="center">
        <Text style={{ color: "#ffffff", fontSize: 18, fontWeight: 600, letterSpacing: "0.3px" }}>
          National Level Statistics — UAMS
        </Text>
        <div
          style={{
            backgroundColor: "#1a3d7a",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 10,
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 600,
            padding: "4px 14px",
            letterSpacing: "0.4px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            // width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          FY 2024–25
        </div>
      </Space>

      {/* ── RIGHT: Mode toggle + Bell + Profile ── */}
      <Space size={16} align="center">

        {/* UAMS / YAMS toggle */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#1a3d7a",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          {(["UAMS", "YAMS"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              style={{
                padding: "8px 18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.3px",
                transition: "background 0.2s, color 0.2s",
                backgroundColor: mode === m ? "#2e5490" : "transparent",
                color: mode === m ? "#ffffff" : "rgba(255,255,255,0.7)",
                borderRadius: mode === m ? 6 : 0,
              }}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Bell notification */}
        <Badge dot color="#facc15" offset={[-4, 4]}>
          <Button
            type="text"
            icon={<BellOutlined style={{ fontSize: 18, color: "#ffffff" }} />}
            style={{
              backgroundColor: "#1a3d7a",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            }}
          />
        </Badge>

        {/* Profile card with dropdown */}
        <Dropdown menu={{ items: profileMenuItems }} trigger={["click"]} placement="bottomRight">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "#1a3d7a",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 10,
              padding: "6px 14px 6px 8px",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2e5490";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1a3d7a";
            }}
          >
            <Avatar
              src="/src/assets/images/profile.jpg"
              size={36}
              style={{ flexShrink: 0, border: "2px solid rgba(255,255,255,0.3)" }}
              icon={<UserOutlined />}
            />
            <div style={{ lineHeight: 1.4 }}>
              <Text style={{ color: "#ffffff", fontWeight: 600, fontSize: 14, display: "block" }}>
                {user?.name ?? "Shivani Kushwaha"}
              </Text>
              <Text style={{ color: "#4ade80", fontSize: 12, fontWeight: 500 }}>
                {user?.role_display ?? "SDMA Officer"}
              </Text>
            </div>
          </div>
        </Dropdown>

      </Space>
    </Header>
  );
};

export default AppHeader;
