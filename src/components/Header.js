import { useState } from "react";
import { LOGO_URL } from "../assets/constants";

const Header = () => {
  const [logButton , setLogButton] = useState("Login")
  
  return (<div className="header">
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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Food Cart</li>
      </ul>
      <button className="login" onClick={()=>
        {
           logButton==="Login"?setLogButton("Logout"):setLogButton("Login")
        }
      }>{logButton}</button>
    </div>
  </div>
);
}

export default Header;
