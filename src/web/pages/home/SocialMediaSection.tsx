import React from "react";
import { Typography } from "antd";
import {
  XOutlined,
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
  ExportOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

const { Title, Text } = Typography;

/* ── platform data ── */
const platforms = [
  {
    key: "twitter",
    name: "X (Twitter)",
    handle: "@NDMAIndia",
    icon: <XOutlined />,
    headerBg: "#000000",
    date: "Feb 17, 2025",
    content:
      "NDMA successfully conducted Aapda Mitra training in 350+ districts across India. Over 1,00,000 community volunteers trained for disaster response.\n\n#AapdaMitra #DisasterPreparedness #NDMAIndia",
  },
  {
    key: "facebook",
    name: "Facebook",
    handle: "NDMA.in",
    icon: <FacebookFilled />,
    headerBg: "#1877F2",
    date: "February 15, 2025",
    content:
      "The National Disaster Management Authority salutes the courage of our Aapda Mitra volunteers who continue to save lives during floods and landslides. Your bravery inspires the nation!\n\nJoin the movement at aapdamitraunifiedportal.in",
  },
  {
    key: "youtube",
    name: "YouTube",
    handle: "NDMA India",
    icon: <YoutubeFilled />,
    headerBg: "#FF0000",
    date: "Feb 15, 2025",
    content:
      "Aapda Mitra Training Programme 2025-26 | Complete Documentary on Community Disaster Preparedness | NDMA Official",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    handle: "NDMA India",
    icon: <LinkedinFilled />,
    headerBg: "#0A66C2",
    date: "Feb 15, 2025",
    content:
      "NDMA is proud to announce the expansion of the Aapda Mitra scheme to 350+ districts nationwide. We are actively seeking partnerships with state disaster management authorities to strengthen community-level disaster preparedness.\n\nTogether, we build a resilient India.",
  },
];

/* ── icon circle buttons ── */
const iconCircles = [
  { key: "x",        bg: "#000000", icon: <XOutlined style={{ fontSize: 18, color: "#fff" }} /> },
  { key: "fb",       bg: "#1877F2", icon: <FacebookFilled style={{ fontSize: 18, color: "#fff" }} /> },
  { key: "yt",       bg: "#FF0000", icon: <YoutubeFilled style={{ fontSize: 18, color: "#fff" }} /> },
  { key: "linkedin", bg: "#0A66C2", icon: <LinkedinFilled style={{ fontSize: 18, color: "#fff" }} /> },
];

export const SocialMediaSection: React.FC = () => {
  return (
    <section style={{ padding: "60px 80px", backgroundColor: "#eef2f9" }}>

      {/* ── Heading ── */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <Title
          level={2}
          style={{ margin: "0 0 8px 0", fontWeight: 700, color: "#111", fontSize: 28 }}
        >
          Connect With Us
        </Title>
        <Text style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>
          Stay updated with the latest from NDMA across our official social media channels.
        </Text>
      </div>

      {/* ── Social icon circles ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 36 }}>
        {iconCircles.map((item) => (
          <a
            key={item.key}
            href="#"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              backgroundColor: item.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              flexShrink: 0,
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* ── Feed cards ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
        }}
      >
        {platforms.map((p) => (
          <div
            key={p.key}
            style={{
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Colored header */}
            <div
              style={{
                backgroundColor: p.headerBg,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 20, color: "#fff", lineHeight: 1 }}>{p.icon}</span>
                <div>
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 13,
                      display: "block",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.name}
                  </Text>
                  <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>
                    {p.handle}
                  </Text>
                </div>
              </div>
              <ExportOutlined style={{ color: "rgba(255,255,255,0.80)", fontSize: 13 }} />
            </div>

            {/* Post body */}
            <div style={{ padding: "14px 14px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              {/* User row */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: p.headerBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: 14, color: "#fff", lineHeight: 1 }}>{p.icon}</span>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Text style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>NDMA India</Text>
                    <CheckCircleFilled style={{ fontSize: 12, color: "#1677ff" }} />
                  </div>
                  <Text style={{ fontSize: 11, color: "#9ca3af" }}>{p.date}</Text>
                </div>
              </div>

              {/* Post text */}
              <Text
                style={{
                  fontSize: 13,
                  color: "#374151",
                  lineHeight: 1.65,
                  whiteSpace: "pre-line",
                }}
              >
                {p.content}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
