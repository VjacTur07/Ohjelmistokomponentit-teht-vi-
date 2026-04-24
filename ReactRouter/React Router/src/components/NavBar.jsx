import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">
            Add Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/edit" className="nav-link">
            Edit Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/delete" className="nav-link">
            Delete Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
