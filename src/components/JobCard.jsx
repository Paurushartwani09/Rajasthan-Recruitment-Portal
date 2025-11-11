import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

function CommonJobCard({ logo, title, badge, date, onApply, onPostClick }) {
  return (
    <div className="job-card">
      <div className="job-card-row">
        <img src={logo} alt={`${badge} logo`} className="job-logo" />

        <div className="job-info">
          <Title
            level={5}
            className="job-title"
            onClick={onPostClick}
          >
            {title}
          </Title>

          <div className="job-badge">
            <span>{badge}</span>
          </div>
        </div>

        <div className="job-apply">
          <Button type="primary" className="apply-btn" onClick={onApply}>
            Apply
          </Button>
        </div>
      </div>

      <small className="job-date">{date}</small>
    </div>
  );
}

export default CommonJobCard;
