import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";


function EditPage(){
    const dispatch = useDispatch();
    const idToDelete = useParams();
    const history = useHistory();

    const deleteIngredient = ()=>{
      dispatch({type: 'DELETE_ITEM', payload:idToDelete});
      history.push('/fridge');
    }

    return(
        <div className="container">
      <h1>Add to your fridge!</h1>
      <div>
        <form>
          <label htmlFor='ingredientName'>Ingredient Name:</label>
          <input required name='ingredientName' type="text" placeholder='Ingredient Name'/>
          <br/>
          <label htmlFor='foodGroup'>Food Group:</label> {/*input a dropdown menu <select><option></option></select>*/}
          <input required name='foodGroup' type='text' placeholder='Food Group'/>
          <br />
          <label htmlFor='amount'>Amount:</label>
          <input name='amount' type="text" placeholder='Amount'/>
          <br />
          <label htmlFor='expiration'>Expiration:</label>
          <input name='expiration' type="text" placeholder='Expiration'/>
          <button type='submit'>Accept Changes</button>
          
        </form>
        <button onClick={deleteIngredient}>Delete Ingredient</button>
      </div>
      <button onClick={()=>history.push('/fridge')}>Back to your fridge</button>
    </div>
    )
}
export default EditPage;