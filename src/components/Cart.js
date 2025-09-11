import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log("Cart items:", cartItems);
  return (
    <div>
      <h1 className="p-2">Cart</h1>
      <div className="cart-actions p-2">
        <button className="clear-cart-btn px-2 py-1" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="p-2">Your cart is empty</p>
      ) : (
        <div
          className="p-0 m-0"
          style={{
            backgroundColor: "#ccc",
            boxShadow: "0 0 5px 1px rgba(0, 0, 0, 0.2)",
            color: "#ff6347",
          }}
        >
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};
export default Cart;
