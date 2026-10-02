import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      })
    );
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2 onClick={() => onNavigate("home")}>
          Paradise Nursery
        </h2>

        <div className="nav-links">
          <button onClick={() => onNavigate("home")}>
            Home
          </button>

          <button onClick={() => onNavigate("products")}>
            Continue Shopping
          </button>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <button onClick={() => onNavigate("products")}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>
                      Price: ${item.price}
                    </p>

                    <p>
                      Subtotal: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => decreaseQuantity(item)}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() =>
                        dispatch(removeItem(item.name))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>
                Total: ${total.toFixed(2)}
              </h2>

              <button
                onClick={() => onNavigate("products")}
              >
                Continue Shopping
              </button>

              <button
                onClick={() =>
                  alert("Thank you for your purchase!")
                }
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;