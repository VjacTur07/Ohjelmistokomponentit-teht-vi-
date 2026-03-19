import React from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
