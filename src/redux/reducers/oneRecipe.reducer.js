const oneRecipeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ONE_RECIPE':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default oneRecipeReducer;