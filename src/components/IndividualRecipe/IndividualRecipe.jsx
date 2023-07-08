import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import './IndividualRecipe.css';

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
            <div id="individualRecipeContainer">
                <div id="pictureContainer">
                    <img src={recipe?.image}/><br/>
                    <h3 id="title">{recipe?.title}</h3>
                    <p>Ready in {recipe?.readyInMinutes} minutes! Makes {recipe?.servings} servings.</p>
                </div>
                <div id="ingredientsDiv">
                    <h3>Ingredients</h3>
                    {recipe?.extendedIngredients?.map(ingredient=>(
                        <li key={ingredient.id}>{ingredient.originalName} - {ingredient.amount} {ingredient.unit}</li>
                    ))}
                </div>
                <div id="instructionsDiv">
                    <h3>Instructions</h3>
                    <ol>
                    {recipe?.analyzedInstructions[0]?.steps?.map((instruction, i)=>(
                        <li key={i}>{instruction.step}</li>
                    ))}
                    </ol>
                </div>
                <p id="recipeLink"><a href={recipe?.sourceUrl}>Go to full recipe details</a></p>
            </div>
            :
            <p>Loading...</p>
            }
            <button id='recipeBtn' onClick={()=>history.push('/recipes')}>Back to recipe list</button>
        </div>
    )
}

export default IndividualRecipe;



