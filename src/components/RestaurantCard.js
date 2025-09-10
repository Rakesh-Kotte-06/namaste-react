import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, constForTwo, sla } =
    restData;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card">
      <img
        alt="Restaurant Card Image"
        className="res-card__img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 style={{ paddingTop: "14px" }}>{name}</h3>
      <h4 style={{ paddingTop: "14px" }}>{cuisines.join(", ")}</h4>
      <h4 style={{ paddingTop: "14px" }}>{avgRating} Stars</h4>
      <h4 style={{ paddingTop: "14px" }}>{constForTwo}</h4>
      <h4 style={{ paddingTop: "14px" }}>{sla.slaString}</h4>
      <h4 style={{ paddingTop: "14px" }}>{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component (HOC)
export const WithDiscount = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
