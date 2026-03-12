import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import Header from "./Header";

const { Content } = Layout;

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ height: 'calc(100vh - 64px)', overflowY: 'auto', padding: "24px", background: "#0f1966ff!important" }}>
          <Content
            style={{
              padding: 0,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};
