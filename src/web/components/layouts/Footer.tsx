import React from "react";
import { Row, Col, Typography, Space, Divider } from "antd";
import {
  LinkedinFilled,
  FacebookFilled,
  YoutubeFilled,
  TwitterSquareFilled,
  WhatsAppOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Text, Link } = Typography;

/* ─── helpers ─────────────────────────────────────────────── */

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ marginBottom: 20 }}>
    <Text
      style={{
        display: "block",
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.4px",
        textTransform: "uppercase",
        paddingBottom: 10,
        borderBottom: "2px solid #ffd700",
        width: "fit-content",
      }}
    >
      {children}
    </Text>
  </div>
);

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Link
    href="#"
    style={{ color: "#c8d8f0", fontSize: 13, lineHeight: "2.1", display: "flex", alignItems: "center", gap: 6 }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d8f0")}
  >
    <span style={{ color: "#ffd700", fontSize: 10 }}>›</span>
    {children}
  </Link>
);

/* ─── data ─────────────────────────────────────────────────── */

const usefulLinksCol1 = [
  "Home",
  "About Aapda Mitra",
  "Volunteer Registration",
  "Training Material",
  "Photo Gallery",
  "Video Gallery",
];

const usefulLinksCol2 = [
  "News & Updates",
  "Right To Information",
  "Grievance Redressal",
  "Feedback / Suggestion",
  "Contact Us",
  "Sitemap",
];

const socialLinks = [
  { icon: <TwitterSquareFilled />,  color: "#1DA1F2", label: "Twitter"  },
  { icon: <FacebookFilled />,       color: "#1877F2", label: "Facebook" },
  { icon: <WhatsAppOutlined />,     color: "#25D366", label: "WhatsApp" },
  { icon: <YoutubeFilled />,        color: "#FF0000", label: "YouTube"  },
  { icon: <LinkedinFilled />,       color: "#0A66C2", label: "LinkedIn" },
];

/* ─── component ────────────────────────────────────────────── */

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#0a2e5f", color: "#ffffff" }}>

      {/* ── Main footer body ── */}
      <div style={{ padding: "52px 80px 40px", maxWidth: 1400, margin: "0 auto" }}>
        <Row gutter={[48, 40]}>

          {/* ── Col 1 : Branding ── */}
          <Col xs={24} md={6}>
            {/* Logo block */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <img
                src="/src/assets/images/emblem-of-india.png"
                alt="Emblem of India"
                style={{ height: 52, objectFit: "contain" }}
              />
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.3)", paddingLeft: 10 }}>
                <img
                  src="/src/assets/images/logo.png"
                  alt="Aapda Mitra"
                  style={{ height: 36, objectFit: "contain" }}
                />
                <Text style={{ display: "block", color: "#c8d8f0", fontSize: 11, marginTop: 2 }}>
                  National Disaster Management Authority
                </Text>
              </div>
            </div>

            {/* Social icons */}
            <Space size={8} wrap style={{ marginBottom: 20 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  title={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: 16,
                    transition: "background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = s.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)")}
                >
                  {s.icon}
                </a>
              ))}
            </Space>

            {/* Meta info */}
            <div style={{ fontSize: 13, lineHeight: 2, color: "#c8d8f0" }}>
              <div>
                Last updated:{" "}
                <span style={{ color: "#ffd700", fontWeight: 600 }}>15 June, 2025</span>
              </div>
              <div>
                Visitor Count:{" "}
                <span style={{ color: "#ffd700", fontWeight: 600 }}>52,467</span>
              </div>
            </div>
          </Col>

          {/* ── Col 2 : Useful Links ── */}
          <Col xs={24} md={10}>
            <SectionTitle>Useful Links</SectionTitle>
            <Row gutter={[0, 0]}>
              <Col span={12}>
                {usefulLinksCol1.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </Col>
              <Col span={12}>
                {usefulLinksCol2.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </Col>
            </Row>
          </Col>

          {/* ── Col 3 : Contact Us ── */}
          <Col xs={24} md={8}>
            <SectionTitle>Contact Us</SectionTitle>

            {/* Address */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, color: "#c8d8f0", fontSize: 13 }}>
              <EnvironmentOutlined style={{ color: "#ffd700", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
              <span>NDMA Bhawan, A-1 Safdarjung Enclave,<br />New Delhi – 110 029</span>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", gap: 8, marginBottom: 6, color: "#c8d8f0", fontSize: 13 }}>
              <PhoneOutlined style={{ color: "#ffd700", fontSize: 15, flexShrink: 0 }} />
              <span>011-26701700</span>
            </div>

            {/* Email */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, color: "#c8d8f0", fontSize: 13 }}>
              <MailOutlined style={{ color: "#ffd700", fontSize: 15, flexShrink: 0 }} />
              <span>helpdesk@ndma.gov.in</span>
            </div>

            {/* Google Maps embed */}
            <div
              style={{
                borderRadius: 8,
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.15)",
                height: 180,
              }}
            >
              <iframe
                title="NDMA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8369476814305!2d77.18183!3d28.568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbb8db1c735%3A0x1e2e5d49c8a2c70a!2sNational%20Disaster%20Management%20Authority!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          backgroundColor: "#061e40",
          padding: "16px 80px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Row justify="space-between" align="middle" gutter={[16, 8]}>
            <Col xs={24} md={16}>
              <Text style={{ color: "#94a8c4", fontSize: 13 }}>
                Copyright © 2004–2025, Government of India | National Disaster Management Authority
              </Text>
            </Col>
            <Col xs={24} md={8} style={{ textAlign: "right" }}>
              <Space
                split={
                  <Divider
                    type="vertical"
                    style={{ borderColor: "rgba(255,255,255,0.25)", margin: "0 4px" }}
                  />
                }
              >
                {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    style={{ color: "#94a8c4", fontSize: 12 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a8c4")}
                  >
                    {item}
                  </Link>
                ))}
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};
