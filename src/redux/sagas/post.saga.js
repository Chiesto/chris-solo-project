import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postItem(action){
    try{ 

        yield axios.post(`/fridge`, action.payload);
        yield put({type:'GET_FRIDGE'});
    } catch(error){
        console.log('problem POSTing in saga', error);
    }
}

function* postSaga() {
    yield takeLatest('POST_ITEM', postItem);
  }

  export default postSaga;