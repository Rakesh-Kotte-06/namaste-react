// React
import { useParams } from "react-router-dom";

// Common Components
import Shimmer from "./Shimmer";

// Utils
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // params
  const { resId } = useParams();

  // useState
  const [showIndex, setShowIndex] = useState(null);
  // Custom Hook
  const resInfo = useRestaurantMenu(resId);
  // destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // accessing itemCards

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Render
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center display_flex__column flex__column gap-1 mt-2">
      <h1>{name}</h1>
      <p>
        <span>{cuisines.join(", ")}</span>
        <span> - {costForTwoMessage}</span>
      </p>
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
