import React, { Component } from 'react';
import { setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Four extends Component {
	//  willMount called when the router switches components	
	componentWillMount() {
		this.props.setBanner("Four Banner", "/home/"); 
	};
	render() {
		return (
			<article className="four">
			<h1>Four Article Placeholder
				<br /><br /><br /><br /><br /><br /><br /><br />
			</h1>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Four);
