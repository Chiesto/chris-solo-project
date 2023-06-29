import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function RecipePage(){
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type: 'GET_RECIPE_LIST'});
    }, [])

    return(
        <>
        <h1>Find Recipes</h1>
        <p>Available recipes with your ingredients:</p>
        <div>
            Map thru available recipes 
        </div>
        <button onClick={()=>history.push('/fridge')}>Back to your fridge</button>
        </>
    )
}

export default RecipePage;