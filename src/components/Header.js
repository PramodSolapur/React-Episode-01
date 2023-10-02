import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState(true);

  return (
    <header>
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => setBtnName(!btnName)}>
            {btnName ? "login" : "logout"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
