import React, { useEffect, useState } from "react";
import { Typography, Button, Space } from "antd";
import { BannerSectionType } from "./BannerSectionTypes";

const { Title, Paragraph } = Typography;

export const BannerSection: React.FC = () => {
  const [banner, setBanner] = useState<any>({});

  useEffect(() => {
    fetch("/api/banner")
      .then((res) => res.json())
      .then((data) => setBanner(data))
      .catch(() => setBanner({}));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: 420,
        backgroundImage: `url(${(banner && banner.image_path) || ''})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 700 }}>
          <Title
            style={{
              color: "#fff",
              fontSize: 42,
              fontWeight: 700,
              margin: 0,
            }}
          >
            {banner?.title}
          </Title>

          {banner?.subtitle && (
            <Title level={3} style={{ color: "#f0f0f0", margin: 0 }}>
              {banner.subtitle}
            </Title>
          )}

          {banner?.description && (
            <Paragraph style={{ color: "#ddd", fontSize: 16 }}>
              {banner.description}
            </Paragraph>
          )}

          {banner?.button_text && banner?.button_link && (
            <Space size="large">
              <Button
                type="primary"
                size="large"
                onClick={() => window.open(banner.button_link, "_blank")}
              >
                {banner.button_text}
              </Button>
            </Space>
          )}
        </div>
      </div>
    </div>
  );
};
