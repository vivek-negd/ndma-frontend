import React from "react";
import { Row, Col } from "antd";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import "./youthOrganizationWorkflow.css";

interface StepProps {
  step: string;
  title: string;
  description?: string;
  gradientClass: string;
}

const StepBlock: React.FC<StepProps> = ({
  step,
  title,
  description,
  gradientClass,
}) => {
  return (
    <div className="step-wrapper">
      <div className={`step-header ${gradientClass}`}>
        <div className="step-number">Step {step}</div>
        <h3 className="step-title">{title}</h3>
        {description && (
          <p className="step-description">{description}</p>
        )}
      </div>

      <Row className="step-actions">
        <Col span={12} className="quick-view">
          Quick View
        </Col>
        <Col span={12} className="details">
          Details
        </Col>
      </Row>
    </div>
  );
};

const Arrow = () => (
  <div className="arrow">
    <DownOutlined />
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="section-title">{title}</div>
);

export const YouthOrganizationWorkflow: React.FC = () => {
  return (
    <div className="workflow-container">
      <h2 className="page-title">Workflow</h2>

      {/* ================= MoU Signing ================= */}
      <SectionTitle title="MoU Signing" />

      <StepBlock
        step="1"
        title="MoU Signing"
        gradientClass="green-gradient"
      />
      <Arrow />

      <StepBlock
        step="2"
        title="Bank Details"
        gradientClass="green-gradient"
      />

      {/* ================= Contacts ================= */}
      <SectionTitle title="Contacts" />

      <StepBlock
        step="3"
        title="SDMA Office"
        gradientClass="purple-gradient"
      />
      <Arrow />

      <StepBlock
        step="4"
        title="SDMA Contact Details"
        gradientClass="purple-gradient"
      />
      <Arrow />

      <StepBlock
        step="5"
        title="District Nodal Officer"
        gradientClass="purple-gradient"
      />

      {/* ================= Trainings ================= */}
      <SectionTitle title="Trainings" />

      <StepBlock
        step="6"
        title="Training Institutes"
        gradientClass="pink-gradient"
      />
      <Arrow />

      <StepBlock
        step="7"
        title="Trainer Details"
        gradientClass="pink-gradient"
      />
      <Arrow />

      <StepBlock
        step="8"
        title="Training Schedule"
        gradientClass="pink-gradient"
      />

      {/* ================= Volunteers ================= */}
      <SectionTitle title="Volunteers" />

      <StepBlock
        step="9"
        title="Volunteer Registration"
        gradientClass="blue-gradient"
      />
      <Arrow />

      <StepBlock
        step="10"
        title="Update Training Batch & Mark as Completed"
        gradientClass="blue-gradient"
      />
      <Arrow />

      <StepBlock
        step="11"
        title="Insurance to Volunteers"
        gradientClass="blue-gradient"
      />

      {/* ================= Finance ================= */}
      <SectionTitle title="Finance & Purchases" />

      <StepBlock
        step="12"
        title="Amount Spent"
        gradientClass="cyan-gradient"
      />
      <Arrow />

      <StepBlock
        step="13"
        title="ERK Items"
        gradientClass="cyan-gradient"
      />
      <Arrow />

      <StepBlock
        step="14"
        title="ERK Purchase Details"
        gradientClass="cyan-gradient"
      />
      <Arrow />

      <StepBlock
        step="15"
        title="EERR Items"
        gradientClass="cyan-gradient"
      />
      <Arrow />

      <StepBlock
        step="16"
        title="EERR Purchase Details"
        gradientClass="cyan-gradient"
      />
      <Arrow />

      <StepBlock
        step="17"
        title="Audit Report"
        gradientClass="cyan-gradient"
      />

      <div className="check-icon">
        <CheckOutlined />
      </div>
    </div>
  );
};
