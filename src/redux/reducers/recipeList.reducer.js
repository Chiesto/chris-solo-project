const recipeListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RECIPE_LIST':
        return action.payload.data;
      default:
        return state;
    }
  };
  
  
  export default recipeListReducer;