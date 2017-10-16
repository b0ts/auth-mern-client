import React, { Component } from 'react';
import { getWithJWT, setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Users extends Component {
  componentWillMount() {
    this.props.getWithJWT("/users");
    this.props.setBanner("Users retrieved from DB with JWT", "/home/"); 
  }
  showUsers() {
  	if (!this.props.users) { 
  		return (<div></div>); 
  	};
  	return this.props.users.map(user => (
  		<li key={user._id}> 
  			{user.email.substr(0, user.email.indexOf('@'))} 
  		</li>
  	));
  };
	render() {
		return (
			<article className="show-users">
        <div className="users-frame">
          <h1 className="users-title">User List:</h1>
					<ul>
						{this.showUsers()}
					</ul>
				</div>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ 
	siteConfig: state.siteConfig,
	users: state.authentication.data
});
const mapDispatchToProps = (dispatch) => 
	bindActionCreators({ getWithJWT, setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Users);
