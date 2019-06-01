import Color from './Color'

const ColorList = ({colors=[], onRate=f=>f})=>
    <div className="color-list">
        {(colors.length === 0) ? 
            <p>No Colors Listed. (Add a Color)</p> :
                colors.map(color=>
                    <Color key={color.id} {...color}
                        onRate={(rating)=> onRate(color.id, rating)}
                    />
                )
        }
    </div>

export default ColorList