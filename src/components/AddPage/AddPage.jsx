import React from 'react';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AddPage() {
  const history = useHistory();
  return (
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
          <button type='submit'>Add Ingredient +</button>
        </form>
      </div>
      <button onClick={()=>history.push('/fridge')}>Back to your fridge</button>
    </div>
  );
}

export default AddPage;
