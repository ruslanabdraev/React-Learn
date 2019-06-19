import RandomMeUsers from "./RandomMeUsers"
import CountryDropDown from "./CountryDropDown"

const ComponentRandomMeUsers = RandomMeUsers({results:10})

const App = ()=>
<div>
    <ComponentRandomMeUsers></ComponentRandomMeUsers>
    <CountryDropDown selected="United States"></CountryDropDown>
</div>

export default App