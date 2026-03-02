import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

export const LeadershipSection = () => {
  const fullText = `Over the last two decades, most community based efforts have been confined to disaster preparedness and contingency planning for the short term.

We need to expand the scope of community based efforts and support communities to identify local risk reduction measures and implement them.

Such efforts reduce risk and create opportunities for local development and sustainable livelihoods. Localization of disaster risk reduction will also ensure that we make the most of traditional best practices and indigenous knowledge.`;

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 18);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div
      style={{
        padding: "60px 120px",
        background: "#f5f7fa",
      }}
    >
      {/* Section Heading */}
      <Title level={1} style={{ fontWeight: 700, marginBottom: 10 }}>
        Leadership & Vision
      </Title>

      <Paragraph
        style={{
          fontSize: 20,
          color: "#6b6b6b",
          maxWidth: 900,
          marginBottom: 40,
        }}
      >
        Aapda Mitra is being implemented across the country to strengthen
        community-level disaster preparedness and response.
      </Paragraph>

      {/* Card Section */}
      <Card
        style={{
          borderRadius: 20,
          padding: 30,
          background: "#f3f3f3",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Row gutter={40} align="middle">
          {/* Left Image */}
          <Col xs={24} md={10}>
            <div
              style={{
                background: "rgb(29 48 107)",
                borderRadius: 20,
                padding: 20,
                textAlign: "center",
              }}
            >
              <img
                src="src/assets/images/pm_image.png"
                alt="Narendra Modi"
                style={{
                  width: "100%",
                  borderRadius: 12,
                  objectFit: "contain",
                  height: 300,
                }}
              />
            </div>
          </Col>

          {/* Right Text */}
          <Col xs={24} md={14}>
            <Paragraph
              style={{
                fontSize: 18,
                lineHeight: 1.9,
                color: "#333",
                whiteSpace: "pre-line",
                position: "relative",
              }}
            >
              <span style={{ fontSize: 28, color: "#c97b30" }}>“</span>
              {displayText}
              {index < fullText.length && (
                <span
                  style={{
                    borderRight: "2px solid #000",
                    marginLeft: 3,
                  }}
                />
              )}
              <span style={{ fontSize: 28, color: "#c97b30" }}>”</span>
            </Paragraph>

            {index >= fullText.length && (
              <div style={{ marginTop: 30 }}>
                <Text strong style={{ fontSize: 16 }}>
                  Shri Narendra Modi,
                </Text>
                <br />
                <Text style={{ fontSize: 16 }}>
                  Prime Minister of India
                </Text>
              </div>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
