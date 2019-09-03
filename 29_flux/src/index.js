import React from 'react'
import ReactDOM from 'react-dom'
//import render from 'react-dom'

window.React = React
// render(
//     <App />,
//     document.getElementById("react-container")
// )

import CountDown from '../components/CountDown'
import CountDownDispatcher from '../components/CountDownDispatcher'
import CountDownActions from '../components/CountDownActions'
import CountDownStore from '../components/CountDownStore'


const appDispatcher = new CountDownDispatcher()
const actions = CountDownActions(appDispatcher)
const store = new CountDownStore(10, appDispatcher)


const render = count => ReactDOM.render(
    <CountDown count={count} {...actions}></CountDown>,
    document.getElementById("react-container")
)

store.on("TICK", ()=> render(store.count))
store.on("RESET", ()=> render(store.count))
render(store.count)
