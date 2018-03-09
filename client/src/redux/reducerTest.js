const defaultState = {
  testdata: 'this is a test data',
  showPopup: true
};

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'test':
      return {...state, testdata: 'test success'};
    default:
      return state;
  }
};

export default reducer;