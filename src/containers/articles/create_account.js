import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = (field) => {
  const { label, type, input, meta: { error, touched } } = field;
  return (
    <div>
      <label>{label}:</label>
        <input {...input} type={type}
          className="form-control" />
        {touched && error && <div className="error">{error}</div>}
    </div>
  );
}

class CreateAccount extends Component {
  handleFormSubmit(formProps) {
    this.props.createAccount(formProps); // in actions/index
  }
  displayError() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger"> 
          Error: {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <article className="create-new">
        <div className="create-new-frame">
          <h1 className="create-new-title">New Account</h1>
          <Form className="create-new-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>       
            {this.displayError()}
            <div className="form-group">
              <Field name="email" 
                type="email" component={renderInput} label="Email" />
              </div>
              <div className="form-group">
              <Field name="password" 
                type="password" component={renderInput} label="Password" />              
              </div>
              <div className="form-group">
              <Field name="passwordConfirm" 
                type="password" component={renderInput} label="Confirm" />
              </div>
              <button action="submit" className="create-new-button btn btn-primary">
              Create New Account
              </button>
          </Form>
        </div>
      </article>
    );
  }
}

function validate(formProps) {
  const errors = {};
  const { password, passwordConfirm, email } = formProps;

  if (!email) {
    errors.email = 'Please enter an email';
  } else if (!password) {
    errors.password = 'Please enter a password';
  } else if (!passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  } else if (passwordConfirm && (password !== passwordConfirm)) {
    errors.password = 'Passwords must match';
  }
  return errors;
}

function mapStateToProps(state) {
  return { 
    errorMessage: state.authentication.error 
  };
}

const form = reduxForm({ form: 'createAccount', validate });
export default connect(mapStateToProps, actions)(form(CreateAccount));
