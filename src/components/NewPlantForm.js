import React, { useState } from "react";

export default function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: formData.price.toString(),
      }),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        addPlant(newPlant);
        setFormData({ name: "", image: "", price: 0 });
      });
  }

  function handleChange(event) {
    const value =
      event.target.name === "price"
        ? parseFloat(event.target.value)
        : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}
