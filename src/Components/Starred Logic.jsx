const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_VALUE':
        if (state.includes(action.value)) {
          return state.filter(item => item !== action.value);
        } else {
          return [...state, action.value];
        }
      default:
        return state;
    }
  }
  export default reducer; 