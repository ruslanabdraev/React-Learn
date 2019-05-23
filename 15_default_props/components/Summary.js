import PropTypes from 'prop-types'

const Summary = ({ingredients, steps, title}) =>
        <div>
            <h1>{title}</h1>
                <p> {ingredients} Ingredients | {steps} Steps </p>
        </div>

Summary.propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
}

Summary.defaultProps = {
    ingredients: 1,
    steps: 1,
    title: "[Untitled recipe]"
}

export default Summary