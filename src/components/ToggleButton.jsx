import React from "react";
import { Row, Col, Card, Tabs, List, theme } from "antd";
import StickyBox from "react-sticky-box";
import CustomButton from "./Button";

const ToggleButton = ({ notices = [], recruitments = [] }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar = (props, DefaultTabBar) => (
      <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
    <DefaultTabBar
      {...props}
      style={{
        background: colorBgContainer,
        borderRadius: 8,
      }}
    />
    </StickyBox>
  );

  return (
    <Row gutter={[24, 24]} justify="center" align="top" className="main-box">
      {/* LEFT SECTION */}
      <Col xs={24} md={12} className="left-section">
        <Card variant="outlined" bordered={false} className="transparent-card">
          <h2>Your Gateway to Government Jobs in Rajasthan</h2>
          <p className="Rajasthan-description">
            Rajasthan Recruitment Portal is a unified portal for various
            recruitments in the state of Rajasthan.
          </p>
          <ul className="otp-description">
            <li>One-time registration system for candidates through SSO</li>
            <li>Integration with Aadhaar, Jan-Aadhar and Employee ID</li>
            <li>Information system for candidates via SSO, SMS, and email</li>
            <li>Linkage with DigiLocker for document verification</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              type="default"
              buttontext="Start One Time Registration"
              onClick={() =>
                window.open("https://sso.rajasthan.gov.in/", "_blank")
              }
            />
          </div>
        </Card>
      </Col>

      {/* RIGHT SECTION */}
      <Col xs={24} md={12}>
        <Card
          title="Notice Board"
          variant="outlined"
          className="shadow-sm notice-board headerboard"
        >
          <Tabs defaultActiveKey="1" centered renderTabBar={renderTabBar}>
            {/* Notification Tab */}
            <Tabs.TabPane tab="Notification" key="1">
              <List
                dataSource={notices}
                renderItem={(item, index) => (
                  <List.Item key={index}>
                    {item.link ? (
                      <p>
                        {item.text}&nbsp;&nbsp;
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Document
                        </a>
                      </p>
                    ) : item.action ? (
                      <a onClick={item.action}>{item.text}</a>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </List.Item>
                )}
              />
            </Tabs.TabPane>

            {/* Ongoing Recruitment Tab */}
            <Tabs.TabPane tab="Ongoing Recruitment" key="2">
              <List
                itemLayout="vertical"
                dataSource={recruitments}
                renderItem={(item) => (
                  <Card className="job-card mb-3" key={item.id} variant="filled">
                    <Row gutter={[16, 16]} align="middle">
                      <Col flex="auto">
                        <h6 className="fw-semibold cursor-pointer mb-1">
                          {item.title}
                        </h6>
                        <span className="badge rounded-pill badge-outline">
                          {item.org}
                        </span>
                      </Col>
                      <Col>
                        <CustomButton
                          type="primary"
                          buttontext="Apply"
                          onClick={() =>
                            window.open(
                              "https://sso.rajasthan.gov.in/",
                              "_blank"
                            )
                          }
                        />
                        <small className="d-block text-end">{item.date}</small>
                      </Col>
                    </Row>
                  </Card>
                )}
              />
            </Tabs.TabPane>

            {/* Student Updates Tab - white background fix */}
            <Tabs.TabPane tab="Student Updates" key="3">
              <div
                style={{
                  background: "#fff",
                  minHeight: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              >
                <p>Coming Soon...</p>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};

export default ToggleButton;
