import React from "react";
import { Typography } from "antd";
import img1 from "../../../assets/images/banner/img12.jpg";
import img2 from "../../../assets/images/banner/img3.jpg";
import img3 from "../../../assets/images/banner/img5.jpg";

const { Title, Text } = Typography;

const cards = [
  {
    title: "Disasters don't wait. Help often arrives late.",
    description:
      "In the first critical hours of floods, earthquakes, cyclones, or fires, it is local communities who respond first saving lives before formal assistance reaches.",
    image: img1,
    descriptionColor: "#e07b00",
  },
  {
    title: "Aapda Mitra strengthens this first response.",
    description:
      "The scheme trains community volunteers, equips them with safety gear and insurance, and integrates them into India's disaster management system so early response is trained, organized, and safer.",
    image: img2,
    descriptionColor: "#555",
  },
  {
    title: "Because the fastest help is always nearby.",
    description:
      "Aapda Mitra turns citizens into prepared responders, ready to protect lives until professional relief takes over.",
    image: img3,
    descriptionColor: "#555",
  },
];

export const WhyAapdaMitra: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#eef2f8",
        padding: "24px 80px 36px",
      }}
    >
      {/* Section heading */}
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#0a2e5f",
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 36,
        }}
      >
        Why Aapda Mitra <em>Exists</em> ?
      </Title>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860, margin: "0 auto" }}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              display: "flex",
              alignItems: "center",
              padding: "20px 24px",
              gap: 24,
            }}
          >
            {/* Text side */}
            <div style={{ flex: 1 }}>
              <Text
                style={{
                  display: "block",
                  color: "#0a2e5f",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}
              >
                {card.title}
              </Text>
              <Text
                style={{
                  display: "block",
                  color: card.descriptionColor,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </Text>
            </div>

            {/* Image side */}
            <div
              style={{
                flexShrink: 0,
                width: 160,
                height: 110,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div
        style={{
          maxWidth: 600,
          margin: "48px auto 0",
          textAlign: "center",
          position: "relative",
          padding: "0 48px",
        }}
      >
        {/* Opening quote mark */}
        <span
          style={{
            position: "absolute",
            left: 0,
            top: -10,
            fontSize: 64,
            lineHeight: 1,
            color: "#c8a04a",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
          }}
        >
          "
        </span>

        <Text
          style={{
            display: "block",
            fontSize: 20,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.5,
          }}
        >
          The first responders in any disaster are always local
        </Text>

        {/* Closing quote mark */}
        <span
          style={{
            position: "absolute",
            right: 0,
            bottom: -32,
            fontSize: 64,
            lineHeight: 1,
            color: "#c8a04a",
            fontFamily: "Georgia, serif",
            fontWeight: 700,
          }}
        >
          "
        </span>
      </div>
    </section>
  );
};
