import {Component} from 'react'
import HiddenMessages from './HiddenMessages';
import HiddenMessages2 from './HiddenMessages2';

export default class App extends Component{
    constructor()
    {
        super()
    }

    render(){
        return(
            <div>
            <div>
                <h2>Show and Hide by interval</h2>
                <HiddenMessages></HiddenMessages>
            </div>
            <div>
                <h2>Show and Hide by mouse</h2>
                <HiddenMessages2></HiddenMessages2>
            </div>
            </div>
        )
    }
}