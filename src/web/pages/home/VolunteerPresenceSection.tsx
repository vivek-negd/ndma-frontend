import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const { Title, Text } = Typography;

const geoUrl =
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson";

const stats = [
  { label: "Total Volunteers Registered", value: "15,546" },
  { label: "States & UTs Covered", value: "36" },
  { label: "Avg. per State/UT", value: "432" },
];

const stateColors = [
  "#1a6e7e", "#2a8fa3", "#22778a", "#1d6878",
  "#2a9fb0", "#1e7b8c", "#258c9e", "#1b6373",
  "#2a8fa3", "#1a6e7e", "#22778a", "#258c9e",
  "#1d6878", "#2a9fb0", "#1e7b8c", "#1a6e7e",
  "#2a8fa3", "#22778a", "#1d6878", "#258c9e",
  "#2a9fb0", "#1e7b8c", "#1a6e7e", "#22778a",
  "#258c9e", "#1d6878", "#2a9fb0", "#1e7b8c",
  "#2a8fa3", "#1a6e7e", "#22778a", "#1d6878",
  "#258c9e", "#2a9fb0", "#1e7b8c", "#2a8fa3",
];

export const VolunteerPresenceSection: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <section style={{ padding: "60px 80px", backgroundColor: "#f5f8fc" }}>

      {/* Heading */}
      <Title
        level={2}
        style={{ margin: "0 0 8px 0", fontWeight: 800, color: "#111", fontSize: 28 }}
      >
        Volunteer Presence Across India
      </Title>
      <Text style={{ color: "#666", fontSize: 15, display: "block", marginBottom: 32 }}>
        Explore state-wise volunteer registration and deployment data across all States and Union Territories.
      </Text>

      <Row gutter={[28, 28]} align="top">

        {/* LEFT — India Map */}
        <Col xs={24} md={15}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "1px solid #e4e8ef",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ backgroundColor: "#f0f4f8", padding: "8px 12px" }}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [82.8, 22.5], scale: 900 }}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo: any, index: number) => {
                      const isHovered = hoveredState === geo.rsmKey;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => setHoveredState(geo.rsmKey)}
                          onMouseLeave={() => setHoveredState(null)}
                          style={{
                            default: {
                              fill: stateColors[index % stateColors.length],
                              stroke: "#ffffff",
                              strokeWidth: 0.7,
                              outline: "none",
                            },
                            hover: {
                              fill: "#0a2e5f",
                              stroke: "#ffffff",
                              strokeWidth: 0.9,
                              outline: "none",
                              cursor: "pointer",
                            },
                            pressed: {
                              fill: "#0a2e5f",
                              stroke: "#ffffff",
                              strokeWidth: 0.9,
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </div>

          {/* Hint text below map */}
          <Text
            style={{
              display: "block",
              textAlign: "center",
              color: "#aaa",
              fontSize: 13,
              marginTop: 14,
            }}
          >
            Hover over any state or union territory on the map to view volunteer registration data.
          </Text>
        </Col>

        {/* RIGHT — Stat Cards + Legend */}
        <Col xs={24} md={9}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Stat Cards */}
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#fff",
                  border: "1px solid #e4e8ef",
                  borderRadius: 14,
                  padding: "20px 24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <Text style={{ color: "#888", fontSize: 13, display: "block", marginBottom: 6 }}>
                  {stat.label}
                </Text>
                <span
                  style={{
                    fontSize: 30,
                    fontWeight: 800,
                    color: "#1677ff",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}

            {/* Legend Card */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e4e8ef",
                borderRadius: 14,
                padding: "18px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Text strong style={{ display: "block", marginBottom: 12, fontSize: 14 }}>
                Legend
              </Text>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    backgroundColor: "#2a8fa3",
                    border: "1px solid #ccc",
                    flexShrink: 0,
                  }}
                />
                <Text style={{ fontSize: 13, color: "#555" }}>State/UT</Text>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 3,
                    backgroundColor: "#0a2e5f",
                    flexShrink: 0,
                  }}
                />
                <Text style={{ fontSize: 13, color: "#555" }}>Hovered State</Text>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </section>
  );
};
