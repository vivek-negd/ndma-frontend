import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

// ─── Gender Data ─────────────────────────────────────────────────────────────
const genderData = [
  { name: "Male",   value: 77404, percentage: 80, color: "#047857" },
  { name: "Female", value: 19387, percentage: 20, color: "#ec4899" },
];

// ─── Blood Group Data ────────────────────────────────────────────────────────
const bloodGroupData = [
  { name: "null", value: 32450 },
  { name: "B+",   value: 22130 },
  { name: "O+",   value: 18560 },
  { name: "A+",   value: 12340 },
  { name: "O-",   value: 8120  },
  { name: "B-",   value: 4870  },
  { name: "A-",   value: 2890  },
  { name: "AB+",  value: 1680  },
];
// Dark → light green scale (8 steps)
const BG_COLORS = [
  "#064e3b", "#065f46", "#059669", "#10b981",
  "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5",
];

// ─── Qualification Data ───────────────────────────────────────────────────────
const qualificationData = [
  { name: "10TH",       value: 32000 },
  { name: "Graduate",   value: 19500 },
  { name: "Graduation", value: 12000 },
  { name: "B.Sc",       value: 7200  },
  { name: "9TH",        value: 3500  },
];
// Dark → light green scale (5 steps)
const QF_COLORS = ["#064e3b", "#059669", "#34d399", "#6ee7b7", "#a7f3d0"];

// ─── Y-axis formatter ─────────────────────────────────────────────────────────
const fmtK = (v: number) => (v >= 1000 ? `${Math.round(v / 1000)}k` : String(v));

// ─── Custom Bar Tooltip ───────────────────────────────────────────────────────
const BarTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 6,
      padding: "6px 12px",
      fontSize: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    }}>
      <div style={{ fontWeight: 600, color: "#111827" }}>{label}</div>
      <div style={{ color: "#059669", marginTop: 2 }}>
        {payload[0].value.toLocaleString()}
      </div>
    </div>
  );
};

// ─── Shared card styles ───────────────────────────────────────────────────────
const cardStyles = {
  header: { padding: "14px 20px 10px", borderBottom: "1px solid #f3f4f6" },
  body:   { padding: "20px" },
};
const cardStyle: React.CSSProperties = {
  borderRadius: 10,
  height: "100%",
  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
};

// ─── Main Component ───────────────────────────────────────────────────────────
const VolunteerInsights = () => {
  const total = genderData.reduce((s, d) => s + d.value, 0);

  return (
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
        VOLUNTEER INSIGHTS
      </Title>
      <Text style={{ fontSize: 13, color: "#6b7280", display: "block", marginBottom: 16 }}>
        Demographics, qualifications, and blood group distribution
      </Text>

      <Row gutter={[16, 16]}>

        {/* ── Top-left: Gender Distribution ── */}
        <Col xs={24} lg={16}>
          <Card
            title={
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                  Volunteer Distribution by Gender
                </div>
                <div style={{ fontWeight: 400, fontSize: 12, color: "#0891b2", marginTop: 4 }}>
                  Total: 96,791
                </div>
              </div>
            }
            styles={cardStyles}
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>

              {/* Donut */}
              <div style={{ position: "relative", flexShrink: 0, width: 160, height: 160 }}>
                <PieChart width={160} height={160}>
                  <Pie
                    data={genderData}
                    cx={80} cy={80}
                    innerRadius={52} outerRadius={74}
                    dataKey="value"
                    stroke="#ffffff"
                    strokeWidth={2}
                    startAngle={90}
                    endAngle={-270}
                  >
                    {genderData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number, n: string) => [v.toLocaleString(), n]} />
                </PieChart>
                {/* Center label */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center", pointerEvents: "none", width: 90,
                }}>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#111827", lineHeight: 1.2 }}>
                    {total.toLocaleString()}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Total</div>
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {genderData.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: 2,
                      backgroundColor: item.color, flexShrink: 0, marginTop: 3,
                    }} />
                    <div>
                      <div style={{ fontSize: 13, color: "#111827", fontWeight: 600, lineHeight: 1.3 }}>
                        {item.value.toLocaleString()}
                        <span style={{ fontWeight: 400, color: "#6b7280", marginLeft: 4 }}>
                          ({item.percentage}%)
                        </span>
                      </div>
                      <div style={{ fontSize: 11, color: "#6b7280", marginTop: 1 }}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Col>

        {/* ── Top-right: Today's Activity ── */}
        <Col xs={24} lg={8}>
          <Card
            title={
              <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                Today's Activity
              </div>
            }
            styles={cardStyles}
            style={cardStyle}
          >
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 130,
              gap: 6,
            }}>
              <div style={{ fontSize: 60, fontWeight: 700, color: "#047857", lineHeight: 1 }}>
                8
              </div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                Today's Volunteer Count
              </div>
              <a
                href="#"
                style={{
                  fontSize: 13,
                  color: "#0891b2",
                  textDecoration: "none",
                  marginTop: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                More info <span style={{ fontSize: 12 }}>›</span>
              </a>
            </div>
          </Card>
        </Col>

        {/* ── Bottom-left: Blood Group ── */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                Volunteers by Blood Group
              </div>
            }
            styles={{
              header: { padding: "14px 20px 10px", borderBottom: "1px solid #f3f4f6" },
              body:   { padding: "16px 16px 20px" },
            }}
            style={{ borderRadius: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
          >
            <div style={{ background: "#f9fafb", borderRadius: 8, padding: "12px 8px 4px" }}>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={bloodGroupData}
                  margin={{ top: 8, right: 12, left: 0, bottom: 4 }}
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
                    tickFormatter={fmtK}
                    ticks={[0, 9000, 18000, 27000, 36000]}
                    domain={[0, 36000]}
                    width={34}
                  />
                  <Tooltip content={<BarTooltip />} />
                  <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                    {bloodGroupData.map((_, i) => (
                      <Cell key={i} fill={BG_COLORS[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        {/* ── Bottom-right: Qualification ── */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <div style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>
                Volunteers by Qualification
              </div>
            }
            styles={{
              header: { padding: "14px 20px 10px", borderBottom: "1px solid #f3f4f6" },
              body:   { padding: "16px 16px 20px" },
            }}
            style={{ borderRadius: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
          >
            <div style={{ background: "#f9fafb", borderRadius: 8, padding: "12px 8px 4px" }}>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart
                  data={qualificationData}
                  margin={{ top: 8, right: 12, left: 0, bottom: 4 }}
                  barCategoryGap="36%"
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
                    tickFormatter={fmtK}
                    ticks={[0, 9000, 17000, 26000, 34000]}
                    domain={[0, 34000]}
                    width={34}
                  />
                  <Tooltip content={<BarTooltip />} />
                  <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                    {qualificationData.map((_, i) => (
                      <Cell key={i} fill={QF_COLORS[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default VolunteerInsights;
