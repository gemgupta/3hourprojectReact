import React from "react";
import "./CarInputlist.css";
function CarInputFood(props) {
  return (
    <ul className="list2">
      <h3>Food: </h3>
      {props.senddata3.map((item) => (
        <li key={item.id}>
          {item.name} is listed at INR {item.price} comes under {item.category} Category
        </li>
      ))}
    </ul>
  );
}

export default CarInputFood;
