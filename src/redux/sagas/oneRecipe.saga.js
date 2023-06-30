import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getOneRecipe(action){
    try{ 
        
        const recipe = yield axios.get(`/api/oneRecipe/${action.payload}`);
        yield put({type:'SET_ONE_RECIPE', payload: recipe});
    } catch(error){
        console.log('problem GETting the single recipe in saga', error);
    }
}

function* getOneRecipeSaga() {
    yield takeLatest('GET_ONE_RECIPE', getOneRecipe);
  }

  export default getOneRecipeSaga;