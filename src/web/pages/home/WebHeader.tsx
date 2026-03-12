import React, { useState } from "react";
import { Layout, Menu, Button, Space, Typography, Drawer } from "antd";
import { MenuOutlined, LoginOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const navItems = [
  { key: "home", icon: <HomeOutlined />, label: "" },
  { key: "about", label: "About Us" },
  { key: "trainings", label: "Training Material" },
  { key: "ourTeam", label: "Our Team" },
  { key: "contact", label: "Contact Us" },
  { key: "glimps", label: "Glimpse" },
];

const WebHeader: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header
        style={{
          backgroundColor: "#ffffff",
          height: 72,
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* LEFT: Logo + Name */}
        <Space size={12} align="center" style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
          <img
            src="/src/assets/images/emblemIndia.jpg"
            alt="Emblem of India"
            style={{ height: 48, objectFit: "contain" }}
          />
          <div style={{ borderLeft: "1px solid #d0d0d0", paddingLeft: 12 }}>
            <img
              src="/src/assets/images/logo.png"
              alt="Aapda Mitra Logo"
              style={{ height: 36, objectFit: "contain" }}
            />
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <Text
              style={{
                display: "block",
                color: "#ea2121",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.3px",
              }}
            >
              Aapda Mitra
            </Text>
            <Text
              style={{
                display: "block",
                color: "#666",
                fontSize: 11,
                fontWeight: 400,
              }}
            >
              National Disaster Management Authority
            </Text>
          </div>
        </Space>

        {/* CENTER: Navigation (desktop) */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottom: "none",
            backgroundColor: "transparent",
            fontSize: 14,
            fontWeight: 500,
          }}
          items={navItems.map((item) => ({
            key: item.key,
            label: (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                {item.icon}
                {item.label}
              </span>
            ),
            style: { color: "#0a2e5f" },
          }))}
          onClick={({ key }) => {
            const routes: Record<string, string> = {
              home: "/home",
              about: "/about",
              trainings: "/training-material",
              ourTeam: "/our-team",
              contact: "/contact-us",
              glimps: "/glimpse",
            };
            if (routes[key]) navigate(routes[key]);
          }}
        />

        {/* RIGHT: Login button */}
        <Space>
          <Button
            type="primary"
            icon={<LoginOutlined />}
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "#0a2e5f",
              borderColor: "#0a2e5f",
              borderRadius: 6,
              fontWeight: 500,
              height: 38,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
           Login
          </Button>
          {/* Mobile menu button */}
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 20, color: "#0a2e5f" }} />}
            style={{ display: "none" }}
            className="mobile-menu-btn"
            onClick={() => setDrawerOpen(true)}
          />
        </Space>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={260}
      >
        <Menu
          mode="vertical"
          defaultSelectedKeys={["home"]}
          style={{ borderRight: "none" }}
          items={navItems.map((item) => ({
            key: item.key,
            label: item.label,
          }))}
          onClick={() => setDrawerOpen(false)}
        />
        <div style={{ marginTop: 24, paddingLeft: 16 }}>
          <Button
            type="primary"
            block
            icon={<LoginOutlined />}
            onClick={() => {
              setDrawerOpen(false);
              navigate("/login");
            }}
            style={{
              backgroundColor: "#0a2e5f",
              borderColor: "#0a2e5f",
              borderRadius: 6,
            }}
          >
            Login
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default WebHeader;