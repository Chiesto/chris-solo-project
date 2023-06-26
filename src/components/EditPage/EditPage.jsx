import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function EditPage(){
    const dispatch = useDispatch();
    const idToDelete = useParams();

    const deleteIngredient = ()=>{
        dispatch({type: 'DELETE_ITEM', payload:idToDelete});
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
          <button onClick={deleteIngredient}>Delete Ingredient</button>
        </form>
      </div>
      <button onClick={()=>history.push('/fridge')}>Back to your fridge</button>
    </div>
    )
}
export default EditPage;