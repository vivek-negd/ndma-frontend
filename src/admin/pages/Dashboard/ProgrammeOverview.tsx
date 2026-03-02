import React, { useState } from "react";
import { Card, Row, Col, Typography, Radio, Select, Button } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const { Title, Text } = Typography;

// Monthly data for the chart
const monthlyData = [
  { month: "Apr", trainings: 45, onboarding: 25 },
  { month: "May", trainings: 52, onboarding: 30 },
  { month: "Jun", trainings: 38, onboarding: 28 },
  { month: "Jul", trainings: 42, onboarding: 35 },
  { month: "Aug", trainings: 48, onboarding: 32 },
  { month: "Sep", trainings: 55, onboarding: 40 },
  { month: "Oct", trainings: 35, onboarding: 22 },
  { month: "Nov", trainings: 28, onboarding: 18 },
  { month: "Dec", trainings: 32, onboarding: 20 },
  { month: "Jan", trainings: 40, onboarding: 25 },
  { month: "Feb", trainings: 38, onboarding: 30 },
  { month: "Mar", trainings: 45, onboarding: 35 },
];

const ProgrammeOverview = () => {
  const [viewType, setViewType] = useState("month-wise");
  const [dataType, setDataType] = useState("trainings");
  const [financialYear, setFinancialYear] = useState("FY 2024-25");

  const currentData = monthlyData.map(item => ({
    month: item.month,
    value: dataType === "trainings" ? item.trainings : item.onboarding,
  }));

  return (
    <div style={{ marginBottom: "24px" }}>
      <Title level={4} style={{ marginBottom: "8px" }}>PROGRAMME OVERVIEW</Title>
      <Text type="secondary">Training completion and volunteer onboarding trends across financial years</Text>
      
      <Card style={{ marginBottom: "16px" }}>
        {/* Controls Section */}
        <Row justify="space-between" align="middle" style={{ marginBottom: "16px" }}>
          <Col>
            <Radio.Group 
              value={dataType} 
              onChange={(e) => setDataType(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button value="trainings" style={{ backgroundColor: "#1e5fb9" }}>Trainings Completed</Radio.Button>
              <Radio.Button value="onboarding">Volunteer Onboarding</Radio.Button>
            </Radio.Group>
          </Col>
          
          <Col>
            <Radio.Group 
              value={viewType} 
              onChange={(e) => setViewType(e.target.value)}
              buttonStyle="solid"
            >
              <Radio.Button value="month-wise" style={{ backgroundColor: "#1e5fb9" }}>Month-wise</Radio.Button>
              <Radio.Button value="year-wise">Year-wise</Radio.Button>
            </Radio.Group>
          </Col>
          
          <Col>
            <Select
              value={financialYear}
              onChange={setFinancialYear}
              style={{ width: 120 }}
              options={[
                { value: "FY 2024-25", label: "FY 2024-25" },
                { value: "FY 2023-24", label: "FY 2023-24" },
                { value: "FY 2022-23", label: "FY 2022-23" },
              ]}
            />
          </Col>
        </Row>

        {/* Chart Section */}
        <div style={{ height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 11 }}
              />
              <YAxis 
                tick={{ fontSize: 11 }}
                domain={[0, 60]}
              />
              <Tooltip 
                formatter={(value, name) => [
                  `${name}: ${value}`,
                  dataType === "trainings" ? "Trainings Completed" : "Volunteer Onboarding"
                ]}
              />
              <Bar 
                dataKey="value" 
                fill="#1e5fb9"
                radius={[4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Footer Note */}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Text style={{ fontSize: "12px", color: "#8c8c8c" }}>
            Trends reflect programme activity within the selected financial year.
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default ProgrammeOverview;