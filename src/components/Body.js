import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const styleSearch = {
  color: "blue",
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  useEffect(() => {
    // fetchData();
    console.log("useEffect called");
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    console.log(json);
  };
  console.log("Body Rendered");
  return (
    <div className="body">
      <div className="search" style={{ fontWeight: 900, ...styleSearch }}>
        Search
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked!");
            // filter the restaurants based on rating
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            setListOfRestaurants(filteredList);
          }}
          onMouseOver={() => {
            console.log("Mouse Over on Button!");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container display_flex">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
