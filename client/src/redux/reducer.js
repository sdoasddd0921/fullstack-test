import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import popup from './reducerPopup';
import reducer from './reducerTest';

export default combineReducers({
  form: formReducer,
  popup,
  reducer
});