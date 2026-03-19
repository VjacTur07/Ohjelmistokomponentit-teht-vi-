import { useState } from "react";
import Form from "./Lomake";
import ItemList from "./ItemList";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), text: "omena" },
    { id: crypto.randomUUID(), text: "banaani" },
    { id: crypto.randomUUID(), text: "kiivi" },
  ]);

  const addItem = (text) => {
    const newItem = {
      id: crypto.randomUUID(),
      text: text,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (idToRemove) => {
    setItems(items.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="shopping-list-container">
      <Form onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
