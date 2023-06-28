import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

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
    return newExp.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  useEffect(() => {
    dispatch({ type: 'GET_FRIDGE' });
  }, []);

  return (
    <div className="container">
      <h1>Your Fridge!</h1>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Protien</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===1 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Vegetable</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===2 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Grain</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===3 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Fruit</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===4 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Dairy</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===5 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Other</th>
              {fridge && fridge.map(item=> (
                item.food_group_id===6 && <td key={item.id}>|{item.ingredient_name} AMOUNT: {item.amount} EXP:{formatDate(item)} - <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
          </thead>
        </table>
      </div>
      <button onClick={()=>history.push('/add')}>Add to your fridge</button>
      <button onClick={()=>history.push('/recipes')}>Find Recipes</button>

    </div>
  );
}


export default UserPage;
