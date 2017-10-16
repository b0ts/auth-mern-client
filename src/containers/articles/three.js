import React, { Component } from 'react';
import { setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Three extends Component {
	//  willMount called when the router switches components	
	componentWillMount() {
		this.props.setBanner("Three Notification Banner", "/home/");  
	};
	render() {
		return (
			<article className="three">
			<h1>Three Article Placeholder
				<br /><br /><br /><br /><br /><br /><br /><br />
			</h1>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Three);
