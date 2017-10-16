import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between react and redux
import { Jumbotron, Image } from 'react-bootstrap';
import NotificationBanner from '../components/notification_banner';

class HeaderJumbotron extends Component {
	render() {
		var jumboImage = "/logo_placeholder.jpg";
		const banner = this.props.banner;
		return (
			<header>
				<Jumbotron>
					<NotificationBanner 
						bannerText = {(banner) ? banner.title : "Logout"}
						bannerLink = {(banner) ? banner.link : "/logout"}
					/>
		    	<Image src={ jumboImage } responsive />
		  	</Jumbotron>
	  	</header>
		);
	}
}

const mapStateToProps = (state) => ({ banner: state.banner, siteConfig: state.siteConfig });
export default connect(mapStateToProps) (HeaderJumbotron);

