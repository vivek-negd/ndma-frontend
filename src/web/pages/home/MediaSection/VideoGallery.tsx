import React, { useRef, useState } from "react";
import { Typography } from "antd";
import { CaretRightFilled } from "@ant-design/icons";
import video1 from "../../../../assets/videos/video1.mp4";
import video2 from "../../../../assets/videos/video2.mp4";
import video3 from "../../../../assets/videos/video3.mp4";
import video4 from "../../../../assets/videos/video4.mp4";

const { Title, Text, Paragraph } = Typography;

const videoData = [
  {
    src: video1,
    duration: "12:34",
    date: "15 Jan, 2026",
    title: "Aapda Mitra Training Programme — Overview",
    description:
      "An overview of the Aapda Mitra Scheme by NDMA, highlighting the training methodology, community engagement strategies, and the impact on disaster preparedness across Indian states.",
  },
  {
    src: video2,
    duration: "08:47",
    date: "03 Dec, 2025",
    title: "Community First Responders in Action — Flood Relief 2025",
    description:
      "Documenting the critical role of Aapda Mitra volunteers during the 2025 monsoon floods, showcasing real-time coordination between community responders and district-level disaster management authorities.",
  },
  {
    src: video3,
    duration: "06:20",
    date: "20 Nov, 2025",
    title: "Disaster Preparedness Workshop — Community Training",
    description:
      "A comprehensive look at disaster preparedness workshops conducted across multiple districts, training community volunteers in first aid and emergency response techniques.",
  },
  {
    src: video4,
    duration: "09:15",
    date: "10 Oct, 2025",
    title: "Emergency Response Field Operations — NDMA",
    description:
      "Field documentation of emergency response operations conducted by Aapda Mitra volunteers during natural disasters, showcasing their on-ground coordination and effectiveness.",
  },
];

interface VideoCardProps {
  video: (typeof videoData)[0];
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden" }}>
      {/* Video area */}
      <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
        <video
          ref={videoRef}
          src={video.src}
          style={{ width: "100%", height: 230, objectFit: "cover", display: "block" }}
          controls
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        {/* Duration badge — top right */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.72)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 5,
            letterSpacing: "0.3px",
          }}
        >
          {video.duration}
        </div>

        {/* Play button overlay — center, hidden when playing */}
        {!playing && (
          <div
            onClick={handlePlayClick}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 18px rgba(0,0,0,0.30)",
              }}
            >
              <CaretRightFilled style={{ fontSize: 26, color: "#0a2e5f", marginLeft: 3 }} />
            </div>
          </div>
        )}
      </div>

      {/* Card content below video */}
      <div style={{ paddingTop: 14 }}>
        {/* Video tag + date */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span
            style={{
              backgroundColor: "#0a2e5f",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              padding: "2px 12px",
              borderRadius: 20,
              letterSpacing: "0.3px",
            }}
          >
            Video
          </span>
          <Text style={{ color: "#999", fontSize: 13 }}>{video.date}</Text>
        </div>

        {/* Title */}
        <Title
          level={5}
          style={{
            margin: "0 0 8px 0",
            color: "#0d0d0d",
            fontWeight: 700,
            fontSize: 15,
            lineHeight: 1.45,
          }}
        >
          {video.title}
        </Title>

        {/* Description */}
        <Paragraph
          style={{
            color: "#666",
            fontSize: 13,
            margin: 0,
            lineHeight: 1.65,
          }}
        >
          {video.description}
        </Paragraph>
      </div>
    </div>
  );
};

const VideosGallery = () => {
  return (
    <div style={{ padding: "60px 80px", background: "#ffffff" }}>

      {/* Section heading with blue left border bar */}
      <div
        style={{
          borderLeft: "4px solid #0a2e5f",
          paddingLeft: 14,
          marginBottom: 32,
        }}
      >
        <Title level={3} style={{ margin: 0, fontWeight: 700, color: "#111", fontSize: 22 }}>
          Featured Videos
        </Title>
      </div>

      {/* 2-column video grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
        }}
      >
        {videoData.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideosGallery;
