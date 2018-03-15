const popupState = { show: false };

const popupReducer = (state=popupState, action) => {
  switch (action.type) {
    case 'OPENPOPUP':
      return { show: true, ...action };
    case 'CLOSEPOPUP':
      return { show: false };
    default:
      return state;
  }
};

export default popupReducer;