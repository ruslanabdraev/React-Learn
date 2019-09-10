import {Component} from 'react'
import IDEList from './IDEList'
import idelistData from '../data/ide-list'
import Screen from './Screen'
import Hotkeys from 'react-hot-keys';

// const App = () =>
// <Hotkeys keyName="ctrl+k" onKeyDown={(keyName, e, handle)=>{
//     alert(`keyName: ${keyName}; e: ${e}; handle: ${handle}`)
//     }}>
//     <IDEList data={idelistData}></IDEList>
//     <br/>
//     <Screen source="../data/VisualStudio.jpg" ></Screen>
// </Hotkeys>

class App extends Component{
    constructor(props){
        super(props)

        this.changeScreen = this.changeScreen.bind(this)

        this.state = { source: "VisualStudio.jpg" }
    }

    changeScreen(e, source){
        e.preventDefault()
        
        if(source === "VisualStudio.jpg"){
            this.setState({source: "VisualStudio2.jpg"})
        }

        if(source === "VisualStudio2.jpg"){
            this.setState({source: "VisualStudio.jpg"})
        }
    }

    render()
    {
        return <Hotkeys keyName="ctrl+k,ctrl+p" onKeyDown={(keyName, e, handle)=>{
                this.changeScreen(e, this.state.source)
                }}>
                <IDEList data={idelistData}></IDEList>
                <br/>
                <Screen source={`../data/${this.state.source}`} ></Screen>
        </Hotkeys>
    }

}





export default App 