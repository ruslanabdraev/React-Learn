import React from 'react'
import {render} from 'react-dom'
import Summary from '../components/Summary';

window.React = React
render(
    <Summary />,
    document.getElementById("react-container")
)