import React, { useState } from "react";

export default function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleClick() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}
