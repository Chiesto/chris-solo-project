import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postItem(action){
    try{ 
        console.log('this item is being posted', action.payload);
        yield axios.post(`/fridge`, action.payload);
    } catch(error){
        console.log('problem POSTing in saga', error);
    }
}

function* postSaga() {
    yield takeLatest('POST_ITEM', postItem);
  }

  export default postSaga;