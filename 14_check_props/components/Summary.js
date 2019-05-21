
var createClass = require('create-react-class')
import PropTypes from 'prop-types'

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: PropTypes.string
    },
    getDefaultProps(){
        return{
            ingredients: 0,
            steps: 0,
            title: "[recipe]"
        }
    },
    render(){
        const {ingredients, steps, title} = this.props
        return(
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients | </span>
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
})

export default Summary