import React from "react";
import PlantCard from "./PlantCard";

export default function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return <PlantCard key={plant.id} plant={plant} />;
      })}
    </ul>
  );
}
