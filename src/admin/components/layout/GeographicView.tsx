import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

// Performance color scale (matches legend in image)
const LEGEND = [
  { threshold: 95, label: "95%+",   color: "#16a34a" },
  { threshold: 80, label: "80-95%", color: "#4ade80" },
  { threshold: 65, label: "65-80%", color: "#d4f542" },
  { threshold: 40, label: "40-65%", color: "#f97316" },
  { threshold: 0,  label: "<40%",   color: "#ef4444" },
];

const TABS = [
  { key: "volunteers", label: "Volunteer Details" },
  { key: "finance",    label: "Finance" },
  { key: "mou",       label: "MoU Status" },
  { key: "erk",       label: "ERK Items" },
  { key: "eerr",      label: "EERR Items" },
  { key: "audit",     label: "Audit Amount" },
];

const GeographicView = () => {
  const [activeTab, setActiveTab] = useState("volunteers");

  useEffect(() => {
    // Avoid duplicate script injection (e.g. React Strict Mode double-mount)
    if (document.getElementById("simplemaps-mapdata")) {
      if (window.simplemaps_countrymap) {
        window.simplemaps_countrymap.load();
      }
      return;
    }

    const script1 = document.createElement("script");
    script1.id = "simplemaps-mapdata";
    script1.src = "/maps/mapdata.js";
    script1.async = false;

    const script2 = document.createElement("script");
    script2.id = "simplemaps-countrymap";
    script2.src = "/maps/countrymap.js";
    script2.async = false;

    script2.onload = () => {
      if (window.simplemaps_countrymap) {
        window.simplemaps_countrymap.load();
      }
    };

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  return (
    <div style={{ marginBottom: 24 }}>
      {/* Page header */}
      <Title
        level={5}
        style={{
          margin: "0 0 2px 0",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#1f2937",
        }}
      >
        GEOGRAPHIC VIEW
      </Title>
      <Text
        style={{ fontSize: 13, color: "#6b7280", display: "block", marginBottom: 16 }}
      >
        Hover on a state to view detailed metrics for the selected category
      </Text>

      <Card styles={{ body: { padding: 0 } }} style={{ borderRadius: 8, overflow: "hidden" }}>
        {/* Tab bar + Legend row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #f0f0f0",
            padding: "0 12px",
            background: "#ffffff",
            flexWrap: "nowrap",
            gap: 8,
            overflowX: "hidden",
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex" }}>
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "10px 8px",
                  border: "none",
                  borderBottom:
                    activeTab === tab.key
                      ? "2px solid #1677ff"
                      : "2px solid transparent",
                  marginBottom: -1,
                  background: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: activeTab === tab.key ? 600 : 400,
                  color: activeTab === tab.key ? "#1677ff" : "#595959",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 0",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}
          >
            {LEGEND.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: item.color,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 10, color: "#595959", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Map area */}
        <div
          style={{
            background: "#f3f4f6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 16px 20px",
            minHeight: 540,
          }}
        >
          <div
            style={{
              background: "#e9edf2",
              borderRadius: 8,
              overflow: "hidden",
              width: "100%",
              maxWidth: 480,
            }}
          >
            <div id="map" style={{ width: "100%", height: 450 }} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GeographicView;
