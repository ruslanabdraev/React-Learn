import React from 'react'
import {render} from 'react-dom'
import Wrapper from '../components/Wrapper';


window.React = React
render(
    <Wrapper />,
    document.getElementById("react-container")
)