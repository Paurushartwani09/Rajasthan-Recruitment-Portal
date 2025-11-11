import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

function CommonStep({ stepNumber, title, description }) {
  const isEven = parseInt(stepNumber) % 2 === 0; // check if step is even

  return (
    <a  className="stages-step">
      <Card hoverable className="step-card">
        <div className={`divisionLogo ${isEven ? "even" : "odd"}`}>
          <div className="step-number">{stepNumber}</div>
          <div className="step-label">Step</div>
        </div>

        <Title level={5} className="divisionTitle">
          {title}
        </Title>

        <Text className="divisionTitledes">{description}</Text>
      </Card>
    </a>
  );
}

export default CommonStep;
