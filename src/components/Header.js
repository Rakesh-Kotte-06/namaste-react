import Restaurant_logo from "../../Assets/Restaurant_logo.jpg";

const Header = () => {
  return (
    <div className={"header display_flex__between"}>
      <div>
        <img className="logo" src={Restaurant_logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="display_flex__center">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
