import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action){
    try{
        console.log('Should be the ID we are deleting=>',action.payload)
        yield axios.delete(`/fridge/delete/${action.payload}`);
        //yield put('GET_ITEMS');
    } catch(error){
        console.log('problem deleting deleteSaga.js', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
  }

  export default deleteSaga;