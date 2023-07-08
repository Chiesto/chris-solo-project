import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import './FridgePage.css';

function UserPage() {
  //imports
  const dispatch = useDispatch();
  const fridge = useSelector(store => store.fridge);
  const history = useHistory();
//on click for the edit button - sends the user to the Edit page
  const editBtn = (id) =>{
    history.push(`/edit/${id}`);
  }
// format's the date so it's more visually appealing
  const formatDate = (item)=>{
    const newExp = new Date(item.expiration);
    return newExp.toLocaleDateString('en-US');
  }

  

  //function to check if an item is expired (if the exp date is older than the current date)
  const checkDate = (item) =>{
    const today = new Date();
    const itemExp = new Date(item.expiration)
    if(itemExp < today){
      return true;
    }else{
      return false;
    }
  }
  
  useEffect(() => {
    dispatch({ type: 'GET_FRIDGE' });
  }, []);

  return (
    <div className="fridgeContainer">
      <h1 id='yourFridge'>Your Fridge!</h1>
      <div className='tableContainer'>
        <table id='fridgeTable'>
          <thead>
            <tr id='protein'>
              <th >Protein</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===1 && <td style={{color: checkDate(item)&& "red"}} className='proteinTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
            <tr id='vegetable'>
              <th>Vegetable</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===2 && <td style={{color: checkDate(item)&& "red"}} className='vegetableTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
            <tr id='grain'>
              <th>Grain</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===3 && <td style={{color: checkDate(item)&& "red"}} className='grainTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
            <tr id='fruit'>
              <th>Fruit</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===4 && <td style={{color: checkDate(item)&& "red"}} className='fruitTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
            <tr id='dairy'>
              <th>Dairy</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===5 && <td style={{color: checkDate(item)&& "red"}} className='dairyTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
            <tr id='other'>
              <th>Other</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===6 && <td style={{color: checkDate(item)&& "red"}} className='otherTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> <br/>Amount: {item.amount} <br/>Expires: {formatDate(item)}</td>
                ))}
            </tr>
          </thead>
        </table>
        <p id='fridgeText'>*Click on an ingredient to edit its details*</p>
      </div>
      <div id='fridgePageBtns'>
        {fridge.length<1&& <p>*start here*</p>}
        <button className='fridgeBtn' onClick={()=>history.push('/add')}>Add to your fridge</button><br/><br/><br/><br/>
        <button className='fridgeBtn' onClick={()=>history.push('/recipes')}>Find Recipes</button>
      </div>
    </div>
  );
}


export default UserPage;
