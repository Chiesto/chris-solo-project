import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './EditPage.css'


function EditPage(){
  
  //imports
    const dispatch = useDispatch();
    const itemID = useParams();
    const history = useHistory();
    const fridge = useSelector(store => store.fridge);
  //grabbing the fridge item the user is currently editing
    const item = fridge.find(item=>item.id===Number(itemID.id));

  //formatting the date so that it displays correctly in the Expiration input
    const newExp = new Date(item?.expiration);
    const formattedExp = newExp.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
    const rearrangedExp = formattedExp.split('/').reverse().join('-');

  //state variables
    const [ingredientName, setIngredientName] = useState(item?.ingredient_name);
    const [foodGroup, setFoodGroup] = useState(item?.food_group_id);
    const [amount, setAmount] = useState(item?.amount);
    const [expiration, setExpiration] = useState(rearrangedExp);
    const [showModal, setShowModal] = useState(false);

    
  //delete and update functions
    const deleteIngredient = ()=>{
      setShowModal(true);
      
    }

    const handleConfirmDelete = () =>{
      dispatch({type: 'DELETE_ITEM', payload:itemID});
      history.push('/fridge');
    }
    const handleCancelDelete = () =>{
      setShowModal(false);
    }




    //allows the user to update any or all of the item categories
    const updateIngredient = (event)=>{
      event.preventDefault();
      dispatch({type: 'PUT_ITEM', payload: {
        id: item.id,
        ingredient_name:ingredientName,
        food_group_id: foodGroup,
        amount,
        expiration


      }});
      history.push('/fridge');
    }

    useEffect(()=>{
      dispatch({type: 'GET_FRIDGE'});
    }, []);
console.log(showModal);
    return(
    <div className="addPageContainer">
      <div id="editPageFormDiv">
        {item?(
          <h1>Change {item.ingredient_name}</h1>
        ):(
          <h1>Change fridge item</h1>
        )}
        <div id='editForm' >
          <form onSubmit={updateIngredient}>
            <label htmlFor='ingredientName'>Ingredient Name:</label>
            <input required onChange={(event)=>setIngredientName(event.target.value)} value={ingredientName} name='ingredientName' type="text" placeholder='Ingredient Name'/>
            <br/>
            <label htmlFor='foodGroup'>Food Group:</label> 
            <select required value={foodGroup} name='foodGroup' onChange={(event)=>setFoodGroup(event.target.value)}>
              <option>Select</option>
              <option value={1}>Protein</option>
              <option value={2}>Vegetable</option>
              <option value={3}>Grain</option>
              <option value={4}>Fruit</option>
              <option value={5}>Dairy</option>
              <option value={6}>Other</option>
            </select>
            <br />
            <label htmlFor='amount'>Amount:</label>
            <input required onChange={(event)=>setAmount(event.target.value)}value={Number(amount)} name='amount' type="number" placeholder='Amount'/>
            <br />
            <label htmlFor='expiration'>Expiration:</label>
            <input required onChange={(event)=>setExpiration(event.target.value)} value={expiration} name='expiration' type="date" />
            <button className="editPageBtn" type='submit'>Accept Changes</button> <br/><br/>
            <button type='button'className="editPageBtn" onClick={deleteIngredient}>Delete Ingredient</button>
            
          </form>
          
          
        </div>
      </div>
      {showModal&&(
        <div className="modal">
          <div className="modal_content">
            <h3>Are you sure you want to delete {item.ingredient_name}?</h3>
            <button className='modalBtn' type='button' onClick={handleConfirmDelete}>Yes delete</button>
            <button className='modalBtn' type='button' onClick={handleCancelDelete}>No thanks</button>
          </div>
        </div>
        )}
      <button className='back_to_fridge' id="editBkToFridge" type='button' onClick={()=>history.push('/fridge')}>Back to your fridge</button>

    </div>
    )
}
export default EditPage;