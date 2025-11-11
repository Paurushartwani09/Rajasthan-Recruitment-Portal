import { Menu } from "antd";
import React from "react";

const NavBar = ({ items = [], className, mode = "horizontal", onClick, id }) => {
  return (
    <nav className="navbard">
      <Menu
        id={id}
        mode={mode}
        className={className}
        onClick={onClick}
        items={items}
      />
    </nav>
  );
};

export default NavBar;
