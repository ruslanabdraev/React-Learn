import React from 'react'
import {render} from 'react-dom'
import RandomMeUsers from '../components/RandomMeUsers';

window.React = React
render(
    <RandomMeUsers count={10} />,
    document.getElementById("react-container")
)