import React, { useState } from "react";
import { Button, Typography, Table, Tag, Empty } from "antd";
import { DownloadOutlined, FileTextOutlined, BookOutlined, ReadOutlined } from "@ant-design/icons";
import TopBar from "../../../admin/components/layout/TopBar";
import WebHeader from "../home/WebHeader";
import { Footer } from "../../components/layouts/Footer";
import booksCollage from "../../../assets/images/books_collage.png";

const { Title, Paragraph, Text } = Typography;

const trainingMaterials = [
  {
    key: "1",
    material: "Aapda Mitra Scheme Document",
    type: "Scheme Document",
    language: "English",
    preparedBy: "NDMA",
  },
  {
    key: "2",
    material: "Training Handbook of Aapda Mitra",
    type: "Handbook",
    language: "English",
    preparedBy: "NDMA",
  },
  {
    key: "3",
    material: "Do's and Don'ts Pocket Book",
    type: "Pocket Book",
    language: "English",
    preparedBy: "NDMA",
  },
  {
    key: "4",
    material: "Do's and Don'ts Pocket Book",
    type: "Pocket Book",
    language: "Hindi",
    preparedBy: "NDMA",
  },
  {
    key: "5",
    material: "Training Handbook in Hindi",
    type: "Handbook",
    language: "Hindi",
    preparedBy: "Uttar Pradesh SDMA",
  },
  {
    key: "6",
    material: "Training Handbook in Hindi",
    type: "Handbook",
    language: "Hindi",
    preparedBy: "Uttarakhand SDMA",
  },
  {
    key: "7",
    material: "Training Handbook in Kannada",
    type: "Handbook",
    language: "Kannada",
    preparedBy: "Karnataka SDMA",
  },
];

const getIcon = (type: string) => {
  if (type === "Scheme Document") return <FileTextOutlined style={{ fontSize: 18, color: "#e07b00" }} />;
  if (type === "Pocket Book") return <ReadOutlined style={{ fontSize: 18, color: "#52c41a" }} />;
  return <BookOutlined style={{ fontSize: 18, color: "#1677ff" }} />;
};

const getTypeTag = (type: string) => {
  if (type === "Scheme Document") return <Tag style={{ color: "#e07b00", backgroundColor: "#fff7e6", border: "1px solid #ffd591", borderRadius: 4 }}>{type}</Tag>;
  if (type === "Pocket Book") return <Tag style={{ color: "#389e0d", backgroundColor: "#f6ffed", border: "1px solid #b7eb8f", borderRadius: 4 }}>{type}</Tag>;
  return <Tag style={{ color: "#1677ff", backgroundColor: "#e6f4ff", border: "1px solid #91caff", borderRadius: 4 }}>{type}</Tag>;
};

const getLangTag = (lang: string) => {
  const colors: Record<string, { color: string; bg: string; border: string }> = {
    English: { color: "#531dab", bg: "#f9f0ff", border: "#d3adf7" },
    Hindi: { color: "#389e0d", bg: "#f6ffed", border: "#b7eb8f" },
    Kannada: { color: "#531dab", bg: "#f9f0ff", border: "#d3adf7" },
  };
  const c = colors[lang] ?? { color: "#555", bg: "#f5f5f5", border: "#d9d9d9" };
  return <Tag style={{ color: c.color, backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 4 }}>{lang}</Tag>;
};

export const TrainingMaterial: React.FC = () => {
  const [filters, setFilters] = useState({ type: "All", language: "All", preparedBy: "All" });

  const filteredMaterials = trainingMaterials.filter((item) => {
    return (
      (filters.type === "All" || item.type === filters.type) &&
      (filters.language === "All" || item.language === filters.language) &&
      (filters.preparedBy === "All" || item.preparedBy === filters.preparedBy)
    );
  });

  const showingText =
    filteredMaterials.length === trainingMaterials.length
      ? "Showing all materials"
      : `Showing ${filteredMaterials.length} material${filteredMaterials.length !== 1 ? "s" : ""}`;

  const typeOptions = ["All", "Handbook", "Pocket Book", "Scheme Document"];
  const languageOptions = ["All", "English", "Hindi", "Kannada"];
  const preparedByOptions = ["All", "NDMA", "Uttar Pradesh SDMA", "Uttarakhand SDMA", "Karnataka SDMA"];

  const filterBtnStyle = (active: boolean) => ({
    backgroundColor: active ? "#0a2e5f" : "#ffffff",
    color: active ? "#ffffff" : "#0a2e5f",
    border: `1px solid ${active ? "#0a2e5f" : "#d0d0d0"}`,
    borderRadius: 20,
    fontSize: 13,
    fontWeight: active ? 600 : 500,
    height: 32,
    paddingLeft: 16,
    paddingRight: 16,
    cursor: "pointer",
  } as React.CSSProperties);

  const columns = [
    {
      title: "MATERIAL",
      dataIndex: "material",
      key: "material",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 6,
              backgroundColor: "#f5f7fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {getIcon(record.type)}
          </div>
          <div>
            <Text style={{ color: "#0a2e5f", fontWeight: 600, display: "block", fontSize: 14 }}>{text}</Text>
            <Text style={{ color: "#888", fontSize: 12 }}>Prepared by {record.preparedBy}</Text>
          </div>
        </div>
      ),
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
      render: (text: string) => getTypeTag(text),
    },
    {
      title: "LANGUAGE",
      dataIndex: "language",
      key: "language",
      render: (text: string) => getLangTag(text),
    },
    {
      title: "",
      key: "action",
      align: "right" as const,
      render: () => (
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          style={{
            backgroundColor: "#0a2e5f",
            borderColor: "#0a2e5f",
            borderRadius: 20,
            fontWeight: 600,
            paddingLeft: 20,
            paddingRight: 20,
            height: 36,
          }}
        >
          Download
        </Button>
      ),
    },
  ];

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
        <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
        <Title style={{ color: "#ffffff", fontWeight: 800, fontSize: 42, marginBottom: 20, lineHeight: 1.2 }}>
          Training <span style={{ fontStyle: "italic" }}>Materials</span>
        </Title>
        <Paragraph style={{ color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.7, maxWidth: 750, margin: "0 auto 40px" }}>
          Every Aapda Mitra volunteer is trained using a standardised curriculum developed by NDMA and made available in English, Hindi, and regional Indian languages.
        </Paragraph>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {["📋 4 Core Documents", "🌍 Multiple Regional Languages", "✅ Prepared by NDMA & State SDMAs"].map((label) => (
            <Button
              key={label}
              size="large"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                fontSize: 14,
                height: 48,
                borderRadius: 30,
                paddingLeft: 24,
                paddingRight: 24,
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </section>

      {/* Training Library Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
            <Title level={2} style={{ fontSize: 28, fontWeight: 700, color: "#0a2e5f", marginBottom: 12 }}>
              Our Training <span style={{ fontStyle: "italic" }}>Library</span>
            </Title>
            <Paragraph style={{ fontSize: 15, color: "#555", lineHeight: 1.7, maxWidth: 650, margin: "0 auto" }}>
              A growing collection of field guides, handbooks, and training references — built for volunteers, trainers, and disaster management professionals.
            </Paragraph>
          </div>
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <img
              src={booksCollage}
              alt="Training Library Books"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Download Materials Section */}
      <section style={{ backgroundColor: "#eef2f8", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
            <Title level={2} style={{ fontSize: 28, fontWeight: 700, color: "#0a2e5f", marginBottom: 12 }}>
              Download <span style={{ fontStyle: "italic" }}>Materials</span>
            </Title>
            <Paragraph style={{ fontSize: 15, color: "#555", lineHeight: 1.7, maxWidth: 650, margin: "0 auto" }}>
              All training documents are available for free download. Use the filters below to find materials by type, language, or source.
            </Paragraph>
          </div>

          {/* Filter Section */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "28px 24px",
              borderRadius: 12,
              marginBottom: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            {/* Row 1: TYPE + LANGUAGE side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 40px", marginBottom: 24 }}>
              {/* TYPE */}
              <div>
                <Text strong style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#0a2e5f", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>
                  Type
                </Text>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {typeOptions.map((opt) => (
                    <button key={opt} onClick={() => setFilters({ ...filters, type: opt })} style={filterBtnStyle(filters.type === opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* LANGUAGE */}
              <div>
                <Text strong style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#0a2e5f", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>
                  Language
                </Text>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {languageOptions.map((opt) => (
                    <button key={opt} onClick={() => setFilters({ ...filters, language: opt })} style={filterBtnStyle(filters.language === opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: PREPARED BY */}
            <div>
              <Text strong style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#0a2e5f", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 }}>
                Prepared By
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {preparedByOptions.map((opt) => (
                  <button key={opt} onClick={() => setFilters({ ...filters, preparedBy: opt })} style={filterBtnStyle(filters.preparedBy === opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Showing count */}
          <Text style={{ display: "block", fontSize: 13, color: "#666", marginBottom: 16, fontWeight: 500 }}>
            {showingText}
          </Text>

          {/* Table */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Table
              columns={columns}
              dataSource={filteredMaterials}
              pagination={false}
              locale={{ emptyText: <Empty description="No materials found" /> }}
              rowKey="key"
              style={{ fontSize: 13 }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TrainingMaterial;
