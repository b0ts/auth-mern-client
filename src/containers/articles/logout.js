import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser(); // in actions/index
  }
  render() {
    return <div>Successfully Logged Out!</div>;
  }
}
export default connect(null, actions)(Logout);
