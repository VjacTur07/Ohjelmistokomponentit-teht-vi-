import React, { useState } from "react";

function EditProduct() {
  const [id, setId] = useState("");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = {};
    if (newName) updatedData.title = newName;
    if (newPrice) updatedData.price = newPrice;

    fetch(`http://localhost:1488/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      if (res.ok) alert(`Product ${id} updated!`);
      else alert("Product not found!");
    });
  };

  return (
    <div className="page-container edit-page">
      <h1 className="page-title">Update Product</h1>
      <form className="action-form" onSubmit={handleUpdate}>
        <div className="input-group">
          <label>Target ID:</label>
          <input
            className="form-input"
            type="text"
            placeholder="ID to edit"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>New Title:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Leave empty if no change"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>New Price ($):</label>
          <input
            className="form-input"
            type="number"
            placeholder="New price"
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn edit-btn">
          Apply Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
