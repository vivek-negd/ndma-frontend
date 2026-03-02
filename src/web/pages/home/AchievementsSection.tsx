import React, { useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import {
  SafetyCertificateOutlined,
  HeartOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const achievements = [
  {
    icon: <SafetyCertificateOutlined />,
    label: "Total Life Rescued",
    target: 78117,
  },
  {
    icon: <HeartOutlined />,
    label: "Life Saved",
    target: 129,
  },
  {
    icon: <TeamOutlined />,
    label: "Volunteers Involved in 142 Incidents",
    target: 3606,
  },
];

/* Count-up hook using requestAnimationFrame with easeOut */
const useCountUp = (target: number, duration: number, start: boolean): number => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return count;
};

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  target: number;
  started: boolean;
  isLast: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, target, started, isLast }) => {
  const count = useCountUp(target, 2200, started);

  return (
    <div
      style={{
        flex: 1,
        padding: "28px 36px",
        borderRight: isLast ? "none" : "1px solid #e0ece4",
      }}
    >
      {/* Icon + Label row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span style={{ color: "#2d7a4f", fontSize: 18, lineHeight: 1 }}>{icon}</span>
        <Text
          style={{
            color: "#2d7a4f",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1.3,
          }}
        >
          {label}
        </Text>
      </div>

      {/* Animated number */}
      <span
        style={{
          fontSize: 38,
          fontWeight: 800,
          color: "#111",
          letterSpacing: "-0.5px",
        }}
      >
        {count.toLocaleString("en-IN")}
      </span>
    </div>
  );
};

export const AchievementsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  /* Start counting when section enters the viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "60px 80px", backgroundColor: "#f0faf3" }}
    >
      {/* Heading */}
      <Title
        level={2}
        style={{
          margin: "0 0 10px 0",
          fontWeight: 800,
          color: "#1a3d2b",
          fontSize: 32,
        }}
      >
        Our Achievements
      </Title>
      <Text
        style={{
          color: "#5a7a65",
          fontSize: 15,
          display: "block",
          marginBottom: 36,
          maxWidth: 560,
          lineHeight: 1.6,
        }}
      >
        Aapda Mitra volunteers are making a real difference — saving lives,
        rescuing communities, and responding to disasters across India.
      </Text>

      {/* Single card — 3 stats in one row */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #d4ead9",
          display: "flex",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        {achievements.map((item, index) => (
          <StatItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            target={item.target}
            started={started}
            isLast={index === achievements.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
