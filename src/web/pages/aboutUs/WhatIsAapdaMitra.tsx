import React from "react";
import { Typography } from "antd";
import emblem from "../../../assets/images/emblemIndia.jpg";
import logo from "../../../assets/images/logo.png";
import imgLeft from "../../../assets/images/banner/img7.jpg";
import imgCenter from "../../../assets/images/banner/img2.jpg";
import imgRight from "../../../assets/images/banner/img5.jpg";

const { Title, Paragraph, Text } = Typography;

const imageCards = [
  {
    src: imgLeft,
    alt: "First Aid Training",
    caption: "First Aid Training",
    description:
      "Volunteers are trained in basic first aid and emergency medical response to assist injured survivors during disasters.",
  },
  {
    src: imgCenter,
    alt: "Disaster Preparedness Workshop",
    caption: "Disaster Preparedness Workshop",
    description:
      "Hands-on workshops equip community members with life-saving techniques like CPR, search & rescue, and safe evacuation.",
  },
  {
    src: imgRight,
    alt: "Flood Rescue Operation",
    caption: "Flood Rescue Operation",
    description:
      "Trained Aapda Mitra volunteers lead flood rescue missions, working alongside NDRF to protect communities in crisis.",
  },
];

export const WhatIsAapdaMitra: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "24px 80px 36px",
        textAlign: "center",
      }}
    >
      {/* Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          marginBottom: 20,
        }}
      >
        <img
          src={emblem}
          alt="Emblem of India"
          style={{ height: 52, objectFit: "contain" }}
        />
        <img
          src={logo}
          alt="Aapda Mitra Logo"
          style={{ height: 52, objectFit: "contain" }}
        />
      </div>

      {/* Title */}
      <Title
        level={2}
        style={{
          color: "#0a2e5f",
          fontWeight: 700,
          fontSize: 28,
          marginBottom: 12,
        }}
      >
        What Is Aapda Mitra ?
      </Title>

      {/* Subtitle */}
      <Paragraph
        style={{
          color: "#1a56db",
          fontSize: 15,
          lineHeight: 1.7,
          maxWidth: 520,
          margin: "0 auto 40px",
        }}
      >
        Aapda Mitra is a national community volunteer scheme of the Government
        of India, implemented by the National Disaster Management Authority
        (NDMA).
      </Paragraph>

      {/* Image cards — equal size */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 16,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {imageCards.map((card) => (
          <div
            key={card.alt}
            style={{
              flex: 1,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <div style={{ height: 220, flexShrink: 0 }}>
              <img
                src={card.src}
                alt={card.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Text */}
            <div
              style={{
                padding: "14px 16px",
                backgroundColor: "#f8fafd",
                textAlign: "left",
                flex: 1,
              }}
            >
              <Text
                style={{
                  display: "block",
                  color: "#0a2e5f",
                  fontWeight: 700,
                  fontSize: 13.5,
                  marginBottom: 6,
                }}
              >
                {card.caption}
              </Text>
              <Text
                style={{
                  display: "block",
                  color: "#555",
                  fontSize: 12.5,
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
