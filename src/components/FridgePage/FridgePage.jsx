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

  useEffect(() => {
    dispatch({ type: 'GET_FRIDGE' });
  }, []);


  return (
    <div className="fridgeContainer">
      <h1>Your Fridge!</h1>
      <div className='tableContainer'>
        <table id='fridgeTable'>
          <thead>
            <tr id='protein'>
              <th >Protein</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===1 && <td className='proteinTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)}</td>
                ))}
            </tr>
            <tr id='vegetable'>
              <th>Vegetable</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===2 && <td className='vegetableTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)}</td>
                ))}
            </tr>
            <tr id='grain'>
              <th>Grain</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===3 && <td className='grainTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)}</td>
                ))}
            </tr>
            <tr id='fruit'>
              <th>Fruit</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===4 && <td className='fruitTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)}</td>
                ))}
            </tr>
            <tr id='dairy'>
              <th>Dairy</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===5 && <td className='dairyTd' onClick={()=>editBtn(item.id)} key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)}</td>
                ))}
            </tr>
            <tr>
              <th>Other</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===6 && <td key={item.id}><b>{item.ingredient_name}</b> Amount: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button></td>
                ))}
            </tr>
          </thead>
        </table>
        <p id='fridgeText'>*Click on an ingredient to edit it's details*</p>
      </div>
      <button className='fridgeBtn' onClick={()=>history.push('/add')}>Add to your fridge</button><br/><br/><br/><br/>
      <button className='fridgeBtn' onClick={()=>history.push('/recipes')}>Find Recipes</button>

    </div>
  );
}


export default UserPage;
