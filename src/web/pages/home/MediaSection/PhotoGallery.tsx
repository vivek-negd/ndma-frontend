import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const sectionStyle: React.CSSProperties = {
  padding: "60px 80px",
  backgroundColor: "#ffffff",
};

const photos = [
  {
    id: 1,
    url: "/src/assets/images/training/img7.jpg",
    caption: "Volunteers during flood rescue training exercise.",
  },
  {
    id: 2,
    url: "/src/assets/images/training/img2.jpg",
    caption: "First-aid and basic life support training.",
  },
  {
    id: 3,
    url: "/src/assets/images/training/img3.jpg",
    caption: "Community awareness session in coastal region.",
  },
  {
    id: 4,
    url: "/src/assets/images/training/img4.jpg",
    caption: "Fire safety drill with local responders.",
  },
  {
    id: 5,
    url: "/src/assets/images/training/img5.jpg",
    caption: "Emergency response simulation exercise.",
  },
  {
    id: 6,
    url: "/src/assets/images/training/img6.jpg",
    caption: "Medical emergency training session.",
  },
];

export const PhotoGallery: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(photos[0].id);

  const activePhoto = photos.find((p) => p.id === activeId) ?? photos[0];
  const currentIndex = photos.findIndex((p) => p.id === activeId);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setActiveId(photos[nextIndex].id);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setActiveId(photos[prevIndex].id);
  };

  const goToPhoto = (id: number) => {
    setActiveId(id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section style={sectionStyle}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Title level={2} style={{ fontWeight: 700, marginBottom: 5, color: "#03020f" }}>
            Photo Gallery
          </Title>
        </Col>

        {/* Main Featured Photo */}
        <Col span={24}>
          <Card
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              border: "1px solid #e8eaed",
            }}
            bodyStyle={{ padding: 0 }}
          >
            <div
              style={{
                height: 480,
                backgroundImage: `url('${activePhoto.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={goToNext}
            >
              {/* Navigation Buttons */}
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<LeftOutlined />}
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "none",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              />
              
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<RightOutlined />}
                style={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "none",
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              />

              {/* Image Counter */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "#ffffff",
                  padding: "6px 12px",
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 500,
                  zIndex: 10,
                }}
              >
                {currentIndex + 1} / {photos.length}
              </div>

              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "120px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                }}
              />
              
              {/* Caption overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  color: "#ffffff",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#ffffff",
                    lineHeight: "1.4",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {activePhoto.caption}
                </Text>
              </div>
            </div>
          </Card>
        </Col>

        {/* Thumbnail Grid */}
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {photos.map((photo) => (
              <Col key={photo.id} xs={8} sm={6} md={4}>
                <div
                  onClick={() => goToPhoto(photo.id)}
                  style={{
                    position: "relative",
                    borderRadius: 8,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: activeId === photo.id ? "3px solid #1890ff" : "2px solid transparent",
                    transform: activeId === photo.id ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeId !== photo.id) {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.border = "2px solid #40a9ff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeId !== photo.id) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.border = "2px solid transparent";
                    }
                  }}
                >
                  <div
                    style={{
                      height: 80,
                      backgroundImage: `url('${photo.url}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Active indicator */}
                  {activeId === photo.id && (
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 20,
                        height: 20,
                        backgroundColor: "#1890ff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          backgroundColor: "#ffffff",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* See All Photos Button */}
        {/* <Col span={24}>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Button
              type="primary"
              size="large"
              style={{
                borderRadius: 8,
                height: 44,
                paddingLeft: 32,
                paddingRight: 32,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              See All Photos
            </Button>
          </div>
        </Col> */}
      </Row>
    </section>
  );
};
