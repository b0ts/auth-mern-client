import React, { Component } from 'react';
import { setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
	//  willMount called when the router switches components	
	componentWillMount() {
		this.props.setBanner("Home Banner", "/home/"); 
	};
	render() {
		return (
			<article className="home">
			<h1>Home Article Placeholder
				<br /><br /><br /><br /><br /><br /><br /><br />
			</h1>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Home);
