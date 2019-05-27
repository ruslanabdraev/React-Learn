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

import {Component} from 'react'
import PropTypes from 'prop-types'
import Star from './Star';

 export default class StarRating extends Component {
     constructor(props){
         super(props)
         this.state = {
             starsSelected: 0
         }

         this.change = this.change.bind(this)
     }

     change(starsSelected){
        this.setState({starsSelected})
     }

     render(){
        const {totalStars} = this.props
        const {starsSelected} = this.state
        
        return(
            <div className="star-rating">
               {[...Array(totalStars)].map((n, i)=>
                   <Star key={i}
                       selected={i<starsSelected}
                       onClick={()=> this.change(i+1)}/>
               )}
               <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
}

StarRating.defaultProps = {
    totalStars: 5
}