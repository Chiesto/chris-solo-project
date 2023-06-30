import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getRecipes(action){
    try{ 
        
        const recipeList = yield axios.get(`/api/recipes/${action.payload}`);
        yield put({type:'SET_RECIPE_LIST', payload: recipeList});
    } catch(error){
        console.log('problem GETting recipe list in saga', error);
    }
}

function* getRecipesSaga() {
    yield takeLatest('GET_RECIPE_LIST', getRecipes);
  }

  export default getRecipesSaga;