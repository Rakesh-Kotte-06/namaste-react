import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    console.log("Item added to cart");
    dispatch(addItem(item));
  };
  return (
    <div className="p-2" style={{ color: "black" }}>
      {items.map((item) => (
        <div
          className="mt-1 pt-1 display_flex gap-2"
          key={item?.card?.info?.id}
          style={{ borderTop: "1px solid #fff" }}
        >
          <div className="positon_relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="item"
              style={{
                width: "100px",
                borderRadius: "8px",
                boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
              }}
            />
            <div
              className="position_absolute"
              style={{ top: "-5px", right: "-5px" }}
            >
              <button
                className="p-1"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
          <div>
            <h3>{item?.card?.info?.name}</h3>
            <p>{item?.card?.info?.category}</p>
            <p>{item?.card?.info?.description}</p>

            <div className="my-1">
              <span
                className="pr-2"
                style={
                  item?.card?.info?.finalPrice && {
                    textDecoration: "line-through",
                    color: "#ff6347",
                  }
                }
              >
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              {item?.card?.info?.finalPrice && (
                <span style={{ color: "green", fontWeight: "bold" }}>
                  ₹{item?.card?.info?.finalPrice / 100}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
