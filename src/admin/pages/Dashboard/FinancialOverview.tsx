import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend,
} from "recharts";

const { Title, Text } = Typography;

// ─── FY Bar Chart Data ────────────────────────────────────────────────────────
const fyData = [
  { name: "FY 20-21", released: 42,  spent: 36 },
  { name: "FY 21-22", released: 58,  spent: 52 },
  { name: "FY 22-23", released: 75,  spent: 65 },
  { name: "FY 23-24", released: 95,  spent: 80 },
  { name: "FY 24-25", released: 112, spent: 92 },
];

const RELEASED_COLOR = "#93c5fd"; // light blue
const SPENT_COLOR    = "#1d4ed8"; // dark blue

// ─── Sub-Category Donut Data ──────────────────────────────────────────────────
const subData = [
  { name: "Training & Capacity", value: 34.2, percentage: 35.0 },
  { name: "ERK Procurement",     value: 22.8, percentage: 23.3 },
  { name: "Insurance",           value: 16.5, percentage: 16.9 },
  { name: "Administrative",      value: 12.1, percentage: 12.4 },
  { name: "Travel & Logistics",  value: 8.4,  percentage: 8.6  },
  { name: "Infrastructure",      value: 3.8,  percentage: 3.9  },
];
// Dark → light blue scale (matching image)
const SUB_COLORS = ["#1e3a8a", "#2563eb", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"];

// ─── Custom Bar Tooltip ───────────────────────────────────────────────────────
const BarTip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "8px 12px",
      fontSize: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}>
      <div style={{ fontWeight: 600, color: "#111827", marginBottom: 4 }}>{label}</div>
      {payload.map((p: any, i: number) => (
        <div key={i} style={{ color: p.color }}>
          {p.name}: ₹{p.value} Cr
        </div>
      ))}
    </div>
  );
};

// ─── Custom Pie Tooltip ───────────────────────────────────────────────────────
const PieTip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "8px 12px",
      fontSize: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}>
      <div style={{ fontWeight: 600, color: "#111827" }}>{d.name}</div>
      <div style={{ color: "#2563eb", marginTop: 2 }}>₹{d.value} Cr · {d.percentage}%</div>
    </div>
  );
};

// ─── Custom Bar Legend ────────────────────────────────────────────────────────
const BarLegend = (props: any) => {
  const { payload } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 6 }}>
      {payload.map((entry: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{
            width: 10, height: 10, borderRadius: 2,
            backgroundColor: entry.color, flexShrink: 0,
          }} />
          <span style={{ fontSize: 12, color: "#6b7280" }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Shared Card Styles ───────────────────────────────────────────────────────
const cardStyles = {
  header: { padding: "14px 20px 10px", borderBottom: "1px solid #f3f4f6" },
  body:   { padding: "20px" },
};
const cardStyle: React.CSSProperties = {
  borderRadius: 10,
  height: "100%",
  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
};

// ─── Component ────────────────────────────────────────────────────────────────
const FinancialOverview = () => (
  <div style={{ marginBottom: 24 }}>
    {/* Section header */}
    <Title
      level={5}
      style={{
        margin: "0 0 2px",
        fontWeight: 700,
        fontSize: 15,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "#1f2937",
      }}
    >
      FINANCIAL OVERVIEW
    </Title>
    <Text style={{ fontSize: 13, color: "#6b7280", display: "block", marginBottom: 16 }}>
      Budget allocation and expenditure tracking across financial years
    </Text>

    <Row gutter={[16, 16]}>

      {/* ── Left: Grouped Bar Chart ── */}
      <Col xs={24} lg={12}>
        <Card
          title={
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                Amount Spent vs Released (FY-wise)
              </div>
              <div style={{ fontWeight: 400, fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                In Crores (₹)
              </div>
            </div>
          }
          styles={cardStyles}
          style={cardStyle}
        >
          <ResponsiveContainer width="100%" height={290}>
            <BarChart
              data={fyData}
              margin={{ top: 12, right: 16, left: 0, bottom: 4 }}
              barGap={4}
              barCategoryGap="32%"
            >
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickLine={false}
                axisLine={false}
                ticks={[0, 30, 60, 90, 120]}
                domain={[0, 120]}
                width={30}
              />
              <Tooltip content={<BarTip />} />
              <Legend content={<BarLegend />} />
              <Bar dataKey="released" name="Released" fill={RELEASED_COLOR} radius={[3, 3, 0, 0]} />
              <Bar dataKey="spent"    name="Spent"    fill={SPENT_COLOR}    radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Col>

      {/* ── Right: Donut + Legend Table ── */}
      <Col xs={24} lg={12}>
        <Card
          title={
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                Amount Spent — Split by Sub-category
              </div>
              <div style={{ fontWeight: 400, fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                FY 2024-25 &middot; Total: ₹97.8 Cr
              </div>
            </div>
          }
          styles={cardStyles}
          style={cardStyle}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

            {/* Donut */}
            <div style={{ flexShrink: 0, width: 180, height: 180 }}>
              <PieChart width={180} height={180}>
                <Pie
                  data={subData}
                  cx={90}
                  cy={90}
                  innerRadius={52}
                  outerRadius={82}
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={2}
                  startAngle={90}
                  endAngle={-270}
                >
                  {subData.map((_, i) => (
                    <Cell key={i} fill={SUB_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip content={<PieTip />} />
              </PieChart>
            </div>

            {/* Legend table */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {subData.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: i < subData.length - 1 ? 11 : 0,
                  }}
                >
                  {/* Colored square */}
                  <div style={{
                    width: 9,
                    height: 9,
                    borderRadius: 2,
                    backgroundColor: SUB_COLORS[i],
                    flexShrink: 0,
                  }} />

                  {/* Name */}
                  <span style={{ fontSize: 12, color: "#374151", flex: 1, minWidth: 0 }}>
                    {item.name}
                  </span>

                  {/* Value */}
                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#111827",
                    whiteSpace: "nowrap",
                  }}>
                    ₹{item.value} Cr
                  </span>

                  {/* Percentage */}
                  <span style={{
                    fontSize: 12,
                    color: "#2563eb",
                    whiteSpace: "nowrap",
                    minWidth: 40,
                    textAlign: "right",
                  }}>
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Col>

    </Row>
  </div>
);

export default FinancialOverview;
