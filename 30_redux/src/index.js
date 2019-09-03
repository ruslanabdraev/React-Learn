import color from '../reducers/color'
import colors from '../reducers/colors'
import sort from '../reducers/sort'
import C from '../reducers/constants'
//import React from 'react'
//import render from 'react-dom'

//window.React = React
// render(
//     <App />,
//     document.getElementById("react-container")
// )

const action = {
    type: "ADD_COLOR",
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    color: "#0000FF",
    title: "Big Blue",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
}

//console.log(color({}, action))

//===================================================================
const existingColor = {
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    title: "Big Blue",
    color: "#0000FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
    rating: 0
}

const newAction = {
    type: "RATE_COLOR",
    id: "4243e1p0-9abl-4e90-95p4-8001l8yf3036",
    rating: 4
}

//console.log(color(existingColor, newAction))

//====================================================================
const currentColors = [{
        id: "9813e2p4-3abl-2e44-95p4-8001l8yf3036",
        title: "Berry Blue",
        color: "#000066",
        rating: 0,
        timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }]

const actionForCurrentColors = {
    type: "ADD_COLOR",
    id: "5523e7p8-3ab2-1e35-95p4-8001l8yf3036",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
}

// console.log('colors before adding action')
// console.log(currentColors)

// console.log('current colors:')
// console.log(colors(currentColors, actionForCurrentColors))

//====================================================================

const state = "SORTED_BY_DATE"
const actionSort = {
    type: "SORT_COLORS",
    sortBy: "SORTED_BY_TITLE"
}
console.log(sort(state, actionSort) ) // "SORTED_BY_TITLE"