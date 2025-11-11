import React, { useState } from "react";
import CommonAllData from "./CommonAllData";
import CustomButton from "./Button";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const items = [
  { label: "Home", key: "homepage", id: "homepage" },
  { label: "SSO ID", key: "ssoid", id: "ssoid" },
  { label: "Admit Card", key: "admitcard", id: "admitcard" },
  { label: "Result", key: "result", id: "result" },
  { label: "FAQs", key: "faqs", id: "faqs" },
];

const Navigation = () => {
  const [activeKey, setActiveKey] = useState("homepage");

  const handleClick = (key) => {
    setActiveKey(key);
    alert(`You clicked on ${key}`);
  };

  return (
    <Layout>
      <Header className="app-header">
        <Menu
          mode="horizontal"
          selectedKeys={[activeKey]}
          className="app-menu"
          items={items.map((item) => ({
            ...item,
            label: (
              <CustomButton
                type={activeKey === item.key ? "primary" : "default"}
                onClick={() => handleClick(item.key)} 
                className={`nav-btn ${
                  activeKey === item.key ? "active" : ""
                }`}
                id={item.id}
                buttontext={item.label}
              />
            ),
          }))}
        />
      </Header>
      <CommonAllData />
    </Layout>
  );
};

export default Navigation;
