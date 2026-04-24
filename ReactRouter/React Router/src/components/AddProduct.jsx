import React, { useState } from "react";

function AddProduct() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    const newProduct = {
      id: String(id),
      title: name,
      price: price,
    };

    fetch("http://localhost:1488/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server saved this:", data);
        alert(`Saved! Server assigned ID: ${data.id}`);
        setId("");
        setName("");
        setPrice("");
      })
      .catch((err) => alert("Error!"));
  };

  return (
    <div className="page-container add-page">
      <h1 className="page-title">Add New Product</h1>
      <form className="action-form" onSubmit={handleAdd}>
        <div className="input-group">
          <label>Custom ID:</label>
          <input
            className="form-input"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g. 101"
          />
        </div>
        <div className="input-group">
          <label>Product Title:</label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
          />
        </div>
        <div className="input-group">
          <label>Price ($):</label>
          <input
            className="form-input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price..."
          />
        </div>
        <button type="submit" className="submit-btn add-btn">
          Save to DB
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
