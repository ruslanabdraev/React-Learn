import PropTypes from 'prop-types'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
//import FaTrashO from 'react-icons/lib/fa/trash-o'


const Color = ({title, color, rating=0, timestamp, onRemove=f=>f, onRate=f=>f}) =>
    <section className="color" >
        <h1 >{title}</h1>
        <button onClick={onRemove}>
            Remove
            {/* <FaTrashO /> */}
        </button>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={timestamp} />
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>


Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color