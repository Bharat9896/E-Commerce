import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // ADD PRODUCT
  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="admin">

      <h1>💎 Roshni Jewellers Admin Panel</h1>

      {/* FORM */}
      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* PRODUCT LIST */}
      <div className="list">
        {products.length === 0 ? (
          <p>No products added yet</p>
        ) : (
          products.map((p) => (
            <div className="card" key={p.id}>
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
              <button onClick={() => deleteProduct(p.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Admin;