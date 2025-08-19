import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("resId:", resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log("Menu Data:", json.data?.cards[2]?.card?.card?.info);
    setResInfo(json.data);
  };
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || {};
  console.log("itemCards:", itemCards[0]?.card?.info?.name);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>
        <span>{cuisines.join(", ")}</span>
        <span> - {costForTwoMessage}</span>
      </p>
      <br />
      <h2>Menu Items:</h2>
      <p>{itemCards[0]?.card?.info?.name}</p>
      <br />
      <h3>Welcome to our restaurant! Here is our menu:</h3>
      <br />
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs. "}
            {item?.card?.info?.finalPrice / 100 ||
              item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
