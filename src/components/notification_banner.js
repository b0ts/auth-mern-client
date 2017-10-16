import React from 'react';
import { Well } from 'react-bootstrap';
import { Link } from 'react-router';
const NotificationBanner = ( {bannerText, bannerLink} ) => (
	<div className="NotificationBanner">
		<Link to={bannerLink}>
  		<Well bsSize="small">{bannerText}</Well>
  	</Link>
	</div>
);
export default NotificationBanner;

// import React from 'react';
// import { Well } from 'react-bootstrap';
// import { Link } from 'react-router';
// const NotificationBanner = ( {bannerText, bannerLink} ) => (
// 	<div className="NotificationBanner">
// 		<Link to={bannerLink}>
//   		<Well bsSize="small">{bannerText}</Well>
//   	</Link>
// 	</div>
// );
// export default NotificationBanner;
