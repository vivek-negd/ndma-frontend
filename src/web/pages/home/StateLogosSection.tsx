import React from "react";
import { Typography } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const sectionStyle: React.CSSProperties = {
  padding: "48px 80px 56px",
  backgroundColor: "#ffffff",
  borderTop: "1px solid #e8eaed",
};

const logos = [
  { name: "Andhra Pradesh",   code: "AP", type: "State",           icon: "/src/assets/images/states-icon/apsdma-150x150.png" },
  { name: "Arunachal Pradesh",code: "AR", type: "State",           icon: "/src/assets/images/states-icon/ArunachalPradesh-150x150.png" },
  { name: "Assam",            code: "AS", type: "State",           icon: "/src/assets/images/states-icon/Assam-150x150.png" },
  { name: "Bihar",            code: "BR", type: "State",           icon: "/src/assets/images/states-icon/Bihar.png" },
  { name: "Chhattisgarh",     code: "CG", type: "State",           icon: "/src/assets/images/states-icon/chattisgarh-150x150.jpg" },
  { name: "Goa",              code: "GA", type: "State",           icon: "/src/assets/images/states-icon/goa-150x150.png" },
  { name: "Gujarat",          code: "GJ", type: "State",           icon: "/src/assets/images/states-icon/GSDMA.png" },
  { name: "Haryana",          code: "HR", type: "State",           icon: "/src/assets/images/states-icon/Haryana-150x150.png" },
  { name: "Himachal Pradesh", code: "HP", type: "State",           icon: "/src/assets/images/states-icon/HimachalPradesh-150x150.png" },
  { name: "Jharkhand",        code: "JH", type: "State",           icon: "/src/assets/images/states-icon/Jharkhand-150x150.png" },
  { name: "Karnataka",        code: "KA", type: "State",           icon: "/src/assets/images/states-icon/Karnataka.png" },
  { name: "Kerala",           code: "KL", type: "State",           icon: "/src/assets/images/states-icon/Kerala-150x150.png" },
  { name: "Madhya Pradesh",   code: "MP", type: "State",           icon: "/src/assets/images/states-icon/MadhyaPradesh-150x150.png" },
  { name: "Maharashtra",      code: "MH", type: "State",           icon: "/src/assets/images/states-icon/Maharashtra-150x150.png" },
  { name: "Manipur",          code: "MN", type: "State",           icon: "/src/assets/images/states-icon/Manipur-150x150.png" },
  { name: "Meghalaya",        code: "ML", type: "State",           icon: "/src/assets/images/states-icon/Meghalaya-150x150.png" },
  { name: "Mizoram",          code: "MZ", type: "State",           icon: "/src/assets/images/states-icon/Mizoram-150x150.png" },
  { name: "Nagaland",         code: "NL", type: "State",           icon: "/src/assets/images/states-icon/Nagaland-150x150.png" },
  { name: "Odisha",           code: "OD", type: "State",           icon: "/src/assets/images/states-icon/Odisha-150x150.png" },
  { name: "Punjab",           code: "PB", type: "State",           icon: "/src/assets/images/states-icon/Punjab-150x150.png" },
  { name: "Rajasthan",        code: "RJ", type: "State",           icon: "/src/assets/images/states-icon/Rajasthan-150x150.png" },
  { name: "Sikkim",           code: "SK", type: "State",           icon: "/src/assets/images/states-icon/Sikkim.png" },
  { name: "Tamil Nadu",       code: "TN", type: "State",           icon: "/src/assets/images/states-icon/TamilNadu-150x150.png" },
  { name: "Telangana",        code: "TS", type: "State",           icon: "/src/assets/images/states-icon/Telangana-150x150.png" },
  { name: "Tripura",          code: "TR", type: "State",           icon: "/src/assets/images/states-icon/Tripura-150x150.png" },
  { name: "Uttar Pradesh",    code: "UP", type: "State",           icon: "/src/assets/images/states-icon/UP-150x150.png" },
  { name: "Uttarakhand",      code: "UK", type: "State",           icon: "/src/assets/images/states-icon/Uttarakhand-150x150.png" },
  { name: "West Bengal",      code: "WB", type: "State",           icon: "/src/assets/images/states-icon/WestBengal-150x150.png" },
  { name: "Delhi",            code: "DL", type: "Union Territory", icon: "/src/assets/images/states-icon/Delhi.png" },
  { name: "Jammu & Kashmir",  code: "JK", type: "Union Territory", icon: "/src/assets/images/states-icon/JK-150x150.png" },
  { name: "Ladakh",           code: "LA", type: "Union Territory", icon: "/src/assets/images/states-icon/Ladakh-150x150.png" },
  { name: "Lakshadweep",      code: "LD", type: "Union Territory", icon: "/src/assets/images/states-icon/Lakshadweep-150x150.png" },
  { name: "Puducherry",       code: "PY", type: "Union Territory", icon: "/src/assets/images/states-icon/Puducherry-150x150.png" },
  { name: "Chandigarh",       code: "CH", type: "Union Territory", icon: "/src/assets/images/states-icon/Chandigarh_emblem.png" },
  { name: "Dadra & Nagar Haveli", code: "DD", type: "Union Territory", icon: "/src/assets/images/states-icon/DD-150x150.png" },
];

const NextArrow = (props: any) => (
  <div
    onClick={props.onClick}
    style={{
      position: "absolute",
      right: -36,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "#ffffff",
      border: "1.5px solid #d9d9d9",
      borderRadius: "50%",
      width: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    }}
  >
    <RightOutlined style={{ color: "#0a2e5f", fontSize: 13 }} />
  </div>
);

const PrevArrow = (props: any) => (
  <div
    onClick={props.onClick}
    style={{
      position: "absolute",
      left: -36,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      background: "#ffffff",
      border: "1.5px solid #d9d9d9",
      borderRadius: "50%",
      width: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    }}
  >
    <LeftOutlined style={{ color: "#0a2e5f", fontSize: 13 }} />
  </div>
);

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 992,  settings: { slidesToShow: 4 } },
    { breakpoint: 768,  settings: { slidesToShow: 3 } },
    { breakpoint: 576,  settings: { slidesToShow: 2 } },
  ],
};

export const StateLogosSection: React.FC = () => {
  return (
    <section style={sectionStyle}>

      {/* Title — centered, uppercase */}
      <Title
        level={3}
        style={{
          textAlign: "center",
          fontWeight: 800,
          color: "#111",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: 32,
        }}
      >
        State and UT's
      </Title>

      {/* Slider */}
      <div style={{ position: "relative", margin: "0 48px" }}>
        <Slider {...sliderSettings}>
          {logos.map((state) => (
            <div key={state.code} style={{ padding: "0 3px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {/* Rounded square card */}
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 14,
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                    overflow: "hidden",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 14px rgba(30,93,179,0.15)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#a5b4fc";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.07)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
                  }}
                >
                  <img
                    src={state.icon}
                    alt={state.name}
                    style={{ width: 68, height: 68, objectFit: "contain" }}
                  />
                </div>

                {/* State name */}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#374151",
                    textAlign: "center",
                    lineHeight: 1.35,
                    display: "block",
                    maxWidth: 100,
                  }}
                >
                  {state.name}
                </Text>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
