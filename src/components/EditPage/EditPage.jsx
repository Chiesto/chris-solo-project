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
      <h1>Change fridge item</h1> {/*change "fridge item" */}
      <div>
        <form>
          <label htmlFor='ingredientName'>Ingredient Name:</label>
          <input required name='ingredientName' type="text" placeholder='Ingredient Name'/>
          <br/>
          <label htmlFor='foodGroup'>Food Group:</label> 
          <select name='foodGroup' onChange={(event)=>setFoodGroup(event.target.value)}>
            <option value={1}>Protein</option>
            <option value={2}>Vegetable</option>
            <option value={3}>Grain</option>
            <option value={4}>Fruit</option>
            <option value={5}>Dairy</option>
            <option value={6}>Other</option>
          </select>
          <br />
          <label htmlFor='amount'>Amount:</label>
          <input required name='amount' type="text" placeholder='Amount'/>
          <br />
          <label htmlFor='expiration'>Expiration:</label>
          <input required name='expiration' type="text" placeholder='Expiration'/>
          <button type='submit'>Accept Changes</button>
          
        </form>
        <button onClick={deleteIngredient}>Delete Ingredient</button>
      </div>
      <button onClick={()=>history.push('/fridge')}>Back to your fridge</button>
    </div>
    )
}
export default EditPage;