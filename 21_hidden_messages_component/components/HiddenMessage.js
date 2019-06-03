import {Component} from 'react'

export default class HiddenMessage extends Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: (props.hide)?props.hide : true
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({hidden: nextProps.hide})
    }

    render(){
        const {children} = this.props
        const {hidden} = this.state
        return(
            <p>
                {(hidden) ?
                    children.replace(/[a-zA-z0-9]/g, "x"):
                    children
                }
            </p>
        )
    }
}