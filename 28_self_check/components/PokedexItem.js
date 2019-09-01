import React from "react";
import '../stylesheets/Style.css'
import styled from 'styled-components'

const StyledPokedexItem = styled.div`
    background-color: cornsilk;
    width: 400px;
    border: solid 1px;
`

export default function PokedexItem({ item, details, OnClick = f => f }) {
  return details.name === item.name ? (
    <StyledPokedexItem>
      <p>Name: {details.name}</p>
      <p>Weight: {details.weight}</p>
      <p>Height: {details.height}</p>
      <p><img src={details.front_default}></img></p>
    </StyledPokedexItem>
  ) : (
    <p onClick={()=>OnClick(item.name)}>{item.name}</p>
  );
}
