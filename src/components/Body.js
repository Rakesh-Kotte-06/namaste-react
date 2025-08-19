import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);
  // Fetch data from the API and update the state;
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5412112&lng=78.43384809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log("data", data);
      // Extracting the restaurants from the data
      let restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(".....restaurants", restaurants);
      setListOfRestaurants(restaurants || []);
      setFilteredList(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Body Rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="search__box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search__btn"
            onClick={() => {
              console.log("Search Button Clicked!");
              const searchedList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedList);
              console.log("Searched List:", searchedList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter__btn"
          onClick={() => {
            console.log("Button Clicked!");
            // filter the restaurants based on rating
            const filteredRestautants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4.3;
              }
            );
            console.log("Filtered Restaurants:", filteredRestautants);
            setFilteredList(filteredRestautants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container display_flex">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="wrapper__link"
          >
            <RestaurantCard restData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
