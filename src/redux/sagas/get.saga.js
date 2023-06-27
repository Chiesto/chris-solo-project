import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getFridge(){
    try{ 

        const fridge = yield axios.get(`/fridge`);
        yield put({type:'SET_FRIDGE', payload: fridge});
    } catch(error){
        console.log('problem GETting in saga', error);
    }
}

function* getSaga() {
    yield takeLatest('GET_FRIDGE', getFridge);
  }

  export default getSaga;