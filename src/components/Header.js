//  React
import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// Assets
import Restaurant_logo from "../../Assets/Restaurant_logo.jpg";
// import { LOGO_URL } from "../utils/constants";

// Utils
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const location = useLocation();
  const onlineStatus = useOnlineStatus();
  const [btnName, setBtnName] = useState("login");
  const dataContext = useContext(UserContext);
  return (
    <div
      className="header display_flex__between flex justify-between shadow-lg bg-pink-100 px-2"
      style={{ backgroundColor: "#fce4ec" }}
    >
      <div>
        <img className="logo" src={Restaurant_logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="display_flex__center flex p-2 m-1 list-none">
          <li className="nav-item">
            online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/grocery">Grocery</Link>
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
          <li
            className="nav-item py-1 px-2"
            style={{ backgroundColor: "lightgrey" }}
          >
            {dataContext.loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
