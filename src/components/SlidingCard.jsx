import React from "react";
import { Card, Typography } from "antd";

const { Text } = Typography;

function CommonSliderCard({ logo, title, alt, onClick, className = "" }) {
  return (
    <Card
      hoverable
      bordered={false}
      onClick={onClick}
      className={`slider-card ${className}`}
      bodyStyle={{
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img
        src={logo}
        alt={alt || `${title} logo`}
        className="slider-card-img"
        draggable={false}
      />
      <Text
        className="slider-card-title"
        style={{
          fontSize: "16px",
          color: "#222",
          textAlign: "center",
          lineHeight: 1.3,
          marginTop: "10px",
          minHeight: "40px",
        }}
      >
        {title}
      </Text>
    </Card>
  );
}

export default CommonSliderCard;
