// //import {createClass} from 'react' -  createClass method is part of create-react-class module
//  import createClass from 'create-react-class'
//  import PropTypes from 'prop-types'
//  import Star from './Star';
 
//  const StarRating = createClass({
//      displayName: 'StarRating',
//      propTypes:{
//          totalStars: PropTypes.number
//      },
//      getDefaultProps(){
//          return {
//              totalStars: 5
//          }
//      },
//      getInitialState(){
//          return{
//              starsSelected: 0
//          }
//      },
//      change(starsSelected){
//          this.setState({starsSelected})
//      },
//      render(){
//          const {totalStars} = this.props
//          const {starsSelected} = this.state
         
//          return(
//              <div className="star-rating">
//                 {[...Array(totalStars)].map((n, i)=>
//                     <Star key={i}
//                         selected={i<starsSelected}
//                         onClick={()=> this.change(i+1)}/>
//                 )}
//                 <p>{starsSelected} of {totalStars} stars</p>
//              </div>
//          )
//      }
//  })

//  export default StarRating
import Star from './Star';

 const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f})=>
    <div className="star-rating">
            {[...Array(totalStars)].map((n, i)=>
                <Star key={i} selected={i<starsSelected} onClick={()=> onRate(i+1)}/>
            )}
        <p>{starsSelected} of {totalStars} stars</p> 
    </div>

export default StarRating