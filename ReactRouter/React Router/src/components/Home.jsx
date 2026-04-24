import React, { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1488/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.log("Run: npx json-server --watch db.json --port 8000"),
      );
  }, []);

  return (
    <div className="page-container home-page">
      <h1 className="page-title">Inventory Dashboard</h1>
      <div className="table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th className="th-id">ID</th>
              <th className="th-name">Name</th>
              <th className="th-price">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="table-row">
                <td className="td-id">
                  <span>{p.id}</span>
                  <button
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(p.id);
                      alert("ID copied to clipboard!");
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td className="td-name">{p.title}</td>
                <td className="td-price">{p.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
