const CountryNames = ({data, selected=""}) =>
    <select className="people-list" defaultValue={selected}>
        {data.map(({name}, i) =>
            <option key={i} value={name}>{name}</option>
        )}
    </select>

export default CountryNames