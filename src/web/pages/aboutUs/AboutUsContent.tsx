import React from "react";
import { Typography } from "antd";
import WebHeader from "../home/WebHeader";
import { Footer } from "../../components/layouts/Footer";
import { WhyAapdaMitra } from "./WhyAapdaMitra";
import { WhatIsAapdaMitra } from "./WhatIsAapdaMitra";

const { Title, Paragraph } = Typography;

export const AboutUsContent: React.FC = () => {
  return (
    <>

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#0d2d6e",
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          padding: "28px 24px",
          textAlign: "center",
        }}
      >
        <Title
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: 42,
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          About Us
        </Title>
        <Paragraph
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto",
          }}
        >
          Learn about the Aapda Mitra scheme — India's community-based disaster
          response initiative under the National Disaster Management Authority.
        </Paragraph>
      </section>

      <WhyAapdaMitra />
      <WhatIsAapdaMitra />
    </>
  );
};


