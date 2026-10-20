
import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    onSale: true,
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2299,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    onSale: false,
    discount: "",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    onSale: true,
    discount: "15% OFF",
  },
  {
    id: 4,
    name: "Classic T-Shirt",
    price: 699,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    onSale: false,
    discount: "",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 499,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    onSale: true,
    discount: "10% OFF",
  },
];


function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      {product.onSale && (
        <span className="discount-badge">
          {product.discount}
        </span>
      )}

      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-card-content">
        <p className="category">{product.category}</p>

        <h2>{product.name}</h2>

        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-text">4.8</span>
        </div>

        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          type="button"
          className="cart-button"
          onClick={() => onAddToCart(product)}
        >
          <span>＋</span> Add to Cart
        </button>
      </div>
    </article>
  );
}


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCart((previousCart) =>
      previousCart.filter((_, index) => index !== indexToRemove)
    );
  }

  const cartCount = cart.length;

  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <main className="store">
      {/* Navigation */}
      <nav className="navbar">
        <a className="brand" href="#home">
          STYLE<span>SPOT.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#products">Collections</a>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-icon-button"
            aria-label="Browse products"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            ♡
          </button>

          <button
            type="button"
            className="nav-cart"
            onClick={() => setIsCartOpen(true)}
          >
            Bag ({cartCount})
          </button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner" id="home">
        <div className="hero-content">
          <p className="hero-label">NEW SEASON · NEW STYLE</p>

          <h1>
            Find Your
            <br />
            Everyday Style.
          </h1>

          <p className="hero-description">
            Discover your favorites. Upgrade your everyday.
          </p>

          <button
            type="button"
            className="hero-button"
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Collection →
          </button>
        </div>

        <div className="hero-decoration">
          <span>STYLE</span>
          <span>YOUR</span>
          <span>STORY.</span>
        </div>
      </section>

      {/* Products Header */}
      <header className="store-header" id="products">
        <div>
          <p className="eyebrow">YOUR EVERYDAY STORE</p>
          <h1>Featured Products</h1>
          <p className="intro">
            Discover products picked just for you.
          </p>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </header>

      {/* Product Grid */}
      <section className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </section>

      {/* Footer */}
      <footer className="store-footer">
        <p>STYLESPOT. — Find Your Everyday Style.</p>
        <p>Built with React Components and Props</p>
      </footer>

      {/* Shopping Cart */}
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        >
          <section
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-header">
              <h2>Your Shopping Bag ({cartCount})</h2>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close shopping bag"
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">
                Your bag is empty. Explore our collection!
              </p>
            ) : (
              <div className="cart-items">
                {cart.map((product, index) => (
                  <article
                    className="cart-item"
                    key={`${product.id}-${index}`}
                  >
                    <img src={product.image} alt={product.name} />

                    <div>
                      <h3>{product.name}</h3>
                      <p>₹{product.price.toLocaleString("en-IN")}</p>

                      <button
                        type="button"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="cart-total">
              <span>Total</span>
              <strong>₹{cartTotal.toLocaleString("en-IN")}</strong>
            </div>

            <button
              type="button"
              className="cart-button"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
