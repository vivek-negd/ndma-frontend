import React, { useState } from "react";
import { Input, Typography, Pagination, Collapse } from "antd";
import { SearchOutlined, CalendarOutlined, RightOutlined } from "@ant-design/icons";
import TopBar from "../../../admin/components/layout/TopBar";
import WebHeader from "../home/WebHeader";
import { Footer } from "../../components/layouts/Footer";

import imgTripura from "../../../assets/images/Glimpse/tripura.png";
import imgBihar from "../../../assets/images/Glimpse/bihar.png";
import imgLadakh from "../../../assets/images/Glimpse/ladakh.png";
import imgKarnataka from "../../../assets/images/Glimpse/karnataka.png";
import imgUttarPradesh from "../../../assets/images/Glimpse/uttarpradesh.png";
import imgArunachal from "../../../assets/images/Glimpse/arunachalpradesh.png";
import imgGoa from "../../../assets/images/Glimpse/goa.png";
import imgNagaland from "../../../assets/images/Glimpse/nagaland.png";
import imgManipur from "../../../assets/images/Glimpse/manipur.png";
import imgAssam from "../../../assets/images/Glimpse/assam.png";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const allPosts = [
  {
    id: 1,
    title: "TRIPURA",
    tags: ["State/UT", "Volunteer Training"],
    description: "Visit to Tripura from 7th to 9th July 2022 to monitor implementation of the Up-scaling of Aapda Mitra Scheme. Govt. of Tripura is implementing the scheme i...",
    image: imgTripura,
    date: "July 2022",
    categories: ["Tripura", "State/UT", "Volunteer Training"],
  },
  {
    id: 2,
    title: "BIHAR",
    tags: ["Bihar", "State/UT", "Volunteer Training"],
    description: "Visit to Patna to review the Up-Scaling of Aapda Mitra Scheme in Partnership with Govt. of Bihar (30th June – 1st July 2022). Objectives: review scheme status,...",
    image: imgBihar,
    date: "July 2022",
    categories: ["Bihar", "State/UT", "Volunteer Training"],
  },
  {
    id: 3,
    title: "LADAKH",
    tags: ["Ladakh", "State/UT", "Volunteer Training"],
    description: "Ladakh Visit to monitor implementation of the Aapda Mitra Scheme. Union Territory of Ladakh is implementing the scheme in two Districts — Kargil and Leh. Each...",
    image: imgLadakh,
    date: "June 2022",
    categories: ["Ladakh", "State/UT", "Volunteer Training"],
  },
  {
    id: 4,
    title: "KARNATAKA",
    tags: ["Karnataka", "State/UT", "Volunteer Training"],
    description: "Bengaluru tour visit from 19.06.2022 to 21.06.2022. Karnataka SDMA is conducting training from 20th June 2022. 11 Districts of Karnataka selected to train 3,400...",
    image: imgKarnataka,
    date: "June 2022",
    categories: ["Karnataka", "State/UT", "Volunteer Training"],
  },
  {
    id: 5,
    title: "UTTAR PRADESH",
    tags: ["State/UT", "Uttar Pradesh", "Volunteer Training"],
    description: "Aapda Mitra Training in Uttar Pradesh. 49 Aapda Mitra Sakhi trained out of 136 volunteers in 8th batch. District: Lucknow. Total Strength: 200. Emergency Responder K...",
    image: imgUttarPradesh,
    date: "June 2022",
    categories: ["Uttar Pradesh", "State/UT", "Volunteer Training"],
  },
  {
    id: 6,
    title: "ARUNACHAL PRADESH",
    tags: ["Arunachal Pradesh", "State/UT", "Volunteer Training"],
    description: "Visit to Itanagar to review the Up-Scaling of Aapda Mitra Scheme in Partnership with Govt. of Arunachal Pradesh (29th – 31st May 2022). NDMA officials met Secretary,...",
    image: imgArunachal,
    date: "May 2022",
    categories: ["Arunachal Pradesh", "State/UT", "Volunteer Training"],
  },
  {
    id: 7,
    title: "GOA",
    tags: ["Goa", "State/UT", "Volunteer Training"],
    description: "A total of 65 volunteers have been trained in Goa State by the Directorate of Fire & Emergency Services. The 1st batch was conducted from 23rd April to 7th May 2022,...",
    image: imgGoa,
    date: "May 2022",
    categories: ["Goa", "State/UT", "Volunteer Training"],
  },
  {
    id: 8,
    title: "NAGALAND",
    tags: ["Nagaland", "State/UT", "Volunteer Training"],
    description: "Nagaland 13th – 15th May 2022. Training organised by Nagaland SDMA, Home Department in collaboration with Home Guards, Civil Defense and SDRF, supported by...",
    image: imgNagaland,
    date: "May 2022",
    categories: ["Nagaland", "State/UT", "Volunteer Training"],
  },
  {
    id: 9,
    title: "MANIPUR",
    tags: ["Manipur", "State/UT", "Volunteer Training"],
    description: "Visit to Imphal and Bishnupur to review the Up-Scaling of Aapda Mitra Scheme in Partnership with Govt. of Manipur. Shri K G Daigong, Director, Relief & Disaster...",
    image: imgManipur,
    date: "June 2022",
    categories: ["Manipur", "State/UT", "Volunteer Training"],
  },
  {
    id: 10,
    title: "ASSAM",
    tags: ["Assam", "State/UT", "Volunteer Training"],
    description: "Visit to Silchar & Guwahati to review the Up-Scaling of Aapda Mitra Scheme in Partnership with Govt. of Assam. Shri Nawal Prakash, Joint Advisor, NDMA visited Silcha...",
    image: imgAssam,
    date: "July 2022",
    categories: ["Assam", "State/UT", "Volunteer Training"],
  },
];

const categories = [
  "Arunachal Pradesh", "Assam", "Bihar", "Formation Day NDMA", "Goa",
  "Karnataka", "Ladakh", "Launch", "Manipur", "Nagaland",
  "Pilot Aapda Mitra Scheme", "Scheme Document", "State/UT",
  "Training Manuals", "Tripura", "Up-Scaling of Aapda Mitra Scheme",
  "Uttar Pradesh", "Volunteer Training",
];

const archives = ["July 2022", "June 2022", "May 2022", "April 2022", "September 2021", "December 2020"];

const PAGE_SIZE = 10;

export const Glimpse: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = allPosts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !selectedCategory || p.categories.includes(selectedCategory);
    const matchArchive = !selectedArchive || p.date === selectedArchive;
    return matchSearch && matchCategory && matchArchive;
  });

  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const recentPosts = allPosts.slice(0, 5);

  const tagColor = (tag: string) => {
    if (tag === "State/UT") return { color: "#0a2e5f", bg: "#e8eef7", border: "#b8cce8" };
    if (tag === "Volunteer Training") return { color: "#0a2e5f", bg: "#e8eef7", border: "#b8cce8" };
    return { color: "#555", bg: "#f0f0f0", border: "#d9d9d9" };
  };

  return (
    <>
      <TopBar />
      <WebHeader />

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: "#0d2d6e",
          padding: "64px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", left: -60, top: "50%", transform: "translateY(-50%)", width: 200, height: 200, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", width: 160, height: 160, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />

        <div style={{ width: 60, height: 4, backgroundColor: "#e07b00", margin: "0 auto 24px" }} />
        <Title style={{ color: "#ffffff", fontWeight: 800, fontSize: 42, marginBottom: 16, lineHeight: 1.2 }}>
          Glimpse of <span style={{ fontStyle: "italic" }}>Aapda Mitra</span>
        </Title>
        <Paragraph style={{ color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.7, maxWidth: 680, margin: "0 auto 36px" }}>
          A living record of the scheme in action — state visits, volunteer training completions, and ground-level updates from across India.
        </Paragraph>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {["🏛 Updates from 10+ States", "📅 Since December 2020", "🎓 Volunteer Training Reports"].map((label) => (
            <span
              key={label}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                borderRadius: 24,
                padding: "8px 20px",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: "#f0f2f5", padding: "48px 24px", minHeight: "60vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: 32, alignItems: "start" }}>

          {/* Posts List */}
          <div>
            {paginated.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#888" }}>No updates found.</div>
            ) : (
              paginated.map((post) => {
                return (
                  <div
                    key={post.id}
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: 12,
                      overflow: "hidden",
                      marginBottom: 24,
                      display: "flex",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Image */}
                    <div style={{ width: 240, flexShrink: 0 }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 200 }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: "24px 28px", flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                        {post.tags.map((tag) => {
                          const c = tagColor(tag);
                          return (
                            <span
                              key={tag}
                              style={{
                                backgroundColor: c.bg,
                                color: c.color,
                                border: `1px solid ${c.border}`,
                                borderRadius: 14,
                                padding: "3px 12px",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                      <Title level={4} style={{ color: "#0a2e5f", fontWeight: 800, fontSize: 18, marginBottom: 10, letterSpacing: 0.5 }}>
                        {post.title}
                      </Title>
                      <Paragraph style={{ color: "#555", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                        {post.description}
                      </Paragraph>
                      <a
                        href="#"
                        style={{ color: "#0a2e5f", fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e07b00")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#0a2e5f")}
                      >
                        Read Full Update <RightOutlined style={{ fontSize: 11 }} />
                      </a>
                    </div>
                  </div>
                );
              })
            )}

            {/* Pagination */}
            {filtered.length > PAGE_SIZE && (
              <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
                <Pagination
                  current={currentPage}
                  total={filtered.length}
                  pageSize={PAGE_SIZE}
                  onChange={(p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  showSizeChanger={false}
                  itemRender={(_page, type, element) => {
                    if (type === "prev") return <span style={{ color: "#0a2e5f", fontWeight: 500 }}>← Previous</span>;
                    if (type === "next") return <span style={{ color: "#0a2e5f", fontWeight: 500 }}>Next →</span>;
                    return element;
                  }}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 24 }}>
            {/* Filter & Explore header */}
            <div style={{ backgroundColor: "#0a2e5f", borderRadius: "10px 10px 0 0", padding: "14px 20px" }}>
              <Text style={{ color: "#ffffff", fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>
                Filter &amp; Explore
              </Text>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "0 0 10px 10px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: 0 }}>
              {/* Search */}
              <Input
                placeholder="Search updates..."
                prefix={<SearchOutlined style={{ color: "#aaa" }} />}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                style={{ borderRadius: 8, marginBottom: 20, fontSize: 13 }}
              />

              {/* Categories */}
              <Collapse
                defaultActiveKey={["categories"]}
                ghost
                expandIcon={({ isActive }) => <span style={{ fontSize: 12 }}>{isActive ? "▲" : "▼"}</span>}
                style={{ marginBottom: 16 }}
              >
                <Panel
                  header={<Text strong style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#333" }}>Categories</Text>}
                  key="categories"
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {categories.map((cat) => (
                      <li key={cat} style={{ marginBottom: 8 }}>
                        <button
                          onClick={() => { setSelectedCategory(selectedCategory === cat ? null : cat); setCurrentPage(1); }}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: selectedCategory === cat ? "#e07b00" : "#444",
                            fontWeight: selectedCategory === cat ? 700 : 400,
                            fontSize: 13,
                          }}
                        >
                          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: selectedCategory === cat ? "#e07b00" : "#f0a500", flexShrink: 0 }} />
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Collapse>

              {/* Archives */}
              <Collapse ghost expandIcon={({ isActive }) => <span style={{ fontSize: 12 }}>{isActive ? "▲" : "▼"}</span>} style={{ marginBottom: 16 }}>
                <Panel
                  header={<Text strong style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#333" }}>Archives</Text>}
                  key="archives"
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {archives.map((arc) => (
                      <li key={arc} style={{ marginBottom: 8 }}>
                        <button
                          onClick={() => { setSelectedArchive(selectedArchive === arc ? null : arc); setCurrentPage(1); }}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: selectedArchive === arc ? "#e07b00" : "#444",
                            fontWeight: selectedArchive === arc ? 700 : 400,
                            fontSize: 13,
                          }}
                        >
                          <CalendarOutlined style={{ color: "#f0a500", fontSize: 12 }} />
                          {arc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Collapse>

              {/* Recent Posts */}
              <Collapse defaultActiveKey={["recent"]} ghost expandIcon={({ isActive }) => <span style={{ fontSize: 12 }}>{isActive ? "▲" : "▼"}</span>}>
                <Panel
                  header={<Text strong style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "#333" }}>Recent Posts</Text>}
                  key="recent"
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {recentPosts.map((post) => (
                      <li key={post.id} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                        <img
                          src={post.image}
                          alt={post.title}
                          style={{ width: 48, height: 48, borderRadius: 6, objectFit: "cover", flexShrink: 0 }}
                        />
                        <Text style={{ fontSize: 12, fontWeight: 600, color: "#0a2e5f", lineHeight: 1.4 }}>
                          {post.title}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Glimpse;
