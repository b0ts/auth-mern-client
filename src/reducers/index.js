import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authenticationReducer from './authentication_reducer';
import bannerReducer from './banner_reducer';
import siteConfigReducer from './site_config_reducer';

const rootReducer = combineReducers({
  form,
  authentication: authenticationReducer,
  banner: bannerReducer,
  siteConfig: siteConfigReducer
});

export default rootReducer;
