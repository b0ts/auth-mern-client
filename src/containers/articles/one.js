import React, { Component } from 'react';
import { setBanner } from '../../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class One extends Component {
	//  willMount called when the router switches components	
	componentWillMount() {
		this.props.setBanner("One Banner", "/home/"); 
	};
	render() {
		return (
			<article className="one">
			<h1>One Article Placeholder
				<br /><br /><br /><br /><br /><br /><br /><br />
			</h1>
			</article>
		);
	}
};

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setBanner }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (One);
