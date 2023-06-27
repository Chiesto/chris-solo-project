const fridgeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FRIDGE':
        return action.payload;
      default:
        return state;
    }
  };
  
  
  export default fridgeReducer;