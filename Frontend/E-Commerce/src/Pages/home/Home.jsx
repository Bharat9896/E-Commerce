import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
      title: "Roshni Jewellers",
      subtitle: "Trusted Since 2015 • BIS Certified Gold",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      title: "Wedding Collection",
      subtitle: "Elegant Bridal Jewellery • Up to 20% OFF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      title: "Pure Gold & Diamond",
      subtitle: "Hallmarked Jewellery with Lifetime Trust",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      {/* HEADER START */}
      <header className="header">

        {/* LOGO */}
        <div className="logo">
          <img
            src="Logo.png"
            alt="Roshni Jewellers"
            className="logo-img"
          />
          <span>ROSHNI JEWELLERS</span>
        </div>

        {/* NAV */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Gold</a>
          <a href="#">Diamond</a>
          <a href="#">Wedding</a>
          <a href="#">Contact</a>
        </nav>

        {/* ACTIONS */}
        <div className="actions">
          <button className="btn" onClick={() => navigate("/signup")}>
            Signup
          </button>

          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>

      </header>
      {/* HEADER END */}

      {/* HERO SLIDER */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>Explore Collection</button>
            </div>
          </div>
        ))}
      </section>

      {/* TRUST */}
      <section className="trust">
        <div>💎 100% Hallmarked Gold</div>
        <div>🛡 Lifetime Trust</div>
        <div>🚚 Free Delivery</div>
        <div>💍 Wedding Specialist</div>
      </section>

      {/* COLLECTIONS */}
      <section className="choices">
        <h2>Our Collections</h2>
        <div className="grid">
          <div className="choice">Gold Jewellery</div>
          <div className="choice">Diamond Jewellery</div>
          <div className="choice">Bridal Sets</div>
          <div className="choice">Daily Wear</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Featured Designs</h2>
        <div className="grid">
          {[1, 2, 3, 4].map((i) => (
            <div className="product" key={i}>
              <img
                src={`https://via.placeholder.com/300x300?text=Gold+Design+${i}`}
                alt=""
              />
              <h3>Premium Gold Set {i}</h3>
              <p>Starting ₹{(25000 + i * 7000).toLocaleString()}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Roshni Jewellers</h2>
        <p>
          Since 2015, we deliver pure gold, diamond & bridal jewellery with
          trust, purity & craftsmanship.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>📍 Main Market, Haryana</p>
        <p>📞 +91 9876543210 | ✉ info@roshnijewellers.com</p>
        <p>© 2026 Roshni Jewellers</p>
      </footer>

    </div>
  );
};

export default Home;