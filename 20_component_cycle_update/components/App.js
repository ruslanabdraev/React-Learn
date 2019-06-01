import {Component} from 'react'
import ColorList from './ColorList'
import data from '../data/data'
import {v4} from 'uuid'

export default class App extends Component{
    constructor(props)
    {
        super(props)
        // this.state = {
        //     colors:[]
        // }
        this.state = data
        this.rateColor = this.rateColor.bind(this)
    }

    rateColor(id, rating){
        const colors = this.state.colors.map(color=>
             (color.id !== id)? color: {...color, rating}
        )
        this.setState({colors})
    }

    render(){
        const {rateColor, removeColor} = this
        const {colors} = this.state
        return(
            <div className="app">
                <ColorList colors={colors} onRate={rateColor}/>
            </div>
        )
    }
}