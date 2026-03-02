import React from "react";
import { Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import img1 from "../../../assets/images/training/img1.jpg";
import img2 from "../../../assets/images/training/img2.jpg";
import img3 from "../../../assets/images/training/img3.jpg";
import img4 from "../../../assets/images/training/img4.jpg";

const { Title, Text } = Typography;

/* ── data ── */
const featured = {
  title: "Aapda Mitra Training Programme - Goa",
  tag: "Volunteering Training",
  tagType: "blue" as const,
  image: img1,
  description:
    'Visit to Tripura from 7th July to 9th July, 2022 to monitor implementation of "Up-scaling of Aapda Mitra Scheme". Govt of Tripura ...',
  date: "02/02/2026",
};

const gridItems = [
  {
    id: 2,
    title: "Community Disaster Response Training - Pune, Maharashtra",
    tag: "Volunteering Training",
    tagType: "blue" as const,
    image: img2,
    description:
      "Join us for the Community Disaster Response Training in Pune, Maharashtra, from July 7th to 9th, 2022. This training al...",
    date: "21/01/2026",
  },
  {
    id: 3,
    title: "Aapda Mitra Volunteer Training - Jaipur, Rajasthan",
    tag: "Volunteering Training",
    tagType: "blue" as const,
    image: img3,
    description:
      "Join us in Jaipur, Rajasthan for the Aapda Mitra Volunteer Training. This event focuses on enhancing skills and knowledge for...",
    date: "23/12/2025",
  },
  {
    id: 4,
    title: "Community Disaster Response Training - Surat, Gujarat",
    tag: "Response Training",
    tagType: "orange" as const,
    image: img4,
    description:
      "Join us for a Community Disaster Response Training in Surat, Gujarat, aimed at enhancing local preparedness and resilience....",
    date: "12/11/2025",
  },
];

/* ── Tag pill ── */
const TrainingTag: React.FC<{ label: string; type: "blue" | "orange" }> = ({ label, type }) => (
  <span
    style={{
      display: "inline-block",
      backgroundColor: type === "blue" ? "#dbeafe" : "#fff3e0",
      color: type === "blue" ? "#1d4ed8" : "#e65100",
      fontSize: 11,
      fontWeight: 700,
      padding: "3px 12px",
      borderRadius: 20,
      letterSpacing: "0.2px",
    }}
  >
    {label}
  </span>
);

/* ── Read More button ── */
const ReadMoreBtn: React.FC = () => (
  <Button
    size="small"
    style={{
      borderColor: "#d1d5db",
      color: "#374151",
      borderRadius: 6,
      fontWeight: 500,
      fontSize: 13,
      height: 32,
      paddingLeft: 14,
      paddingRight: 14,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
    }}
  >
    Read More <ArrowRightOutlined style={{ fontSize: 11 }} />
  </Button>
);

/* ── main component ── */
export const TrainingUpdatesSection: React.FC = () => {
  return (
    <section style={{ padding: "56px 80px", backgroundColor: "#ffffff" }}>

      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 28,
        }}
      >
        <div>
          <Title
            level={2}
            style={{ fontWeight: 700, marginBottom: 6, color: "#111", fontSize: 28 }}
          >
            Latest Trainings &amp; Updates
          </Title>
          <Text style={{ fontSize: 14, color: "#6b7280", maxWidth: 480, display: "block", lineHeight: 1.6 }}>
            Stay informed about recent Aapda Mitra training programmes conducted
            across States and Districts.
          </Text>
        </div>
        <Button
          style={{
            borderRadius: 8,
            fontWeight: 500,
            height: 38,
            borderColor: "#d1d5db",
            color: "#374151",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 6,
            paddingLeft: 18,
            paddingRight: 18,
          }}
        >
          View All <ArrowRightOutlined style={{ fontSize: 11 }} />
        </Button>
      </div>

      {/* ── Featured card — full width, horizontal ── */}
      <div
        style={{
          display: "flex",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          marginBottom: 20,
          cursor: "pointer",
        }}
      >
        {/* Image — left */}
        <div
          style={{
            width: "40%",
            flexShrink: 0,
            backgroundImage: `url(${featured.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 220,
          }}
        />

        {/* Content — right */}
        <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
          <TrainingTag label={featured.tag} type={featured.tagType} />
          <Title
            level={4}
            style={{ margin: 0, fontWeight: 700, color: "#111", fontSize: 17, lineHeight: 1.4 }}
          >
            {featured.title}
          </Title>
          <Text style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>
            {featured.description}
          </Text>
          <Text style={{ fontSize: 13, color: "#9ca3af" }}>
            Conducted on {featured.date}
          </Text>
          <div>
            <ReadMoreBtn />
          </div>
        </div>
      </div>

      {/* ── 3-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: 180,
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
              }}
            />

            {/* Content */}
            <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <TrainingTag label={item.tag} type={item.tagType} />
              <Text
                strong
                style={{
                  fontSize: 14,
                  color: "#111",
                  lineHeight: 1.45,
                  display: "block",
                  flex: 1,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
                {item.description}
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af" }}>
                Conducted on {item.date}
              </Text>
              <div style={{ marginTop: 4 }}>
                <ReadMoreBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
