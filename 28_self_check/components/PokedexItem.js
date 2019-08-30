import React from "react";

export default function PokedexItem({ item, details, OnClick = f => f }) {
  return details.name === item.name ? (
    <div className="card">
      <b>
      <p>Name: {details.name}</p>
      <p>Weight: {details.weight}</p>
      <p>Height: {details.height}</p>
      <p>front_default: {details.front_default}</p>
      </b>
    </div>
  ) : (
    <p onClick={()=>OnClick(item.name)}>{item.name}</p>
  );
}
