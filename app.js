import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import Restaurant_logo from "./Assets/Restaurant_logo.jpg";
// create react element using Core React

/*  ** Heading
 * Logo
 * Nav Items
 ** Body
 * Search
 * Restaurant Container
 * Restaurant Card
 ** Footer
 * Copyright
 * Links
 * Address
 * Contact
 */

const Header = () => {
  return (
    <div className={"header display_flex__between"}>
      <div>
        <img className="logo" src={Restaurant_logo} />
      </div>
      <div className="nav-items">
        <ul className="display_flex__center">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleSearch = {
  color: "blue",
};
const RestaurantCard = (props) => {
  console.log(props);
  const {
    restName = "Meghana Foods",
    cuisine = "Biryani, North Indian, Asian",
  } = props;
  return (
    <div className="res-card">
      <img
        alt="Restaurant Card Image"
        className="res-card__img"
        src={Restaurant_logo}
      />
      <h3>{props.restName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search" style={{ fontWeight: 900, ...styleSearch }}>
        Search
      </div>
      <div className="res-container display_flex">
        <RestaurantCard
          restName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard restName="KFC" cuisine="Burger, Fast Food" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-container">
      {/* Header */}
      {/* Body */}
      {/* Footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
