import React, { useState } from "react";

function DeleteProduct() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    fetch(`http://localhost:1488/products/${id}`, {
      method: "DELETE",
    }).then(() => alert("Product removed from system."));
  };

  return (
    <div className="page-container delete-page">
      <h1 className="page-title">Delete Resource</h1>
      <div className="action-form">
        <p className="warning-text">Warning: This action cannot be undone.</p>
        <div className="input-group">
          <input
            className="form-input"
            type="text"
            placeholder="Enter ID"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button className="submit-btn delete-btn" onClick={handleDelete}>
          Confirm Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteProduct;
