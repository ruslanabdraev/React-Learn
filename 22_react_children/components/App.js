import {Children, Component} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component{
    constructor()
    {
        super()
    }

    render(){
        const age = 22
        return(
            <Display ifTruthy={age>=21}>
                <WhenTruthy>
                    <h1>You can Enter</h1>
                </WhenTruthy>
                <WhenFalsy>
                    <h1>Bit it Kid</h1>
                </WhenFalsy>
            </Display>
        )
    }
}

const findChild = (children, child) =>
    Children.toArray(children)
            .filter(c=>c.type === child)[0]

const WhenTruthy = ({children}) =>
    Children.only(children)

const WhenFalsy = ({children}) =>
    Children.only(children)

const Display = ({ifTruthy=true, children})=>
    (ifTruthy) ? findChild(children, WhenTruthy) :  findChild(children, WhenFalsy)

