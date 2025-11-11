import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

const items = [
  { key: "1", label: "Profile" },
];

const DropdownInput = () => {
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    setOpen(false);
  };

  return (
    <Dropdown
      trigger={["click"]}
      open={open}
      onOpenChange={(flag) => setOpen(flag)}
      menu={{
        items,
        selectable: true,
        selectedKeys: [selectedKey],
        onClick: handleMenuClick,
      }}
      overlayClassName="custom-dropdown"
      placement="bottom"
    >
      <Typography.Link
        onClick={(e) => e.preventDefault()}
        className={`dropdown-trigger ${open ? "active" : ""}`}
      >
        <Space>
          {items.find((i) => i.key === selectedKey)?.label || "Select option"}
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropdownInput;
