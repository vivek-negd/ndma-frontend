import React, { useState } from "react";
import {
  NotificationOutlined,
  PauseOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const TICKER_ITEMS = [
  "21st of February, 2026  •  NDMA approved 1,200 new Aapda Mitra volunteers for Bihar flood-prone areas",
  "Training camps for 500 volunteers successfully completed in Assam",
  "New disaster response protocol issued for cyclone-prone coastal districts",
  "Aapda Mitra initiative extended to 8 new districts across Odisha",
  "Phase-III volunteer enrollment drive launched across 12 states",
  "National workshop on community resilience conducted at New Delhi",
];

interface LatestUpdatesProps {
  /** true → position:fixed at bottom (login page), false → inline block (dashboard) */
  fixed?: boolean;
}

const LatestUpdates: React.FC<LatestUpdatesProps> = ({ fixed = false }) => {
  const [paused, setPaused] = useState(false);
  const tickerText = TICKER_ITEMS.join("          \u2014          ");

  const outerStyle: React.CSSProperties = fixed
    ? {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        display: "flex",
        zIndex: 200,
        boxShadow: "0 -2px 12px rgba(0,0,0,0.25)",
      }
    : {
        width: "100%",
        height: 44,
        display: "flex",
        boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 20,
      };

  return (
    <>
      <style>{`
        @keyframes ndma-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ndma-ticker-track {
          display: inline-block;
          white-space: nowrap;
          animation: ndma-ticker 40s linear infinite;
        }
        .ndma-ticker-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div style={outerStyle}>
        {/* Fixed left label */}
        <div
          style={{
            flexShrink: 0,
            background: "#1677ff",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 20px",
            minWidth: 170,
          }}
        >
          <NotificationOutlined style={{ color: "#fff", fontSize: 15 }} />
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Latest Updates
          </span>
        </div>

        {/* Scrolling text area */}
        <div
          style={{
            flex: 1,
            background: "#0d1b3e",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className={`ndma-ticker-track${paused ? " paused" : ""}`}>
            {[0, 1].map((n) => (
              <span key={n} style={{ color: "#e2e8f0", fontSize: 13 }}>
                {tickerText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Pause / Play button */}
        <div
          style={{
            flexShrink: 0,
            background: "#0d1b3e",
            display: "flex",
            alignItems: "center",
            paddingRight: 14,
            paddingLeft: 8,
            cursor: "pointer",
          }}
          onClick={() => setPaused((p) => !p)}
          title={paused ? "Resume" : "Pause"}
        >
          {paused ? (
            <CaretRightOutlined style={{ color: "#94a3b8", fontSize: 16 }} />
          ) : (
            <PauseOutlined style={{ color: "#94a3b8", fontSize: 16 }} />
          )}
        </div>
      </div>
    </>
  );
};

export default LatestUpdates;
