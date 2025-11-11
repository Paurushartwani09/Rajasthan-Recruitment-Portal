import { Menu, Button } from "antd";
import logo from "../assets/reqpprt.png";
import svg from "../assets/indexlogo.svg";
import CustomButton from "./Button";

function Hello(props) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-section">
          <img
            src={svg}
            alt="Main Logo"
            className="logo-img mainlogo mainlogocode"
          />
        </div>

        <div className="right-section">
          <CustomButton
            type="primary"
            className="btn"
            buttontext={"Login"}
          />
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </nav>
    </div>
  );
}

export default Hello;
