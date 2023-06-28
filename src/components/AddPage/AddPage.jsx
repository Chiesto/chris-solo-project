import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//This page handles the adding of a new item to the user's fridge

function AddPage() {
  //imports
  const history = useHistory();
  const dispatch = useDispatch();
  //state variables
  const [ingredientName, setIngredientName] = useState('');
  const [foodGroup, setFoodGroup] = useState(0);
  const [amount, setAmount] = useState(0);
  const [expiration, setExpiration] = useState('');

  const handleAdd = () =>{
    dispatch({type:'POST_ITEM', payload:{
      ingredient_name: ingredientName,
      food_group_id: foodGroup,
      amount,
      expiration
    }});
    alert(`${ingredientName} has been added to your fridge!`);
    history.push('/fridge');
    

  }

  return (
    <div className="container">
      <h1>Add to your fridge!</h1>
      <div>
        <form onSubmit={handleAdd}>
          <label htmlFor='ingredientName'>Ingredient Name:</label>
          <input 
          required 
          name='ingredientName' 
          type="text" 
          placeholder='Ingredient Name'
          onChange={(event)=>setIngredientName(event.target.value)}/>
          <br/>
          <label htmlFor='foodGroup'>Food Group:</label> 
          <select required name='foodGroup' onChange={(event)=>setFoodGroup(event.target.value)}>
            <option value={1}>Protein</option>
            <option value={2}>Vegetable</option>
            <option value={3}>Grain</option>
            <option value={4}>Fruit</option>
            <option value={5}>Dairy</option>
            <option value={6}>Other</option>
          </select>
          <br />
          <label htmlFor='amount'>Amount:</label>
          <input 
          required 
          name='amount' 
          type="number" 
          placeholder='Amount'
          onChange={(event)=>setAmount(event.target.value)}/>
          <br />
          <label htmlFor='expiration'>Expiration:</label>
          <input 
          required 
          name='expiration' 
          type="date" 
          placeholder='Expiration'
          onChange={(event)=>setExpiration(event.target.value)}/>
          <button type='submit'>Add Ingredient +</button>
        </form>
      </div>
      <button type='button' onClick={()=>history.push('/fridge')}>Back to your fridge</button>
    </div>
  );
}

export default AddPage;
