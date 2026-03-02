import React from "react";
import { Row, Col, Typography, Space, Select, Button } from "antd";
import { 
  MenuOutlined, 
  FontSizeOutlined, 
  PlusOutlined, 
  MinusOutlined, 
  GlobalOutlined,
  MoreOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import { ThemeCustomizer } from "../common";

const { Text } = Typography;

const TopBar = () => {
  return (
    <div
      style={{
        background: "#1e5db3",
        color: "#fff",
         padding: "0 40px",
          // display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
      }}
    >
      <div  className="container" style={{ maxWidth: "100%", margin: "0 auto", padding: "8px 16px" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="flag"
                width={24}
              />
              <Text style={{ color: "#fff", fontWeight: 500 }}>
                Government of India
              </Text>
            </Space>
          </Col>

          <Col>
            <Space size="middle">
              {/* Skip to Main Content with icon */}
              <Button 
                type="text" 
                icon={<MenuOutlined />}
                style={{ color: "#fff", border: "none", background: "none" }}
              >
                Skip to Main Content
              </Button>

              {/* Font Size Controls */}
              <Space size="small">
                <Button 
                  type="text" 
                  icon={<FontSizeOutlined />}
                  style={{ color: "#fff", border: "none", background: "none" }}
                >
                  A
                </Button>
                <Button 
                  type="text" 
                  icon={<PlusOutlined />}
                  style={{ color: "#fff", border: "none", background: "none", fontSize: "12px" }}
                >
                  A+
                </Button>
                <Button 
                  type="text" 
                  icon={<MinusOutlined />}
                  style={{ color: "#fff", border: "none", background: "none", fontSize: "10px" }}
                >
                  A-
                </Button>
              </Space>

              {/* Language Selector with icon */}
              <Space>
                <GlobalOutlined style={{ color: "#fff" }} />
                <Select
                  defaultValue="English"
                  size="small"
                  style={{ minWidth: 80 }}
                  options={[
                    { value: "English", label: "English" },
                    { value: "Hindi", label: "Hindi" },
                  ]}
                />
              </Space>

              {/* Additional Options */}
              <Space size="small">
                {/* <Button 
                  type="text" 
                  icon={<SearchOutlined />}
                  style={{ color: "#fff", border: "none", background: "none" }}
                /> */}
                {/* <Button 
                  type="text" 
                  icon={<SettingOutlined />}
                  style={{ color: "#fff", border: "none", background: "none" }}
                /> */}
                {/* <Button 
                  type="text" 
                  icon={<UserOutlined />}
                  style={{ color: "#fff", border: "none", background: "none" }}
                /> */}
                <Button 
                  type="text" 
                  icon={<MoreOutlined />}
                  style={{ color: "#fff", border: "none", background: "none" }}
                />
              </Space>

              <ThemeCustomizer open={false} onClose={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TopBar;