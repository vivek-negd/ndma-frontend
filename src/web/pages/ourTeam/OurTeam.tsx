import React from "react";
import { Typography, Button } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import TopBar from "../../../admin/components/layout/TopBar";
import WebHeader from "../home/WebHeader";
import { Footer } from "../../components/layouts/Footer";

const { Title, Paragraph } = Typography;

// Leadership & Guidance Data
const leadershipData = [
  {
    key: "1",
    initials: "KV",
    name: "Dr. Shri Krishna S. Vatsa",
    designation: "Head of Department",
    phone: "+91-11-26701776",
    email: "krishna.vatsa@ndma.gov.in",
    avatarColor: "#2B7A78"
  },
  {
    key: "2",
    initials: "DA",
    name: "Dr. Dinesh Kumar Aswal",
    designation: "NDMA Member",
    phone: "+91-11-26701770",
    email: "dinesh.aswal@ndma.gov.in",
    avatarColor: "#2B7A78"
  },
  {
    key: "3",
    initials: "RM",
    name: "Rita Missal",
    designation: "NDMA Member",
    phone: "+91-11-26701772",
    email: "rita.missal@ndma.gov.in",
    avatarColor: "#2B7A78"
  },
  {
    key: "4",
    initials: "MI",
    name: "Shri Manish Bhardwaj, IAS",
    designation: "Secretary",
    phone: "+91-11-26701738",
    email: "secretary@ndma.gov.in",
    avatarColor: "#D63384"
  },
  {
    key: "5",
    initials: "SR",
    name: "Shri S Rakesh Kumar, IFS",
    designation: "Advisor (Policy & Plan and CBT)",
    phone: "+91-11-26701893",
    email: "advisor.policy@ndma.gov.in",
    avatarColor: "#17A2B8"
  },
  {
    key: "6",
    initials: "NP",
    name: "Shri Nawal Prakash",
    designation: "Advisor (Policy & Plan and CBT)",
    phone: "+91-11-26701788",
    email: "ja-cbt@ndma.gov.in",
    avatarColor: "#D63384"
  },
  {
    key: "7",
    initials: "SS",
    name: "Shri Sandeep Kumar Sharma",
    designation: "Administrative",
    phone: "+91-11-26701730",
    email: "cbt@ndma.gov.in",
    avatarColor: "#D63384"
  },
  {
    key: "8",
    initials: "VB",
    name: "Shri V K Batolar",
    designation: "Administrative",
    phone: "+91-11-26701274",
    email: "so.cbt@ndma.gov.in",
    avatarColor: "#D63384"
  },
];

// Project Monitoring Unit Data
const pmuData = [
  {
    key: "1",
    initials: "SS",
    name: "Ms. Shikha Sharma",
    designation: "Project Specialist",
    phone: "011 26701 708",
    email: "aapdamitra-pc1@ndma.gov.in",
    avatarColor: "#E85D75"
  },
  {
    key: "2",
    initials: "LP",
    name: "Shri Likun Patra",
    designation: "Project Specialist",
    phone: "011 26701 708",
    email: "aapdamitra-pc2@ndma.gov.in",
    avatarColor: "#D63384"
  },
  {
    key: "3",
    initials: "MC",
    name: "Dr. Mona Chauhan",
    designation: "Project Specialist",
    phone: "011 26701 705",
    email: "aapdamitra-pc3@ndma.gov.in",
    avatarColor: "#17A2B8"
  },
  {
    key: "4",
    initials: "MN",
    name: "Mohd Nadeem",
    designation: "Technical Project Manager (IT)",
    phone: "011 26701 725",
    email: "aapdamitra-pcit@ndma.gov.in",
    avatarColor: "#E85D75"
  },
  {
    key: "5",
    initials: "A",
    name: "Shri Amit",
    designation: "Project Assistant",
    phone: "011 26701 708",
    email: "aapdamitra.ndma@gmail.com",
    avatarColor: "#D63384"
  },
  {
    key: "6",
    initials: "NN",
    name: "Ms. Neetu Nigam",
    designation: "Project Assistant",
    phone: "011 26701 705",
    email: "aapdamitra.ndma@gmail.com",
    avatarColor: "#E85D75"
  },
  {
    key: "7",
    initials: "A",
    name: "Shri Arjun",
    designation: "Multi Tasking Staff",
    phone: "011 26701 705",
    email: "—",
    avatarColor: "#D63384"
  },
  {
    key: "8",
    initials: "YS",
    name: "Shri Yogesh Singh",
    designation: "Multi Tasking Staff",
    phone: "011 26701 708",
    email: "—",
    avatarColor: "#E85D75"
  },
];

const designationPillColor = (designation: string): { bg: string; color: string; border: string } => {
  if (designation.toLowerCase().includes("head")) return { bg: "#fff3e0", color: "#e65100", border: "#ffcc80" };
  if (designation.toLowerCase().includes("member")) return { bg: "#e3f2fd", color: "#1565c0", border: "#90caf9" };
  if (designation.toLowerCase().includes("secretary")) return { bg: "#fce4ec", color: "#c62828", border: "#f48fb1" };
  if (designation.toLowerCase().includes("advisor")) return { bg: "#e8f5e9", color: "#2e7d32", border: "#a5d6a7" };
  if (designation.toLowerCase().includes("specialist")) return { bg: "#e8f5e9", color: "#2e7d32", border: "#a5d6a7" };
  if (designation.toLowerCase().includes("manager")) return { bg: "#e3f2fd", color: "#1565c0", border: "#90caf9" };
  if (designation.toLowerCase().includes("assistant")) return { bg: "#f3e5f5", color: "#6a1b9a", border: "#ce93d8" };
  if (designation.toLowerCase().includes("staff")) return { bg: "#fafafa", color: "#555", border: "#d9d9d9" };
  if (designation.toLowerCase().includes("administrative")) return { bg: "#fce4ec", color: "#c62828", border: "#f48fb1" };
  return { bg: "#e3f2fd", color: "#1565c0", border: "#90caf9" };
};

const LeadershipTable = ({ data }: { data: any[] }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0F3B6F" }}>
              <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "white" }}>Name</th>
              <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "white" }}>Designation</th>
              <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "white" }}>Phone</th>
              <th style={{ padding: "16px 20px", textAlign: "left", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", textTransform: "uppercase", color: "white" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              const pill = designationPillColor(item.designation);
              return (
                <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0", backgroundColor: "#ffffff" }}>
                  <td style={{ padding: "16px 20px", verticalAlign: "middle" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          backgroundColor: item.avatarColor,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "700",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      >
                        {item.initials}
                      </div>
                      <span style={{ color: "#0a2e5f", fontWeight: "600", fontSize: "14px" }}>{item.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px", verticalAlign: "middle" }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: pill.bg,
                        color: pill.color,
                        border: `1px solid ${pill.border}`,
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.designation}
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px", verticalAlign: "middle" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#444", fontSize: "13px", fontWeight: "500" }}>
                      <PhoneOutlined style={{ color: "#0a2e5f", fontSize: 13 }} />
                      {item.phone}
                    </span>
                  </td>
                  <td style={{ padding: "16px 20px", verticalAlign: "middle" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#444", fontSize: "13px" }}>
                      <MailOutlined style={{ color: "#0a2e5f", fontSize: 13 }} />
                      {item.email}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const OurTeam: React.FC = () => {
  return (
    <>
      <TopBar />
      <WebHeader />

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#0d2d6e",
          backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        {/* Orange accent line */}
        <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />

        <Title
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: 48,
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Our <span style={{ fontStyle: "italic" }}>Team</span>
        </Title>
        <Paragraph
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 680,
            margin: "0 auto 40px",
          }}
        >
          The dedicated professionals and specialists who design, monitor, and deliver the Aapda Mitra scheme — from national policy to ground-level execution.
        </Paragraph>

        {/* Stats Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#ffffff",
              height: "48px",
              borderRadius: "30px",
              paddingLeft: "32px",
              paddingRight: "32px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            👥 8 Leadership Members
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#ffffff",
              height: "48px",
              borderRadius: "30px",
              paddingLeft: "32px",
              paddingRight: "32px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            ⭐ 8 PMU Specialists
          </Button>
        </div>
      </section>

      {/* Leadership & Guidance Section */}
      <section
        style={{
          backgroundColor: "#f5f7fa",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
            <Title
              level={2}
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#0a2e5f",
                marginBottom: "12px",
              }}
            >
              Leadership & <span style={{ fontStyle: "italic" }}>Guidance</span>
            </Title>
            <Paragraph
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              The senior members and advisors of NDMA who provide strategic direction and oversight to the Aapda Mitra scheme.
            </Paragraph>
          </div>
          <LeadershipTable data={leadershipData} />
        </div>
      </section>

      {/* Project Monitoring Unit Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
            <Title
              level={2}
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#0a2e5f",
                marginBottom: "12px",
              }}
            >
              Project Monitoring <span style={{ fontStyle: "italic" }}>Unit</span>
            </Title>
            <Paragraph
              style={{
                fontSize: 15,
                color: "#555",
                lineHeight: 1.7,
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              The specialist team responsible for day-to-day project management, coordination, and technical execution of the Aapda Mitra scheme.
            </Paragraph>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {pmuData.map((member, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e8e8e8",
                  borderRadius: 16,
                  padding: "28px 20px 24px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: member.avatarColor,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  {member.initials}
                </div>
                <div style={{ color: "#0a2e5f", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{member.name}</div>
                <div style={{ color: "#6b7280", fontSize: 13, marginBottom: 14 }}>{member.designation}</div>
                <div style={{ width: 40, height: 3, backgroundColor: "#e07b00", margin: "0 auto 14px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#555", fontSize: 13, marginBottom: 6 }}>
                  <PhoneOutlined style={{ color: "#0a2e5f" }} />
                  {member.phone}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#555", fontSize: 13 }}>
                  <MailOutlined style={{ color: "#0a2e5f" }} />
                  {member.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
