function ItemList({ items, onRemoveItem }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-item"
          onClick={() => onRemoveItem(item.id)}
          title="Poista"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
