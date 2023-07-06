import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function RecipeItem({item}){
    //imports
    const history = useHistory();
    const dispatch = useDispatch();

    //function to get the recipe then send user to the page that displays that information.
    const handleOneRecipe = (id) =>{
        dispatch({type: 'GET_ONE_RECIPE', payload: id});
        history.push(`/oneRecipe/${id}`)
    }


    return(
        <div className="recipeDiv" style={{marginRight: '0px'}}>
            
            <img onClick={()=>handleOneRecipe(item.id)} src={item.image}/>
            <p>{item.title}</p>
        </div>
    )
}

export default RecipeItem;