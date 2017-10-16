import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import ArticleRouter from './components/article_router';
import reducers from './reducers';
import { AUTHENTICATED } from './actions/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const jwt = localStorage.getItem('jwt');
if (jwt) {
  store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <ArticleRouter />
  </Provider>
  , document.querySelector('#root'));
