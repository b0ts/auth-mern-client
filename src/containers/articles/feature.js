import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.getWithJWT();
  }

  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.authentication.message };
}

export default connect(mapStateToProps, actions)(Feature);
