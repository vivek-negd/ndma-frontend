import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const { Title, Text } = Typography;

// ─── Cadre Data ────────────────────────────────────────────────────────────
const cadreData = [
  { name: "Community Vol.", value: 74447, percentage: 76.8 },
  { name: "Civil",          value: 8230,  percentage: 8.5  },
  { name: "Home Guard",     value: 5120,  percentage: 5.3  },
  { name: "NCC",            value: 3980,  percentage: 4.1  },
  { name: "NSS",            value: 2840,  percentage: 2.9  },
  { name: "Others",         value: 2274,  percentage: 2.3  },
];
// Dark → light teal-green scale (matching image)
const CADRE_COLORS   = ["#047857", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#9ca3af"];
const CADRE_PCT_CLR  = "#059669";

// ─── Skills Data ────────────────────────────────────────────────────────────
const skillsData = [
  { name: "First Aid",       value: 12840, percentage: 13.1 },
  { name: "Search & Rescue", value: 8620,  percentage: 8.8  },
  { name: "Fire Fighting",   value: 5430,  percentage: 5.6  },
  { name: "Communication",   value: 3210,  percentage: 3.3  },
  { name: "Others",          value: 67577, percentage: 69.2 },
];
// Dark indigo → very light lavender scale (matching image)
const SKILLS_COLORS  = ["#312e81", "#4338ca", "#6366f1", "#a5b4fc", "#c7d2fe"];
const SKILLS_PCT_CLR = "#4f46e5";

// ─── Amount Data ────────────────────────────────────────────────────────────
const amountData = [
  { name: "Installment 1", value: 182.5, percentage: 50.0 },
  { name: "Installment 2", value: 182.5, percentage: 50.0 },
];
// Deep blue + light sky blue (matching image)
const AMOUNT_COLORS  = ["#1d4ed8", "#93c5fd"];
const AMOUNT_PCT_CLR = "#2563eb";

// ─── Custom Tooltip ─────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "8px 12px",
      fontSize: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}>
      <div style={{ fontWeight: 600, color: "#111827" }}>{item.name}</div>
      <div style={{ color: "#6b7280" }}>
        {item.value > 100 ? item.value.toLocaleString() : item.value}
        {" · "}{item.percentage}%
      </div>
    </div>
  );
};

// ─── Reusable Donut Card ─────────────────────────────────────────────────────
interface DonutCardProps {
  title: string;
  total: string;
  data: { name: string; value: number; percentage: number }[];
  colors: string[];
  pctColor: string;
  centerLine1: string;
  centerLine2: string;
  amountMode?: boolean;
}

const DonutCard = ({
  title, total, data, colors, pctColor,
  centerLine1, centerLine2, amountMode = false,
}: DonutCardProps) => (
  <Card
    title={
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>{title}</div>
        <div style={{ fontWeight: 400, fontSize: 12, color: "#9ca3af", marginTop: 4 }}>{total}</div>
      </div>
    }
    styles={{
      header: { padding: "14px 20px 10px", borderBottom: "1px solid #f3f4f6" },
      body:   { padding: "20px 20px 24px" },
    }}
    style={{ borderRadius: 10, height: "100%", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

      {/* ── Donut + center-text overlay ── */}
      <div style={{ position: "relative", flexShrink: 0, width: 160, height: 160 }}>
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx={80}
            cy={80}
            innerRadius={50}
            outerRadius={74}
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={1.5}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>

        {/* Center label */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          pointerEvents: "none",
          width: 96,
        }}>
          <div style={{
            fontWeight: 700,
            fontSize: centerLine1.length > 7 ? 15 : 18,
            color: "#111827",
            lineHeight: 1.2,
          }}>
            {centerLine1}
          </div>
          <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 2, lineHeight: 1.3 }}>
            {centerLine2}
          </div>
        </div>
      </div>

      {/* ── Legend ── */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {data.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              marginBottom: i < data.length - 1 ? 8 : 0,
            }}
          >
            {/* Colored square */}
            <div style={{
              width: 9,
              height: 9,
              borderRadius: 2,
              backgroundColor: colors[i % colors.length],
              flexShrink: 0,
            }} />

            {/* Value */}
            <span style={{ fontSize: 12, color: "#374151", flex: 1, whiteSpace: "nowrap" }}>
              {amountMode
                ? `${item.value} Cr`
                : item.value.toLocaleString()}
            </span>

            {/* Percentage */}
            <span style={{ fontSize: 12, color: pctColor, fontWeight: 500, whiteSpace: "nowrap" }}>
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const CompositionSection = () => (
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
      COMPOSITION & FUND ALLOCATION
    </Title>
    <Text style={{ fontSize: 13, color: "#6b7280", display: "block", marginBottom: 16 }}>
      Volunteer cadre breakdown, skill distribution, and installment-wise fund release
    </Text>

    <Row gutter={[16, 16]}>
      {/* Card 1 — Cadre */}
      <Col xs={24} lg={8}>
        <DonutCard
          title="Top 10 Cadre of Volunteers"
          total="Total: 96,891"
          data={cadreData}
          colors={CADRE_COLORS}
          pctColor={CADRE_PCT_CLR}
          centerLine1="74,447"
          centerLine2="Community Vol."
        />
      </Col>

      {/* Card 2 — Skills */}
      <Col xs={24} lg={8}>
        <DonutCard
          title="Top 10 Skills of Volunteers"
          total="Total: 97,677"
          data={skillsData}
          colors={SKILLS_COLORS}
          pctColor={SKILLS_PCT_CLR}
          centerLine1="67,577"
          centerLine2="Others"
        />
      </Col>

      {/* Card 3 — Amount Released */}
      <Col xs={24} lg={8}>
        <DonutCard
          title="Amount Released (In Cr.)"
          total="Total: ₹365.0 Cr"
          data={amountData}
          colors={AMOUNT_COLORS}
          pctColor={AMOUNT_PCT_CLR}
          centerLine1="₹365.0"
          centerLine2="Total Cr."
          amountMode
        />
      </Col>
    </Row>
  </div>
);

export default CompositionSection;
