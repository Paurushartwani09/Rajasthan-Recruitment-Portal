import React from "react";
import { Card, Typography, Col  } from "antd";

const { Text } = Typography;

function CommonCard({ logo, title, count, label}) {
  return (
    <Col xs={24} sm={12} lg={6}>
 
      <Card
        className="app-card h-100"
        hoverable
        bordered={false}
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div className="card-body">
    
          <div className="d-flex align-items-center gap-3 mb-3">
            <img
              src={logo}
              alt={`${title} logo`}
              className="rounded-circle"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
              }}
            />
            <h6 className="fw-bold mb-0">{title}</h6>
          </div>

         
          <p className="mb-0">
            <Text strong className="text-primary fw-bold fs-5">
              {count}
            </Text>{" "}
            <Text type="secondary" className="text-muted">
              {label}
            </Text>
          </p>
        </div>
      </Card>
    </Col>
  );
}

export default CommonCard;
