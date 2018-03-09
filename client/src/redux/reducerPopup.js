const popupState = { show: true };

const popupReducer = (state=popupState, action) => {
  switch (action.type) {
    case 'OPENPOPUP':
      return { show: true };
    case 'CLOSEPOPUP':
      return { show: false };
    default:
      return state;
  }
};

export default popupReducer;