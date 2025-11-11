
import React from "react";
import { Row, Col, Card } from "antd";
import applsvg from "../assets/applsvg.svg";
import otrsvg from "../assets/otrsvg.svg";
import recsvg from "../assets/recsvg.svg";
import emplsvg from "../assets/emplsvg.svg";

const statsData = [
  {
    id: 1,
    label: "One Time Registration",
    value: "56,85,372",
    className: "first-card-widget",
    logo: otrsvg,
  },
  {
    id: 2,
    label: "Recruitments Published",
    value: "268",
    className: "forth-color-widget",
    logo: recsvg,
  },
  {
    id: 3,
    label: "Employment Created",
    value: "5,73,868",
    className: "second-card-widget",
    logo: emplsvg,
  },
  {
    id: 4,
    label: "Application Submitted",
    value: "4,79,55,007",
    className: "third-card-widget",
    logo: applsvg,
  },
];

function CommonAllData() {
  return (
    <Row gutter={[24, 24]} justify="center">
      {statsData.map((stat) => (
        <Col key={stat.id} xs={24} sm={12} md={6}>
          <Card hoverable className={`stat-card ${stat.className}`}>
          <div className="stat-content">
            <div className="stat-row">
              <img src={stat.logo} alt={stat.label} className="logo-img" />
              <span className="stat-number">{stat.value}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </Card>

        </Col>
      ))}
    </Row>
  );
}

export default CommonAllData;
