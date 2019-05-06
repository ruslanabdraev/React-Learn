import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({name, ingredients, steps})=>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
            <IngredientsList list={ingredients}></IngredientsList>
            <Instructions title="Cooking Instructions" strps={steps}></Instructions>
    </section>
    
export default Recipe