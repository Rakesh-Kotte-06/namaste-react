import Restaurant_logo from "../../Assets/Restaurant_logo.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log("Current Location:", location.pathname);

  const [btnName, setBtnName] = useState("login");
  console.log("Header Component Rendered");
  return (
    <div className={"header display_flex__between"}>
      <div>
        <img className="logo" src={Restaurant_logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="display_flex__center">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                setBtnName((btnName) => {
                  return btnName === "login" ? "logout" : "login";
                });
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
