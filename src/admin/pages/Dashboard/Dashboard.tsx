import React from "react";
import { Layout } from "antd";
import { Sidebar } from "../../components/layout/Sidebar";
import { Footer } from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import NationalOverview from "./NationalOverview";
import CompositionSection from "./CompositionSection";
import VolunteerInsights from "./VolunteerInsights";
import FinancialOverview from "./FinancialOverview";
import DailyStatistics from "./DailyStatistics";
import GeographicView from "../../components/layout/GeographicView";
import ProgrammeOverview from "./ProgrammeOverview";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
        <Layout style={{ padding: "0px", background: "#0f1966ff!important" }}>
          <Content
            style={{
              padding: 0,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ padding: "0px" }}>
              <NationalOverview />
              <CompositionSection />
              <VolunteerInsights />
              <FinancialOverview />
              <ProgrammeOverview />
              <GeographicView />
              <DailyStatistics />
            </div>
          </Content>
          {/* <Footer /> */}
        </Layout>
    </Layout>
  );
};

export default Dashboard;