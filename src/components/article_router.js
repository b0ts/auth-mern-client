import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../App';
import Home from '../containers/articles/home';
import Contact from '../containers/articles/contact';
import Users from '../containers/articles/users';
import One from '../containers/articles/one';
import Two from '../containers/articles/two';
import Three from '../containers/articles/three';
import Four from '../containers/articles/four';
import Login from '../containers/articles/login';
import Logout from '../containers/articles/logout';
import CreateAccount from '../containers/articles/create_account';
import AuthenticationRequired from '../containers/authentication_required';

const ArticleRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} /> 
        <Route path="contact" component={Contact} /> 
        <Route path="users" component={AuthenticationRequired(Users)} /> 
        <Route path="one" component={One} /> 
        <Route path="two" component={Two} /> 
        <Route path="three" component={Three} /> 
        <Route path="four" component={Four} />
        <Route path="login" component={Login} /> 
        <Route path="logout" component={Logout} />
        <Route path="create-account" component={CreateAccount} />
      </Route>
    </Router>
  );
};
export default ArticleRouter;



