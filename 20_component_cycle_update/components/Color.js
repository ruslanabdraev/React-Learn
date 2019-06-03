import {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

export default class Color extends Component{
    constructor(props)
    {
        super(props)
    }
    componentWillMount(){
        this.style = { backgroundColor: "#CCC"}
    }
    
    shouldComponentUpdate(nextProps)
    {
        const {rating} = this.props
        return rating !== nextProps.rating
    }
    componentWillUpdate(nextProps){
        const {title, rating} = this.props
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    componentDidUpdate(prevProps){
        const {title, rating} = this.props
        const status = (rating > prevProps.rating ) ? 'better' : 'worse'
        this.refs.title.style.backgroundColor = ""
        this.refs.title.style.color = "black"
        //console.log(`${title} is getting ${status}`)
    }

    render(){
        const {title, color, rating, onRate} = this.props
        return(
        <section className="color" style={this.style}>
            <h1 ref="title">{title}</h1>    
            <div className="color" style={{backgroundColor: color}}>
            </div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </div>
        </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f
}