import {FETCHING, SUCCESS, ERROR} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case FETCHING: 
    return Object.assign({}, state, {fetching: true, characters: [], error:""})
  case SUCCESS: 
    return {...state, fetching: false, characters: action.payload, error:""}
  case ERROR: 
  return {...state, fetching: false, characters: [], error: action.payload}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
