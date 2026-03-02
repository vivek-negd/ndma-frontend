import React, { useState } from "react";
import { Card, Typography } from "antd";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const { Title, Text } = Typography;

// Real India state boundaries GeoJSON (NAME_1 = state name)
const INDIA_GEO_URL =
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson";

// ── POK (Pakistan-Occupied Kashmir) — Complete Indian claimed territory ──────────
// Includes Azad Jammu & Kashmir (AJK) + Gilgit-Baltistan (GB)
// Shown as India's claimed territory with proper boundaries
const POK_GEOJSON = {
  type: "FeatureCollection" as const,
  features: [
    {
      type: "Feature" as const,
      properties: { NAME_1: "Pakistan-Occupied Kashmir", region: "pok" },
      geometry: {
        type: "Polygon" as const,
        coordinates: [[
          [73.5, 32.5],  // Southwest corner
          [74.0, 32.3],  // West edge
          [74.8, 32.2],  // Northwest
          [75.5, 32.5],  // North-west edge
          [76.0, 33.0],  // North edge
          [76.8, 33.8],  // Northeast
          [77.5, 34.5],  // Further northeast
          [78.0, 35.2],  // East-northeast
          [78.5, 36.0],  // East edge
          [78.2, 36.8],  // East-southeast
          [77.5, 37.2],  // Southeast
          [76.8, 37.0],  // South-east
          [76.0, 36.5],  // South
          [75.2, 36.0],  // South-southwest
          [74.5, 35.5],  // Southwest
          [74.0, 35.0],  // Further southwest
          [73.8, 34.2],  // South
          [73.6, 33.5],  // South-southwest
          [73.5, 32.5],  // Back to start
        ]],
      },
    },
  ],
};

// Performance color scale (matches legend in image)
const LEGEND = [
  { threshold: 95, label: "95%+",   color: "#16a34a" },
  { threshold: 80, label: "80-95%", color: "#4ade80" },
  { threshold: 65, label: "65-80%", color: "#d4f542" },
  { threshold: 40, label: "40-65%", color: "#f97316" },
  { threshold: 0,  label: "<40%",   color: "#ef4444" },
];

const DEFAULT_FILL = "#1e7a8c"; // teal for states with no assigned data

function getColor(pct: number): string {
  for (const range of LEGEND) {
    if (pct >= range.threshold) return range.color;
  }
  return LEGEND[LEGEND.length - 1].color;
}

// Percentage completion data per state (keyed by NAME_1 from GeoJSON)
const STATE_DATA: Record<string, Record<string, number>> = {
  volunteers: {
    "Andhra Pradesh": 87,       "Arunachal Pradesh": 72,
    "Assam": 91,                "Bihar": 44,
    "Chhattisgarh": 68,         "Goa": 96,
    "Gujarat": 83,              "Haryana": 78,
    "Himachal Pradesh": 94,     "Jammu and Kashmir": 81,
    "Jharkhand": 67,            "Karnataka": 89,
    "Kerala": 96,               "Madhya Pradesh": 52,
    "Maharashtra": 88,          "Manipur": 73,
    "Meghalaya": 85,            "Mizoram": 90,
    "Nagaland": 79,             "Odisha": 82,
    "Punjab": 86,               "Rajasthan": 61,
    "Sikkim": 97,               "Tamil Nadu": 93,
    "Telangana": 42,            "Tripura": 84,
    "Uttar Pradesh": 47,        "Uttarakhand": 88,
    "West Bengal": 76,          "Delhi": 91,
    "Chandigarh": 95,           "Puducherry": 88,
  },
  finance: {
    "Andhra Pradesh": 78,       "Arunachal Pradesh": 55,
    "Assam": 83,                "Bihar": 38,
    "Chhattisgarh": 72,         "Goa": 91,
    "Gujarat": 88,              "Haryana": 82,
    "Himachal Pradesh": 87,     "Jammu and Kashmir": 74,
    "Jharkhand": 61,            "Karnataka": 85,
    "Kerala": 92,               "Madhya Pradesh": 48,
    "Maharashtra": 90,          "Manipur": 63,
    "Meghalaya": 79,            "Mizoram": 86,
    "Nagaland": 70,             "Odisha": 76,
    "Punjab": 84,               "Rajasthan": 57,
    "Sikkim": 95,               "Tamil Nadu": 89,
    "Telangana": 36,            "Tripura": 80,
    "Uttar Pradesh": 42,        "Uttarakhand": 81,
    "West Bengal": 69,          "Delhi": 88,
  },
  mou: {
    "Andhra Pradesh": 100,      "Arunachal Pradesh": 100,
    "Assam": 100,               "Bihar": 75,
    "Chhattisgarh": 100,        "Goa": 100,
    "Gujarat": 100,             "Haryana": 100,
    "Himachal Pradesh": 100,    "Jammu and Kashmir": 100,
    "Jharkhand": 100,           "Karnataka": 100,
    "Kerala": 100,              "Madhya Pradesh": 100,
    "Maharashtra": 100,         "Manipur": 100,
    "Meghalaya": 100,           "Mizoram": 100,
    "Nagaland": 100,            "Odisha": 100,
    "Punjab": 100,              "Rajasthan": 100,
    "Sikkim": 100,              "Tamil Nadu": 100,
    "Telangana": 50,            "Tripura": 100,
    "Uttar Pradesh": 100,       "Uttarakhand": 100,
    "West Bengal": 100,         "Delhi": 100,
  },
  erk: {
    "Andhra Pradesh": 65,       "Arunachal Pradesh": 48,
    "Assam": 77,                "Bihar": 35,
    "Chhattisgarh": 59,         "Goa": 88,
    "Gujarat": 71,              "Haryana": 68,
    "Himachal Pradesh": 82,     "Jammu and Kashmir": 63,
    "Jharkhand": 54,            "Karnataka": 75,
    "Kerala": 84,               "Madhya Pradesh": 43,
    "Maharashtra": 79,          "Manipur": 57,
    "Meghalaya": 66,            "Mizoram": 73,
    "Nagaland": 61,             "Odisha": 70,
    "Punjab": 76,               "Rajasthan": 46,
    "Sikkim": 91,               "Tamil Nadu": 82,
    "Telangana": 38,            "Tripura": 68,
    "Uttar Pradesh": 41,        "Uttarakhand": 74,
    "West Bengal": 63,          "Delhi": 81,
  },
  eerr: {
    "Andhra Pradesh": 72,       "Arunachal Pradesh": 61,
    "Assam": 80,                "Bihar": 42,
    "Chhattisgarh": 66,         "Goa": 93,
    "Gujarat": 77,              "Haryana": 74,
    "Himachal Pradesh": 89,     "Jammu and Kashmir": 68,
    "Jharkhand": 58,            "Karnataka": 81,
    "Kerala": 88,               "Madhya Pradesh": 47,
    "Maharashtra": 83,          "Manipur": 62,
    "Meghalaya": 73,            "Mizoram": 78,
    "Nagaland": 65,             "Odisha": 75,
    "Punjab": 80,               "Rajasthan": 53,
    "Sikkim": 96,               "Tamil Nadu": 87,
    "Telangana": 39,            "Tripura": 72,
    "Uttar Pradesh": 44,        "Uttarakhand": 79,
    "West Bengal": 67,          "Delhi": 85,
  },
  audit: {
    "Andhra Pradesh": 83,       "Arunachal Pradesh": 67,
    "Assam": 88,                "Bihar": 41,
    "Chhattisgarh": 71,         "Goa": 95,
    "Gujarat": 85,              "Haryana": 79,
    "Himachal Pradesh": 91,     "Jammu and Kashmir": 76,
    "Jharkhand": 63,            "Karnataka": 87,
    "Kerala": 93,               "Madhya Pradesh": 51,
    "Maharashtra": 86,          "Manipur": 69,
    "Meghalaya": 81,            "Mizoram": 84,
    "Nagaland": 73,             "Odisha": 79,
    "Punjab": 83,               "Rajasthan": 59,
    "Sikkim": 97,               "Tamil Nadu": 91,
    "Telangana": 40,            "Tripura": 77,
    "Uttar Pradesh": 46,        "Uttarakhand": 83,
    "West Bengal": 72,          "Delhi": 89,
  },
};

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
  const [tooltip, setTooltip] = useState<string | null>(null);

  const currentData = STATE_DATA[activeTab] || {};

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
            padding: "0 20px",
            background: "#ffffff",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {/* Tabs */}
          <div style={{ display: "flex" }}>
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: "14px 16px",
                  border: "none",
                  borderBottom:
                    activeTab === tab.key
                      ? "2px solid #1677ff"
                      : "2px solid transparent",
                  marginBottom: -1,
                  background: "none",
                  cursor: "pointer",
                  fontSize: 14,
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
              gap: 14,
              padding: "10px 0",
              flexWrap: "wrap",
            }}
          >
            {LEGEND.map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: item.color,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 12, color: "#595959", whiteSpace: "nowrap" }}>
                  {item.label}
                </span>
              </div>
            ))}
            {/* POK indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginLeft: 6, paddingLeft: 10, borderLeft: "1px solid #e5e7eb" }}>
              <div style={{
                width: 12,
                height: 12,
                backgroundColor: "#f0f4f8",
                borderRadius: 2,
                border: "1.2px dashed #64748b",
                flexShrink: 0,
              }} />
              <span style={{ fontSize: 12, color: "#595959", whiteSpace: "nowrap", fontWeight: 500 }}>POK</span>
            </div>
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
              position: "relative",
            }}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [78.0, 23.5], scale: 850 }}
              style={{ width: "100%", height: 580, display: "block" }}
            >
              {/* ── POK layer (rendered first so India states overlap the border) ── */}
              <Geographies geography={POK_GEOJSON}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#f0f4f8"
                      stroke="#64748b"
                      strokeWidth={1.2}
                      strokeDasharray="4,2"
                      style={{
                        default: { outline: "none" },
                        hover:   { outline: "none", opacity: 0.8, cursor: "pointer" },
                        pressed: { outline: "none" },
                      }}
                      onMouseEnter={() =>
                        setTooltip(`${geo.properties.NAME_1} — Indian Territory`)
                      }
                      onMouseLeave={() => setTooltip(null)}
                    />
                  ))
                }
              </Geographies>

              {/* ── India states layer ── */}
              <Geographies geography={INDIA_GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const name: string = geo.properties.NAME_1 ?? "";
                    const pct = currentData[name];
                    const fill = pct !== undefined ? getColor(pct) : DEFAULT_FILL;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke="#ffffff"
                        strokeWidth={0.8}
                        style={{
                          default: { outline: "none" },
                          hover:   { outline: "none", opacity: 0.85, cursor: "pointer" },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={() =>
                          setTooltip(
                            pct !== undefined
                              ? `${name}: ${pct}%`
                              : `${name}: No data`
                          )
                        }
                        onMouseLeave={() => setTooltip(null)}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* Bottom tooltip bar */}
          <div
            style={{
              marginTop: 14,
              padding: "6px 20px",
              background: "rgba(0,0,0,0.07)",
              borderRadius: 20,
              fontSize: 13,
              color: "#4b5563",
              userSelect: "none",
            }}
          >
            {tooltip ?? "Hover on a state/UT region to view details"}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GeographicView;
