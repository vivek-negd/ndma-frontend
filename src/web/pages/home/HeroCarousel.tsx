import React, { useState, useEffect, useCallback } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import img1 from "../../../assets/images/banner/img12.jpg";
import img2 from "../../../assets/images/banner/img2.jpg";
import img3 from "../../../assets/images/banner/img3.jpg";
import img4 from "../../../assets/images/banner/img4.jpg";
import img5 from "../../../assets/images/banner/img5.jpg";
import img6 from "../../../assets/images/banner/img6.jpg";
import img7 from "../../../assets/images/banner/img7.jpg";
import img8 from "../../../assets/images/banner/img8.jpg";
import img9 from "../../../assets/images/banner/img9.jpg";
import img10 from "../../../assets/images/banner/img10.jpg";
import img11 from "../../../assets/images/banner/img11.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const TRANSITION = "opacity 0.7s ease-in-out";

const arrowBtn: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
  background: "rgba(255,255,255,0.92)",
  border: "2px solid rgba(255,255,255,0.6)",
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#0a2e5f",
  fontSize: 15,
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(0,0,0,0.30)",
};

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    /* Outer wrapper — light gray background, rounded */
    <div
      style={{
        width: "100%",
        height: 480,
        backgroundColor: "#dcdcdc",
        borderRadius: 20,
        padding: "14px 18px",
        boxSizing: "border-box",
      }}
    >
      {/* Inner flex row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          gap: 10,
        }}
      >
        {/* LEFT panel — previous image, shorter height */}
        <div
          onClick={prev}
          style={{
            width: "13%",
            height: "80%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            borderRadius: 14,
            cursor: "pointer",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.62)",
                opacity: index === prevIndex ? 1 : 0,
                transition: TRANSITION,
              }}
            />
          ))}
          {/* Left arrow — centered on the side panel */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            style={arrowBtn}
          >
            <LeftOutlined />
          </button>
        </div>

        {/* CENTER panel — current image, full height */}
        <div
          style={{
            flex: 1,
            height: "100%",
            position: "relative",
            overflow: "hidden",
            borderRadius: 14,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: index === current ? 1 : 0,
                transition: TRANSITION,
              }}
            />
          ))}
        </div>

        {/* RIGHT panel — next image, shorter height */}
        <div
          onClick={next}
          style={{
            width: "13%",
            height: "80%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            borderRadius: 14,
            cursor: "pointer",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.62)",
                opacity: index === nextIndex ? 1 : 0,
                transition: TRANSITION,
              }}
            />
          ))}
          {/* Right arrow — centered on the side panel */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            style={arrowBtn}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
