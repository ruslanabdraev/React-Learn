import React from 'react'
import {render} from 'react-dom'
import CountryList from '../components/CountryList';


window.React = React
render(
    <CountryList />,
    document.getElementById("react-container")
)