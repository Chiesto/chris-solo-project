import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function UserPage() {
  const fridge = [
    {id: 1, ingredient_name:'chicken', food_group_id: 1, amount: 10, expiration: '7/4', user_id: 1 },
    {id: 2, ingredient_name:'apple', food_group_id: 4, amount: 3, expiration: '7/4', user_id: 1 },
    {id: 3, ingredient_name:'kale', food_group_id: 2, amount: 5, expiration: '7/4', user_id: 1 },
    {id: 4, ingredient_name:'beef', food_group_id: 1, amount: 10, expiration: '7/4', user_id: 1 }
  ]
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const editBtn = (id) =>{
    history.push(`/edit/${id}`)
  }

  return (
    <div className="container">
      <h1>Your Fridge!</h1>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Protien</th>
              {fridge.map(item=> (
                item.food_group_id===1 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Vegitable</th>
              {fridge.map(item=> (
                item.food_group_id===2 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Grain</th>
              {fridge.map(item=> (
                item.food_group_id===3 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Fruit</th>
              {fridge.map(item=> (
                item.food_group_id===4 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Dairy</th>
              {fridge.map(item=> (
                item.food_group_id===5 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
            <tr>
              <th>Other</th>
              {fridge.map(item=> (
                item.food_group_id===6 && <td>|{item.ingredient_name} <button onClick={()=>editBtn(item.id)}>Edit</button>|</td>
                ))}
            </tr>
          </thead>
        </table>
      </div>
      <button onClick={()=>history.push('/add')}>Add to your table</button>
      <button onClick={()=>history.push('/recipes')}>Find Recipes</button>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
