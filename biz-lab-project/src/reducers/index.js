import { combineReducers } from 'redux';
import aside from './aside'
import forms from './forms'

const reducer = combineReducers({
  aside, forms
});

export default reducer;
