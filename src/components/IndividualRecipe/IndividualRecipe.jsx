import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function IndividualRecipe(){
    //imports
    const recipeId = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const recipe = useSelector(store=>store.oneRecipe);


    console.log('Recipe ID being sent', Number(recipeId.id));

    useEffect(()=>{
        dispatch({type: 'GET_ONE_RECIPE', payload: Number(recipeId.id)})
    }, [])
    return(
        <div>

            <button onClick={history.push('/recipes')}>Back to recipe list</button>
        </div>
    )
}

export default IndividualRecipe;
