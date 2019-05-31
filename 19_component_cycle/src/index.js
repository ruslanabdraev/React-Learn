import React from 'react'
import {render} from 'react-dom'
import App from '../components/App';
const container = document.getElementById("react-container")


window.React = React
render(
    <App target={container} ></App>,
    document.getElementById("react-container")
)