import { Button } from "antd";
import React from "react";

const CustomButton = ({ type, onClick, className, id, buttontext }) => {
  return (
    <Button type={type} onClick={onClick} className={className} id={id}>
      {buttontext}
    </Button>
  );
};

export default CustomButton;
