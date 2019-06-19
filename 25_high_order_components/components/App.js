import RandomMeUsers from "./RandomMeUsers"
import CountryDropDown from "./CountryDropDown"

const App = ()=>
<div>
    <RandomMeUsers results={10}></RandomMeUsers>
    <CountryDropDown selected="United States"></CountryDropDown>
</div>

export default App