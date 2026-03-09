import React, { useState } from "react";
import { Card, Switch, Typography } from "antd";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

// Helper: convert date string to timestamp
const t = (s: string) => new Date(s).getTime();

// Bi-weekly sample data — 2022-08-21 to 2026-02-15
const RAW_DATA: { date: string; value: number }[] = [
  { date: "2022-08-21", value: 1100 },
  { date: "2022-09-04", value: 1250 },
  { date: "2022-09-18", value: 650 },
  { date: "2022-10-02", value: 100 },
  { date: "2022-10-16", value: 450 },
  { date: "2022-10-30", value: 1200 },
  { date: "2022-11-13", value: 550 },
  { date: "2022-11-27", value: 150 },
  { date: "2022-12-11", value: 100 },
  { date: "2022-12-25", value: 100 },
  { date: "2023-01-08", value: 100 },
  { date: "2023-01-22", value: 100 },
  { date: "2023-02-05", value: 150 },
  { date: "2023-02-19", value: 200 },
  { date: "2023-03-05", value: 150 },
  { date: "2023-03-19", value: 200 },
  { date: "2023-04-02", value: 200 },
  { date: "2023-04-16", value: 200 },
  { date: "2023-04-30", value: 250 },
  { date: "2023-05-14", value: 200 },
  { date: "2023-05-28", value: 250 },
  { date: "2023-06-11", value: 200 },
  { date: "2023-06-25", value: 300 },
  { date: "2023-07-09", value: 600 },
  { date: "2023-07-23", value: 1600 },
  { date: "2023-08-06", value: 450 },
  { date: "2023-08-20", value: 400 },
  { date: "2023-09-03", value: 500 },
  { date: "2023-09-17", value: 950 },
  { date: "2023-10-01", value: 1050 },
  { date: "2023-10-15", value: 800 },
  { date: "2023-10-29", value: 450 },
  { date: "2023-11-12", value: 200 },
  { date: "2023-11-26", value: 150 },
  { date: "2023-12-10", value: 100 },
  { date: "2023-12-24", value: 150 },
  { date: "2024-01-07", value: 200 },
  { date: "2024-01-21", value: 150 },
  { date: "2024-02-04", value: 200 },
  { date: "2024-02-18", value: 200 },
  { date: "2024-03-03", value: 250 },
  { date: "2024-03-17", value: 300 },
  { date: "2024-03-31", value: 300 },
  { date: "2024-04-14", value: 350 },
  { date: "2024-04-28", value: 400 },
  { date: "2024-05-12", value: 800 },
  { date: "2024-05-26", value: 1050 },
  { date: "2024-06-09", value: 1100 },
  { date: "2024-06-23", value: 1150 },
  { date: "2024-07-07", value: 700 },
  { date: "2024-07-21", value: 600 },
  { date: "2024-08-04", value: 1100 },
  { date: "2024-08-18", value: 1050 },
  { date: "2024-09-01", value: 700 },
  { date: "2024-09-15", value: 650 },
  { date: "2024-09-29", value: 1450 },
  { date: "2024-10-13", value: 700 },
  { date: "2024-10-27", value: 650 },
  { date: "2024-11-10", value: 700 },
  { date: "2024-11-24", value: 750 },
  { date: "2024-12-08", value: 600 },
  { date: "2024-12-22", value: 350 },
  { date: "2025-01-05", value: 200 },
  { date: "2025-01-19", value: 300 },
  { date: "2025-02-02", value: 250 },
  { date: "2025-02-16", value: 200 },
  { date: "2025-03-02", value: 150 },
  { date: "2025-03-16", value: 200 },
  { date: "2025-03-30", value: 200 },
  { date: "2025-04-13", value: 200 },
  { date: "2025-04-27", value: 300 },
  { date: "2025-05-11", value: 400 },
  { date: "2025-05-25", value: 700 },
  { date: "2025-06-08", value: 1600 },
  { date: "2025-06-22", value: 800 },
  { date: "2025-07-06", value: 1500 },
  { date: "2025-07-20", value: 1400 },
  { date: "2025-08-03", value: 1300 },
  { date: "2025-08-17", value: 1500 },
  { date: "2025-08-31", value: 1100 },
  { date: "2025-09-14", value: 1200 },
  { date: "2025-09-28", value: 1000 },
  { date: "2025-10-12", value: 1000 },
  { date: "2025-10-26", value: 1200 },
  { date: "2025-11-09", value: 1150 },
  { date: "2025-11-23", value: 300 },
  { date: "2025-12-07", value: 250 },
  { date: "2025-12-21", value: 250 },
  { date: "2026-01-04", value: 300 },
  { date: "2026-01-18", value: 280 },
  { date: "2026-02-01", value: 300 },
  { date: "2026-02-15", value: 300 },
];

// Convert to timestamp-keyed for time-scale X axis
const data = RAW_DATA.map((d) => ({ date: t(d.date), value: d.value }));

// Explicit X-axis tick dates shown in the image
const X_TICKS = [
  "2022-08-21",
  "2023-02-05",
  "2023-07-23",
  "2024-01-07",
  "2024-06-23",
  "2024-12-08",
  "2025-05-25",
  "2025-11-09",
].map(t);

// Y-axis tick values and formatter
const Y_TICKS = [0, 400, 800, 1200, 1600];
const formatY = (v: number) => {
  if (v === 0) return "0";
  if (v >= 1000) return `${(v / 1000).toFixed(1)}k`;
  return String(v);
};

// Format timestamp to YYYY-MM-DD for axis and tooltip
const formatDate = (ts: number) => {
  const d = new Date(ts);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
};

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 6,
        padding: "8px 12px",
        fontSize: 12,
        color: "#374151",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ color: "#6b7280", marginBottom: 4 }}>{formatDate(label)}</div>
      <div style={{ color: "#2563eb", fontWeight: 600 }}>
        Registrations: {payload[0].value.toLocaleString()}
      </div>
    </div>
  );
};

const DailyStatistics = () => {
  const [showGrid, setShowGrid] = useState(false);

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
        DAILY STATISTICS
      </Title>
      <Text style={{ fontSize: 13, color: "#6b7280", display: "block", marginBottom: 16 }}>
        Volunteer registration activity over time (2022–2026)
      </Text>

      <Card bodyStyle={{ padding: 0 }} style={{ borderRadius: 8, overflow: "hidden" }}>
        {/* Card inner header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "18px 24px 8px",
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#111827", lineHeight: 1.4 }}>
              Daily Statistics Graph
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 3 }}>
              Bi-weekly sample &middot; 2022-08-21 to 2026-02-15
            </div>
          </div>

          {/* Toggle switch — controls grid lines */}
          <Switch
            checked={showGrid}
            onChange={setShowGrid}
            checkedChildren={<span style={{ fontSize: 11 }}>✦</span>}
            unCheckedChildren={<span style={{ fontSize: 11 }}>✦</span>}
            style={{ marginTop: 4 }}
          />
        </div>

        {/* Chart */}
        <div style={{ padding: "8px 8px 16px 0" }}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data} margin={{ top: 16, right: 24, left: 0, bottom: 8 }}>
              <defs>
                <linearGradient id="dailyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#3b82f6" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>

              {showGrid && (
                <CartesianGrid
                  strokeDasharray=""
                  stroke="#e5e7eb"
                  strokeWidth={0.5}
                  vertical={false}
                />
              )}

              <XAxis
                dataKey="date"
                type="number"
                scale="time"
                domain={[t("2022-08-21"), t("2026-02-15")]}
                ticks={X_TICKS}
                tickFormatter={formatDate}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickLine={false}
                axisLine={false}
                dy={8}
              />

              <YAxis
                ticks={Y_TICKS}
                tickFormatter={formatY}
                tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickLine={false}
                axisLine={false}
                width={44}
              />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={1.5}
                fill="url(#dailyGradient)"
                dot={false}
                activeDot={{ r: 4, fill: "#2563eb", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default DailyStatistics;
