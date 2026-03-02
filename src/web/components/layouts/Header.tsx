import React from "react";
import { Layout, Menu, Button, Space, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";
const { Header: AntHeader } = Layout;
const { Title } = Typography;

export const Header = () => {
  return (
    <AntHeader
      className="header"
      style={{
        background: "#ffffff",
        padding: "0 40px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* LEFT SIDE - LOGO */}
      <Space size="middle">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
          alt="emblem"
          style={{ width: 40 }}
        />
        <img
          src={logo}
          alt="logo"
          style={{ width: 42 }}
        />
        <Title
          level={4}
          style={{
            margin: 0,
            color: "#d32f2f",
            fontWeight: 600,
          }}
        >
          Aapda Mitra
        </Title>
      </Space>

      {/* CENTER MENU */}
      <Menu
        mode="horizontal"
        selectable={false}
        style={{
          flex: 1,
          marginLeft: 60,
          borderBottom: "none",
          fontWeight: 500,
        }}
        items={[
          { key: "home", icon: <HomeOutlined />, label: "" },
          { key: "about", label: "About Us" },
          { key: "training", label: "Training Material" },
          { key: "team", label: "Our Team" },
          { key: "contact", label: "Contact Us" },
          { key: "glimpse", label: "Glimpse" },
        ]}
      />

      {/* RIGHT SIDE BUTTON */}
      <Button
        type="primary"
        size="large"
        style={{
          background: "#0a2f66",
          borderRadius: 8,
          padding: "0 22px",
          fontWeight: 500,
        }}
        href="/login"
      >
        MIS Login →
      </Button>
    </AntHeader>
  );
};

