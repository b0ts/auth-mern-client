import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between react and redux
import { SocialIcon } from 'react-social-icons';
import { Well } from 'react-bootstrap';
import NotificationBanner from '../components/notification_banner';

class FooterBanners extends Component {
	render() {
		return (
			<footer className="FooterBanners">
	  		<Well bsSize="small">
	  			<span className="FooterBannerText">{ this.props.siteConfig.footer.socialText }</span>
	  			{this.renderSocialIcons()}
	  		</Well>
	  			<NotificationBanner 
	  				bannerText = {this.props.siteConfig.footer.notificationText} 
	  				bannerLink = {this.props.siteConfig.footer.notificationLink}
	  			/>
	  	</footer>
		);
	}
	renderSocialIcons() {
		return this.props.siteConfig.footer.socialLinks.map((socialLink) => {
			return (
				<SocialIcon
					key = {socialLink.socialKey} 
					url = {socialLink.url} 
					color="black" 
				/>
			);
		});
	}
}

const mapStateToProps = (state) => ({ siteConfig: state.siteConfig  });
export default connect(mapStateToProps) (FooterBanners);
