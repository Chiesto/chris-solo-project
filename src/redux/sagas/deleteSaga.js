import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action){
    try{ 
        //double checking the ID that was sent over.
        console.log('Should be the ID we are deleting=>',action.payload.id);
        //send a delete request to my DB with the ID of the item they clicked on.
        yield axios.delete(`/fridge/delete/${action.payload.id}`);
        //after the delete, initialize another GET request to update the DOM
        //yield put('GET_ITEMS');
    } catch(error){
        console.log('problem deleting deleteSaga.js', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
  }

  export default deleteSaga;