import axios from 'axios';
import { browserHistory } from 'react-router';

const SERVER_URL = 'http://localhost:3001';
const SET_BANNER = 'set_banner';
const NOT_AUTHENTICATED = 'not_authenticated';
const AUTHENTICATED = 'authenticated';
const AUTHENTICATION_ERROR = 'authentication_error';
const GET_WITH_JWT = 'get_with_jwt';

// we are using redux-thunk instead of redux-promise 
// so we use the function(dispatch) instead of the shorthand
const setBanner = (title="Take Me Home", link="/home/") => (
  function(dispatch) {
    dispatch({ type: SET_BANNER, payload: { title, link } });
  });

const loginUser = ({ email, password }) => (
  function(dispatch) {
    // Submit email/password to the server
    axios.post(`${SERVER_URL}/login`, { email, password })
      .then(response => {
        dispatch({ type: AUTHENTICATED });
        localStorage.setItem('jwt', response.data.token); 
        browserHistory.push('/home');
      })
      .catch(() => { 
        dispatch(authenticationError('Bad Login Info'));
      });
  });

const createAccount = ({ email, password }) => (
  function(dispatch) {
    axios.post(`${SERVER_URL}/create-account`, { email, password })
      .then(response => {
        dispatch({ type: AUTHENTICATED });
        localStorage.setItem('jwt', response.data.token);
        browserHistory.push('/home');
      })
      .catch(response => dispatch(authenticationError(response.data.error)));
  });

const authenticationError = (error) => ({
    type: AUTHENTICATION_ERROR,
    payload: error
  });

const logoutUser = () => {
  localStorage.removeItem('jwt');
  browserHistory.push('/home');
  return { type: NOT_AUTHENTICATED };
};

const getWithJWT = (path) => (
  function(dispatch) {
    axios.get(SERVER_URL + path, {
      headers: { authorization: localStorage.getItem('jwt') }
    })
      .then(response => {
        dispatch({
          type: GET_WITH_JWT,
          payload: response.data
        });
      });
  });

export {
  AUTHENTICATED, NOT_AUTHENTICATED, 
    loginUser, createAccount, logoutUser, 
  AUTHENTICATION_ERROR, authenticationError, 
  GET_WITH_JWT, getWithJWT,
  SET_BANNER, setBanner
};
