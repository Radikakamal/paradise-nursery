import { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navigate = (newPage) => {
    setPage(newPage);
  };

  if (page === "products") {
    return (
      <ProductList onNavigate={navigate} />
    );
  }

  if (page === "cart") {
    return (
      <CartItem onNavigate={navigate} />
    );
  }

  return (
    <div className="home-page">
      <nav className="navbar">
        <h2 onClick={() => navigate("home")}>
          Paradise Nursery
        </h2>

        <div className="nav-links">
          <button onClick={() => navigate("home")}>
            Home
          </button>

          <button onClick={() => navigate("products")}>
            Plants
          </button>

          <button onClick={() => navigate("cart")}>
            Cart ({cartCount})
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful plants for your home and office.
            Make your space greener, healthier, and happier.
          </p>

          <button
            className="get-started"
            onClick={() => navigate("products")}
          >
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default App;