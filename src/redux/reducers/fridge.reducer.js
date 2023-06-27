const fridgeReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FRIDGE':
        return action.payload.data;
      default:
        return state;
    }
  };
  
  
  export default fridgeReducer;