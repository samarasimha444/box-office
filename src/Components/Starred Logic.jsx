const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STAR':
      return [...state, action.payload];
    case 'REMOVE_STAR':
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
};

export default reducer;

