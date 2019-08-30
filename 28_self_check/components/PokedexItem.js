import React from "react";
import '../stylesheets/Style.css'

export default function PokedexItem({ item, details, OnClick = f => f }) {
  return details.name === item.name ? (
    <div className="card">
      <b>
      <p>Name: {details.name}</p>
      <p>Weight: {details.weight}</p>
      <p>Height: {details.height}</p>
      <p><img src={details.front_default}></img></p>
      </b>
    </div>
  ) : (
    <p onClick={()=>OnClick(item.name)}>{item.name}</p>
  );
}
