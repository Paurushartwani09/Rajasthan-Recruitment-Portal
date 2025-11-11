import React from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import { TranslationOutlined } from "@ant-design/icons";

const ThemeNavigation = () => {
  const handleThemeChange = (theme) => {
    if (typeof window.setTheme === "function") {
      window.setTheme(theme);
    } else {
      console.log("Theme function not found");
    }
  };

  const themeMenu = (
    <Menu>
      <Menu.Item onClick={() => handleThemeChange("blue")}>Blue</Menu.Item>
      <Menu.Item onClick={() => handleThemeChange("pink")}>Pink</Menu.Item>
      <Menu.Item onClick={() => handleThemeChange("orange")}>Orange</Menu.Item>
    </Menu>
  );

  return (
    <div className="topbar d-flex align-items-center py-1">
      <div className="container-fluid container-space">
        <Row>
          <Col lg={8} md={12} xs={12} className="gvtind">
            <a
              href="https://rajasthan.gov.in"
              title="Government of Rajasthan"
              target="_blank"
              rel="noreferrer"
            >
              
              <span><img src="../src/assets/ind-flag.svg" alt=""   style={{ marginRight: "8px", verticalAlign: "middle" }}/>  राजस्थान सरकार | Government of Rajasthan</span>
            </a>
          </Col>

          <Col lg={16} md={12} xs={12} className="text-end">
            <div className="access-container d-flex align-items-center justify-content-end">
              <div id="access-icons" className="d-flex align-items-center">
                <a className="cursor-p me-3" onClick={() => window.getScreenReader?.()}>
                  Screen Reader Access
                </a>
                <a href="#" id="increaseFont" className="me-2">
                  A<sup>+</sup>
                </a>
                <a href="#" id="linkReset" className="me-2">
                  A
                </a>
                <a href="#" id="decreaseFont" className="me-2">
                  A<sup>-</sup>
                </a>
                <a href="#" id="contrast" className="me-3">
                  <i className="bi bi-circle-half"></i>
                </a>
                <a href="#examLifeCycle" id="skip" className="me-3">
                  Skip to content
                </a>
                <a href="#examLifeCycle" id="skip" className="me-3">
                 Theme
                </a>

              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ThemeNavigation;
