import React from 'react'
import {render} from 'react-dom'
import AddColorForm from '../components/AddColorForm';

export const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

window.React = React
render(
    <AddColorForm onNewColor={logColor} />,
    document.getElementById("react-container")
)