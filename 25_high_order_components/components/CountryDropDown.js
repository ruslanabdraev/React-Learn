import DataComponent from "./DataComponent"
import CountryNames from "./CountryNames"

const CountryDropDown = DataComponent(
    CountryNames,
        "https://restcountries.eu/rest/v1/all")

export default CountryDropDown