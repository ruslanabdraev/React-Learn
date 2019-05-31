import {Component} from 'react'
import {findDOMNode, unmountComponentAtNode} from 'react-dom'
import Clock from "./Clock";
import MemberList from "./MemberList";

const App = (target)=>
        <div>
            <Clock onClose={()=> console.log("TODO: hide component")} />
            <MemberList count="3"></MemberList>
        </div>

export default App