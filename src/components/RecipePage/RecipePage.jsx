import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import RecipeItem from "../RecipeItem/RecipeItem";
import './RecipePage.css';

function RecipePage(){
    //imports
    const history = useHistory();
    const dispatch = useDispatch();
    //store 
    const fridge = useSelector(store=>store.fridge);
    const recipeList = useSelector(store=>store.recipeList);
    //grabbing JUST the ingredient names from my fridge
    const fridgeItems = fridge.map(item=>`${item.ingredient_name}`);



    //on page load, get the recipe list (no user interaction required except just going to this page)
    useEffect(()=>{
        dispatch({type: 'GET_RECIPE_LIST', payload:fridgeItems.toString()});
    }, []);
    
    return(
        <>
        <h1>Find Recipes</h1>
        <p>Available recipes with your ingredients:</p>
        <div id="scroll">
            
            {recipeList.data?.map((item, i)=>(
                <RecipeItem key={i} item={item}/>
            ))}
            
        </div>
        <button className='back_to_fridge' id='bckToFridge' onClick={()=>history.push('/fridge')}>Back to your fridge</button>
        </>
    )
}

export default RecipePage;