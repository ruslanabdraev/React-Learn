import PeopleList from "./PeopleList";
import DataComponent from './DataComponent'

// const RandomMeUsers =  DataComponent(
//     PeopleList,
//     `https://randomuser.me/api/?results=10`
// )

const RandomMeUsers = ({results}) => DataComponent(
    PeopleList,
    `https://randomuser.me/api/?results=${results}`
)

export default RandomMeUsers