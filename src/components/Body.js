import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { WithDiscount } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const RestaurantCardWithDiscount = WithDiscount(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  // Fetch data from the API and update the state;
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5412112&lng=78.43384809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      // Extracting the restaurants from the data
      let restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants || []);
      setFilteredList(restaurants || []);
    } catch (error) {}
  };
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="search__box border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search__btn bg-green-100 p-1 rounded-md"
            onClick={() => {
              const searchedList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter__btn"
          onClick={() => {
            // filter the restaurants based on rating
            const filteredRestautants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4.3;
              }
            );
            setFilteredList(filteredRestautants);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>userName: </label>
          <input
            type="text"
            placeholder="userName"
            className="search__box border border-solid"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container display_flex">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="wrapper__link"
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardWithDiscount restData={restaurant.info} />
            ) : (
              <RestaurantCard restData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
