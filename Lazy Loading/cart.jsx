import { useReducer } from "react";
import { cartReducer } from "./cartReducer";

const initialState = {
  items: [],
};

function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h2>Cart ({state.items.length})</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: { id: Date.now(), name: "Item", price: 100 },
          })
        }
      >
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>

      {state.items.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;