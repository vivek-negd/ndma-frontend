import { Row, Col, Card, Space, Typography, Button, Form, Input, message } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, FacebookOutlined, YoutubeOutlined, LinkedinOutlined, ArrowRightOutlined } from "@ant-design/icons";
import TopBar from "../../../admin/components/layout/TopBar";
import WebHeader from "../home/WebHeader";
import { Footer } from "../../components/layouts/Footer";
import { useState } from "react";
import styles from "./ContactUs.module.css";

const { Title, Text, Paragraph } = Typography;

export const ContactUs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleMessageSubmit = async (values: any) => {
    setLoading(true);
    try {
      console.log("Message submitted:", values);
      message.success("Thank you! We'll get back to you soon.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <EnvironmentOutlined style={{ fontSize: 32, color: "#e07b00" }} />,
      label: "VISIT US",
      title: "NDMA Bhawan, A1 Safdarjung Enclave",
      description: "New Delhi — 110029, India",
    },
    {
      icon: <MailOutlined style={{ fontSize: 32, color: "#e07b00" }} />,
      label: "EMAIL US",
      title: "cbt@ndma.gov.in",
      description: "We typically respond within 2 working days",
    },
    {
      icon: <PhoneOutlined style={{ fontSize: 32, color: "#e07b00" }} />,
      label: "CALL US",
      title: "011-26701 700",
      description: "Also reachable at: 708, 705",
    },
  ];

  const socialMediaCards = [
    {
      title: "X (Twitter)",
      handle: "@NDMAIndia",
      icon: <TwitterOutlined style={{ fontSize: 32, color: "#000" }} />,
      bgColor: "#000",
      posts: [
        {
          author: "NDMA India",
          date: "Feb 17, 2026",
          content: "NDMA successfully conducted Aapda Mitra training in 350+ districts across India. Over 1,00,000 community volunteers trained for disaster response.",
          tags: "#AapdaMitra #DisasterPreparedness #NDMAIndia",
        },
      ],
    },
    {
      title: "Facebook",
      handle: "NDMA.in",
      icon: <FacebookOutlined style={{ fontSize: 32, color: "#1877F2" }} />,
      bgColor: "#1877F2",
      posts: [
        {
          author: "NDMA India",
          date: "February 18, 2026",
          content: "The National Disaster Management Authority salutes the courage of our Aapda Mitra volunteers who continue to save lives during floods and landslides. Your bravery inspires the nation!",
          tags: "Join the movement at aapdamitraunitiedportal.in",
        },
      ],
    },
    {
      title: "YouTube",
      handle: "NDMA India",
      icon: <YoutubeOutlined style={{ fontSize: 32, color: "#FF0000" }} />,
      bgColor: "#FF0000",
      posts: [
        {
          author: "NDMA India",
          date: "Feb 12, 2026",
          content: "Aapda Mitra Training Programme 2025- 26 | Complete Documentary on Community Disaster Preparedness | NDMA Official",
          tags: "",
        },
      ],
    },
    {
      title: "LinkedIn",
      handle: "NDMA India",
      icon: <LinkedinOutlined style={{ fontSize: 32, color: "#0077B5" }} />,
      bgColor: "#0077B5",
      posts: [
        {
          author: "NDMA India",
          date: "February 18, 2026",
          content: "NDMA is proud to announce the expansion of the Aapda Mitra scheme to 350+ districts nationwide. We are actively seeking partnerships with state disaster management authorities to strengthen community-level disaster preparedness.",
          tags: "Together, we build a resilient India.",
        },
      ],
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
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        {/* Orange accent line */}
        <div
          style={{
            width: 60,
            height: 4,
            backgroundColor: "#e07b00",
            margin: "0 auto 24px",
            borderRadius: 2,
          }}
        />

        <Title
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: 42,
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Contact <span style={{ fontStyle: "italic" }}>Us</span>
        </Title>
        <Paragraph
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 17,
            lineHeight: 1.7,
            maxWidth: 650,
            margin: "0 auto 32px",
          }}
        >
          Reach out to the Aapda Mitra team at NDMA — for scheme queries, training coordination, or partnership enquiries.
        </Paragraph>

        {/* Contact Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Button
            size="large"
            icon={<EnvironmentOutlined style={{ marginRight: 8 }} />}
            style={{
              backgroundColor: "transparent",
              borderColor: "rgba(255, 255, 255, 0.4)",
              color: "white",
              fontSize: 14,
              height: 48,
              borderRadius: 30,
              paddingLeft: 24,
              paddingRight: 24,
              fontWeight: 500,
              border: "1px solid rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            New Delhi, India
          </Button>
          <Button
            size="large"
            icon={<MailOutlined style={{ marginRight: 8 }} />}
            style={{
              backgroundColor: "transparent",
              borderColor: "rgba(255, 255, 255, 0.4)",
              color: "white",
              fontSize: 14,
              height: 48,
              borderRadius: 30,
              paddingLeft: 24,
              paddingRight: 24,
              fontWeight: 500,
              border: "1px solid rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            cbt@ndma.gov.in
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined style={{ marginRight: 8 }} />}
            style={{
              backgroundColor: "transparent",
              borderColor: "rgba(255, 255, 255, 0.4)",
              color: "white",
              fontSize: 14,
              height: 48,
              borderRadius: 30,
              paddingLeft: 24,
              paddingRight: 24,
              fontWeight: 500,
              border: "1px solid rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            011-26701 700, 708, 705
          </Button>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "24px 80px 36px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[48, 48]} justify="center">
            {contactCards.map((card, idx) => (
              <Col xs={24} sm={24} md={8} key={idx} style={{ textAlign: "center" }}>
                {/* Icon Circle */}
                <div
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <div style={{ fontSize: 28, color: "#e07b00" }}>
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <Text
                  style={{
                    display: "block",
                    color: "#0a2e5f",
                    fontWeight: 600,
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    marginBottom: 12,
                  }}
                >
                  {card.label}
                </Text>
                <Title
                  level={4}
                  style={{
                    color: "#0a2e5f",
                    marginBottom: 8,
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {card.title}
                </Title>
                <Text
                  style={{
                    display: "block",
                    color: "#666",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </Text>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "40px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
          <iframe
            title="NDMA Bhawan Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5207881840727!2d77.20325!3d28.567570000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c8b8f8b8b5%3A0x1234567890abcdef!2sNDMA%20Bhawan%2C%20A1%20Safdarjung%20Enclave%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Connect With Us - Social Media Section */}
      <section
        style={{
          backgroundColor: "#eef2f8",
          padding: "24px 80px 36px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Title
            level={2}
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 12,
              color: "#0a2e5f",
            }}
          >
            Connect With Us
          </Title>
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#1a56db",
              marginBottom: 40,
              maxWidth: 520,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Stay updated with the latest from NDMA across our official social media channels.
          </Paragraph>

          {/* Social Media Icons */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Space size="large">
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<TwitterOutlined style={{ fontSize: 20 }} />}
                style={{ backgroundColor: "#000", borderColor: "#000", width: 50, height: 50 }}
              />
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<FacebookOutlined style={{ fontSize: 20 }} />}
                style={{ backgroundColor: "#1877F2", borderColor: "#1877F2", width: 50, height: 50 }}
              />
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<YoutubeOutlined style={{ fontSize: 20 }} />}
                style={{ backgroundColor: "#FF0000", borderColor: "#FF0000", width: 50, height: 50 }}
              />
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<LinkedinOutlined style={{ fontSize: 20 }} />}
                style={{ backgroundColor: "#0077B5", borderColor: "#0077B5", width: 50, height: 50 }}
              />
            </Space>
          </div>

          {/* Social Media Feed Cards */}
          <Row gutter={[16, 16]} justify="center">
            {socialMediaCards.map((social, index) => (
              <Col xs={24} sm={24} md={12} lg={6} key={index}>
                <Card
                  style={{
                    border: "none",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    borderRadius: 12,
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* Social Media Header */}
                  <div
                    style={{
                      backgroundColor: social.bgColor,
                      padding: 12,
                      color: "white",
                      marginBottom: 12,
                      borderRadius: "0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      {social.icon}
                      <div>
                        <Text strong style={{ color: "white", display: "block", fontSize: 13 }}>
                          {social.title}
                        </Text>
                        <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 11 }}>
                          {social.handle}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  {social.posts.map((post, postIndex) => (
                    <div key={postIndex}>
                      <Text strong style={{ color: "#0a2e5f", display: "block", marginBottom: 3, fontSize: 13 }}>
                        {post.author}
                      </Text>
                      <Text type="secondary" style={{ fontSize: 11, display: "block", marginBottom: 8 }}>
                        {post.date}
                      </Text>
                      <Paragraph style={{ color: "#555", marginBottom: 8, fontSize: 12.5, lineHeight: 1.6 }}>
                        {post.content}
                      </Paragraph>
                      {post.tags && (
                        <Text style={{ color: "#0077B5", fontSize: 12 }}>
                          {post.tags}
                        </Text>
                      )}
                    </div>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section
        style={{
          backgroundColor: "#0d2d6e",
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          padding: "60px 24px",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Orange accent line */}
          <div
            style={{
              width: 60,
              height: 4,
              backgroundColor: "#e07b00",
              margin: "0 auto 24px",
              borderRadius: 2,
            }}
          />

          <Title
            level={2}
            style={{
              textAlign: "center",
              fontSize: 38,
              fontWeight: 800,
              marginBottom: 12,
              color: "#ffffff",
            }}
          >
            Send Us a <span style={{ fontStyle: "italic" }}>Message</span>
          </Title>
          <Paragraph
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "rgba(255,255,255,0.72)",
              marginBottom: 40,
              lineHeight: 1.7,
            }}
          >
            Have a query about the scheme, training materials, or volunteer registration? Write to us directly.
          </Paragraph>

          {/* Contact Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={handleMessageSubmit}
            style={{
              backgroundColor: "rgba(20, 50, 100, 0.5)",
              padding: 32,
              borderRadius: 12,
              border: "1px solid rgba(224, 123, 0, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<Text style={{ color: "#ffffff", fontWeight: 600, fontSize: 13 }}>Full Name</Text>}
                  name="fullName"
                  rules={[{ required: true, message: "Please enter your full name" }]}
                >
                  <Input
                    className={styles.darkFormInput}
                    placeholder="e.g. Rajesh Kumar"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(224, 123, 0, 0.4)",
                      color: "#ffffff",
                      padding: "10px 12px",
                      fontSize: 13,
                      borderRadius: 6,
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label={<Text style={{ color: "#ffffff", fontWeight: 600, fontSize: 13 }}>Email Address</Text>}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Invalid email format" },
                  ]}
                >
                  <Input
                    className={styles.darkFormInput}
                    placeholder="e.g. name@example.com"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(224, 123, 0, 0.4)",
                      color: "#ffffff",
                      padding: "10px 12px",
                      fontSize: 13,
                      borderRadius: 6,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label={<Text style={{ color: "#ffffff", fontWeight: 600, fontSize: 13 }}>Subject</Text>}
              name="subject"
              rules={[{ required: true, message: "Please enter a subject" }]}
            >
              <Input
                className={styles.darkFormInput}
                placeholder="e.g. Query about volunteer registration in Bihar"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(224, 123, 0, 0.4)",
                  color: "#ffffff",
                  padding: "10px 12px",
                  fontSize: 13,
                  borderRadius: 6,
                }}
              />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: "#ffffff", fontWeight: 600, fontSize: 13 }}>Your Message</Text>}
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                className={styles.darkFormTextArea}
                placeholder="Describe your query or message in detail..."
                rows={5}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(224, 123, 0, 0.4)",
                  color: "#ffffff",
                  padding: "10px 12px",
                  fontSize: 13,
                  borderRadius: 6,
                }}
              />
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                icon={<ArrowRightOutlined />}
                style={{
                  backgroundColor: "#e07b00",
                  borderColor: "#e07b00",
                  color: "#ffffff",
                  fontWeight: 700,
                  borderRadius: 30,
                  paddingLeft: 48,
                  paddingRight: 48,
                  height: 48,
                  fontSize: 15,
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(224, 123, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d96b00";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(224, 123, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#e07b00";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(224, 123, 0, 0.3)";
                }}
              >
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
