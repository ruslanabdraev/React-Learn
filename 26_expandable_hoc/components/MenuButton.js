import {Component} from 'react'

export default class MenuButton extends Component{
    constructor(props){
        super(props)
    }
    
    componentWillReceiveProps(nextProps){
        const collapsed = (nextProps.collapsed && nextProps.collapsed === true)?
            true:
            false
        this.setState({collapsed})
    }

    render(){
        const {children, collapsed, txt, expandCollapse} = this.props
        return(
            <div className="pop-button">
                <button onClick={expandCollapse}>{txt}</button>
                {
                    (!collapsed) ?
                        <div className="pop-up">{children}
                        </div>:
                        ""
                }
            </div>
        )
    }

}