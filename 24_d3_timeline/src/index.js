import React from 'react'
import {render} from 'react-dom'
import Timeline from '../components/Timeline';
import historicDatesForSkiing from '../data/data'

window.React = React
render(
    <Timeline name="History of Skiing"
                data={historicDatesForSkiing} />,
    document.getElementById("react-container")
)