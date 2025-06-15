import { use, useState } from "react";
import { LOGO_URL } from "../assets/constants";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");
  let navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="rocket Logo"
          width="60"
          height="auto"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Food Cart</li>
        </ul>
        
        <button
          className="login"
          onClick={() => {
            logButton === "Login"
              ? setLogButton("Logout")
              : setLogButton("Login");
            navigate("/login");
          }}
        >
          {logButton}
        </button>
        </div>
      
    </div>
  );
};

export default Header;
