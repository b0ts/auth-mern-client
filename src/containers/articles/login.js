import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = field => {
  const { input, type } = field;
  return (
    <div>
      <input {...input} type={type} className="form-control" />
    </div>
  );
}

class Login extends Component {
  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password });
  }
  displayError() {
    const { errorMessage } = this.props;
    if (errorMessage) {
      return (
        <div className="alert alert-danger"> 
          Login Error: {errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <article className="login">
        <div className="login-frame">
          <h1 className="login-title">Please Login</h1>

          <Form className="login-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>       
            {this.displayError()}
            <div className="form-group">
              <label>Email:</label>
              <Field name="email" type="email" component={renderInput} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <Field name="password" type="password" component={renderInput} />
            </div>
            <button action="submit" className="login-button btn btn-primary">
              Login
            </button>
            <Link className="nav-link" to="/create-account">
              <Button className="create-new-button" bsStyle="primary">
                Create New Account
              </Button>
            </Link>
          </Form>
        </div>
      </article>
    );
  }
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.authentication.error
  };
}

Login = reduxForm({
 form: 'login'
})(Login);

export default connect(mapStateToProps, actions)(Login);
