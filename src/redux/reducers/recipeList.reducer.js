const recipeListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_RECIPE_LIST':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default recipeListReducer;