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


import {createStore, combineReducers} from 'redux'

const initialState = {
    colors: [
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
            title: "Rad Red",
            color: "#FF0000",
            rating: 3,
            timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
            title: "Crazy Green",
            color: "#00FF00",
            rating: 0,
            timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
            title: "Big Blue",
            color: "#0000FF",
            rating: 5,
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        }
    ]
}

// const store = createStore(
//     combineReducers({colors, sort}),
//     initialState
// )

const store = createStore(
    combineReducers({colors, sort}),
    (localStorage['redux-store'])?
    JSON.parse(localStorage['redux-store']) : {}
)

store.subscribe(()=>
    localStorage['redux-store']  = JSON.stringify(store.getState())
)

// store.subscribe(()=>
//     console.log('color count: ', store.getState().colors.length)
// )

console.log('current color count', store.getState().colors.length)
console.log('current state', store.getState())

let uniqueId = 0

store.dispatch({
    type: "ADD_COLOR",
    id: uniqueId++,
    title: "Party Pink",
    color: "#F142FF",
    timestamp: new Date().toString()
})