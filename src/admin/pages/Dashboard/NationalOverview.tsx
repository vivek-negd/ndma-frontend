import React, { useState } from "react";
import { Typography } from "antd";
import { TeamOutlined, TrophyOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const categories = [
  {
    key: "volunteers",
    title: "VOLUNTEERS",
    icon: <TeamOutlined style={{ fontSize: 16 }} />,
    color: "#1a7a4a",
    lightBg: "#f0fff5",
    hoverBg: "#1a7a4a",
    borderColor: "#bbf7d0",
    items: [
      { label: "Trained Volunteers",           value: "1,00,000" },
      { label: "Registered Volunteers (MIS)",  value: "96,891"  },
      { label: "Balance Volunteers",           value: "3,109"   },
    ],
  },
  {
    key: "finance",
    title: "FINANCE",
    icon: <span style={{ fontSize: 16, fontWeight: 700 }}>₹</span>,
    color: "#1a56db",
    lightBg: "#eff6ff",
    hoverBg: "#1a56db",
    borderColor: "#bfdbfe",
    items: [
      { label: "Allocated to States (Cr.)",  value: "365" },
      { label: "Total Released (Cr.)",        value: "365" },
      { label: "Remaining Balance (Cr.)",     value: "0"   },
    ],
  },
  {
    key: "achievements",
    title: "ACHIEVEMENTS",
    icon: <TrophyOutlined style={{ fontSize: 16 }} />,
    color: "#8625b3",
    lightBg: "#f5f3ff",
    hoverBg: "#8625b3",
    borderColor: "#ddd6fe",
    items: [
      { label: "Total Life Rescued",                      value: "78,117" },
      { label: "Life Saved",                              value: "129"    },
      { label: "Volunteers Involved in 142 Incidents",    value: "3,606"  },
    ],
  },
  {
    key: "resources",
    title: "RESOURCES",
    icon: <SafetyCertificateOutlined style={{ fontSize: 16 }} />,
    color: "#dc2626",
    lightBg: "#fff5f5",
    hoverBg: "#dc2626",
    borderColor: "#fecaca",
    items: [
      { label: "Insurance Issued – Current FY", value: "25,242" },
      { label: "ERK Kit Issued",                value: "93,700" },
      { label: "EERR Kit Issued",               value: "268"    },
    ],
  },
];

const NationalOverview: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div style={{ padding: "4px 0 24px" }}>

      {/* ── Section heading ── */}
      <div style={{ marginBottom: 24 }}>
        <Title
          level={4}
          style={{
            margin: "0 0 4px",
            fontWeight: 800,
            color: "#111",
            fontSize: 18,
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          National Overview
        </Title>
        <Text style={{ color: "#6b7280", fontSize: 14 }}>
          Key performance indicators across all programme verticals
        </Text>
      </div>

      {/* ── 4-column grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {categories.map((cat) => (
          <div key={cat.key}>

            {/* Column header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
                color: cat.color,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.6px",
              }}
            >
              {cat.icon}
              {cat.title}
            </div>

            {/* Stat cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cat.items.map((item, idx) => {
                const cardKey = `${cat.key}-${idx}`;
                const hovered = hoveredCard === cardKey;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCard(cardKey)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      backgroundColor: hovered ? cat.hoverBg : cat.lightBg,
                      border: `1px solid ${hovered ? cat.hoverBg : cat.borderColor}`,
                      borderRadius: 12,
                      padding: "14px 16px 12px",
                      cursor: "pointer",
                      transition: "background-color 0.25s ease, border-color 0.25s ease",
                    }}
                  >
                    {/* Label */}
                    <Text
                      style={{
                        display: "block",
                        fontSize: 11,
                        fontWeight: 500,
                        color: hovered ? "rgba(255,255,255,0.85)" : cat.color,
                        marginBottom: 4,
                        lineHeight: 1.4,
                        transition: "color 0.25s ease",
                      }}
                    >
                      {item.label}
                    </Text>

                    {/* Value */}
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: hovered ? "#ffffff" : cat.color,
                        lineHeight: 1.2,
                        marginBottom: 10,
                        transition: "color 0.25s ease",
                        height: "auto",
                      }}
                    >
                      {item.value}
                    </div>

                    {/* More info */}
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: hovered ? "rgba(255,255,255,0.90)" : cat.color,
                        cursor: "pointer",
                        transition: "color 0.25s ease",
                      }}
                    >
                      More info &gt;
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalOverview;
