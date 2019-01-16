import { TOGGLE_SIDEBAR, UNDER_MENU } from '../actions/aside';

const initialState = {
  expanded: false,
  isUnderMenuOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, expanded: !state.expanded };
    case UNDER_MENU: 
      return { ...state, isUnderMenuOpen: !state.isUnderMenuOpen }  
    default:
      return state;
  }
};

export default reducer;