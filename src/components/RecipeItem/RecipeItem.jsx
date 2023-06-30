import { useHistory } from "react-router-dom";

function RecipeItem({item}){
    //imports
    const history = useHistory();

    
    return(
        <>
            <li>{item.title}</li>
            <img onClick={()=>history.push(`/recipe/${item.id}`)}src={item.image}/>
        </>
    )
}

export default RecipeItem;