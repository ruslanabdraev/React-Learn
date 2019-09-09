const IDEList = ({data = []})=> 
<select>{
    data.map((item, i)=>   
        <option key={i} >{item.name}</option>
        )}
</select>

export default IDEList