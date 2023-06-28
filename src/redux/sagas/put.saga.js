import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* putItem(action){
    try{ 
        //double checking the ID that was sent over.
        console.log('Should be the ID we are updating=>',action.payload.id);
        //send a delete request to my DB with the ID of the item they clicked on.
        yield axios.put(`/fridge/put/${action.payload.id}`, action.payload);
        //after the delete, initialize another GET request to update the DOM
        yield put('GET_FRIDGE');
    } catch(error){
        console.log('problem updating item - put.saga.js', error);
    }
}

function* putSaga() {
    yield takeLatest('PUT_ITEM', putItem);
  }

  export default putSaga;