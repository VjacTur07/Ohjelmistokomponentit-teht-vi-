import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="app-main-container">
        <header className="app-header">
          <NavBar />
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit" element={<EditProduct />} />
            <Route path="/delete" element={<DeleteProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
