import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [isOpen, setIsOpen] = useState(showItems);
  const handleClick = () => {
    setShowIndex();
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
        color: "#ff6347",
      }}
    >
      <div
        className="display_flex__between my-1 px-5 p-2"
        style={{ cursor: "pointer" }}
        onClick={handleClick} // Toggle on click
      >
        <h2>
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <span>⬇️</span>
      </div>
      {isOpen && showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
