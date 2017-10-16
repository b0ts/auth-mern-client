import React, { Component } from 'react';
import { setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Contact extends Component {
	//  willMount called when the router switches components	
	componentWillMount() {
		this.props.setBanner("Contact Banner", "/home/"); 
	};
	render() {
		return (
			<article className="contact">
			<h1>Contact Article Placeholder
				<br /><br /><br /><br /><br /><br /><br /><br />
			</h1>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Contact);
