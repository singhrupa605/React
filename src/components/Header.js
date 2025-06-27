import { useState, useContext, useEffect, useReducer } from "react";
import { LOGO_URL } from "../assets/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-orange-100 shadow-md w-full">
      
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="rocket Logo"
          width="60"
          height="auto"
        />
      </div>
     
        <ul className="flex flex-wrap gap-3 items-center">
          <li>{isOnline ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="text-xl font-bold">
            <Link to={"/cart"}>Cart🛒({cartItems.length})</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
          onClick={() => {
            logButton === "Login"
              ? setLogButton("Logout")
              : setLogButton("Login");
          }}
        >
          <Link to={"/login"}>{logButton}</Link>
        </button>
        <h1 className="font-bold">{loggedInUser}</h1>
        </ul>

        
      </div>
  
  );
};

export default Header;
