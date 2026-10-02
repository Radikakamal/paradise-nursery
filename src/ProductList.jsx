import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    category: "Air Purifying",
    name: "Snake Plant",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    category: "Air Purifying",
    name: "Peace Lily",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    category: "Air Purifying",
    name: "Spider Plant",
    price: 20,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 4,
    category: "Air Purifying",
    name: "Aloe Vera",
    price: 22,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 5,
    category: "Air Purifying",
    name: "ZZ Plant",
    price: 28,
    image: "https://images.unsplash.com/photo-1614594573969-4f5c9c3c5d7d"
  },
  {
    id: 6,
    category: "Air Purifying",
    name: "Boston Fern",
    price: 24,
    image: "https://images.unsplash.com/photo-1620803366004-119c4a4f8c1c"
  },

  {
    id: 7,
    category: "Aromatic",
    name: "Lavender",
    price: 18,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  },
  {
    id: 8,
    category: "Aromatic",
    name: "Rosemary",
    price: 16,
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662"
  },
  {
    id: 9,
    category: "Aromatic",
    name: "Mint Plant",
    price: 12,
    image: "https://images.unsplash.com/photo-1628556270448-4d4d4141e0a5"
  },
  {
    id: 10,
    category: "Aromatic",
    name: "Basil Plant",
    price: 14,
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733"
  },
  {
    id: 11,
    category: "Aromatic",
    name: "Thyme",
    price: 15,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e"
  },
  {
    id: 12,
    category: "Aromatic",
    name: "Sage Plant",
    price: 17,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e"
  },

  {
    id: 13,
    category: "Low Maintenance",
    name: "Jade Plant",
    price: 26,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc"
  },
  {
    id: 14,
    category: "Low Maintenance",
    name: "Pothos",
    price: 21,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86"
  },
  {
    id: 15,
    category: "Low Maintenance",
    name: "Rubber Plant",
    price: 32,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
  },
  {
    id: 16,
    category: "Low Maintenance",
    name: "Monstera",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594573969-4f5c9c3c5d7d"
  },
  {
    id: 17,
    category: "Low Maintenance",
    name: "Chinese Evergreen",
    price: 29,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
  },
  {
    id: 18,
    category: "Low Maintenance",
    name: "Cast Iron Plant",
    price: 27,
    image: "https://images.unsplash.com/photo-1597055181300-8b4f7e7b5c1e"
  }
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [
    "Air Purifying",
    "Aromatic",
    "Low Maintenance"
  ];

  const getQuantity = (name) => {
    const item = cartItems.find((item) => item.name === name);
    return item ? item.quantity : 0;
  };

  return (
    <div className="products-page">
      <nav className="navbar">
        <h2 onClick={() => onNavigate("home")}>Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => onNavigate("home")}>Home</button>
          <button onClick={() => onNavigate("products")}>Plants</button>
          <button onClick={() => onNavigate("cart")}>
            Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </button>
        </div>
      </nav>

      <div className="products-container">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => {
                  const quantity = getQuantity(product.name);

                  return (
                    <div className="product-card" key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      <h3>{product.name}</h3>

                      <p>${product.price}</p>

                      <button
                        onClick={() => dispatch(addItem(product))}
                        disabled={quantity > 0}
                      >
                        {quantity > 0
                          ? `Added (${quantity})`
                          : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;