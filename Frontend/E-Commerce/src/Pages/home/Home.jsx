import React, { useState, useEffect } from 'react';
import './Home.css'; // Alag CSS file banayenge

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Slider Images (aap apni images daal sakte ho)
  const slides = [
    {
      image: "https://via.placeholder.com/1920x800/ddd/333?text=Elegant+Gold+Jewellery",
      title: "Elegant Jewellery Collection",
      subtitle: "Timeless beauty for every occasion"
    },
    {
      image: "https://via.placeholder.com/1920x800/ddd/333?text=Wedding+Collection",
      title: "Wedding Special Collection",
      subtitle: "Flat 20% OFF"
    },
    {
      image: "https://via.placeholder.com/1920x800/ddd/333?text=Luxury+Jewels",
      title: "Luxury Meets Tradition",
      subtitle: "Handcrafted with Love"
    }
  ];

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <div className="logo">Elegant Jewels</div>
          
          <nav>
            <a href="#" className="active">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <div className="header-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-user" onClick={() => alert("Login/Signup Modal will open here")}></i>
          </div>
        </div>
      </header>

      {/* HERO SLIDER */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="shop-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="section categories">
        <div className="container">
          <h2>Featured Categories</h2>
          <div className="grid">
            {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((cat) => (
              <div key={cat} className="category-card">
                <h3>{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="section trending">
        <div className="container">
          <h2>Trending Products</h2>
          <div className="product-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="product-card">
                <img 
                  src={`https://via.placeholder.com/300x300/ddd/333?text=Product+${i}`} 
                  alt={`Product ${i}`} 
                />
                <h3>Product Name {i}</h3>
                <p className="price">₹{ (20000 + i * 5000).toLocaleString('en-IN') }</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEDDING OFFER */}
      <section className="offer-section">
        <div className="container">
          <h2>FLAT 20% OFF - WEDDING COLLECTION</h2>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* ABOUT / BRAND STORY */}
      <section className="section about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Crafting timeless jewellery with love and precision since 2015. 
                Every piece tells a story of elegance, tradition, and craftsmanship.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://via.placeholder.com/600x400/ddd/333?text=Our+Brand" 
                alt="Brand Story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="section reviews">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="review-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Amazing Quality!"</p>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Loved the Design!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="section instagram">
        <div className="container">
          <h2>Follow Us on Instagram</h2>
          <div className="insta-grid">
            {[1,2,3,4].map((i) => (
              <img 
                key={i}
                src={`https://via.placeholder.com/300x300/ddd/333?text=Insta+${i}`} 
                alt={`Instagram ${i}`} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to our Newsletter</h2>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>Links</h4>
              <p>Shop</p>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>Haryana, India</p>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <h4>Social Media</h4>
              <p>Instagram | Facebook</p>
            </div>
            <div>
              <p>© 2026 Elegant Jewellery. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;