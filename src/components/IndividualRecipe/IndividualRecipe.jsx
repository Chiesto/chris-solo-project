import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

function IndividualRecipe(){
    //imports
    const recipeId = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const recipe = useSelector(store=>store.oneRecipe);


    // console.log('Recipe ID being sent', Number(recipeId.id));

    // useEffect(()=>{
    //     dispatch({type: 'GET_ONE_RECIPE', payload: Number(recipeId.id)})
    // }, [])
    return(
        <div>
            {recipe.analyzedInstructions ? 
            <>
            <h3>{recipe?.title}</h3>
            <img src={recipe?.image}/>
            <p>Ready in {recipe?.readyInMinutes} minutes! Makes {recipe?.servings} servings.</p>
            <h3>Ingredients</h3>
            {recipe?.extendedIngredients?.map(ingredient=>(
                <li key={ingredient.id}>{ingredient.originalName} - {ingredient.amount} {ingredient.unit}</li>
            ))}
            <h3>Instructions</h3>
            <ol>
            {recipe?.analyzedInstructions[0]?.steps?.map((instruction, i)=>(
                <li key={i}>{instruction.step}</li>
            ))}
            </ol>
            <p><a href={recipe?.sourceUrl}>Go to full recipe details</a></p>
            <button onClick={()=>history.push('/recipes')}>Back to recipe list</button>
            </>
            :
            <p>Loading...</p>
            }
        </div>
    )
}

export default IndividualRecipe;



