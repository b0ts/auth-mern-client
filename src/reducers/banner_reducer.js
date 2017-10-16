// we import a const to keep naming in sync 
import { SET_BANNER } from '../actions/index.js';
// all reducers get two arguments current state and action
// the state is not the application state (only the state this reducer is responsable for
// defined in the combined reducers in reducers/index.js
// give the state a default of null to return ist time though
const BannerReducer = (state = null, action) => { 
	return (action.type === SET_BANNER && action.payload) ? action.payload : state;
};
export default BannerReducer;
