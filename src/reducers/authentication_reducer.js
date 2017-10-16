import {
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  AUTHENTICATION_ERROR,
  GET_WITH_JWT
} from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, error: '', authenticated: true };
    case NOT_AUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case GET_WITH_JWT:      
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
