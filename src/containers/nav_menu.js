import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between react and redux
import { Link } from 'react-router';
import { Navbar, NavDropdown} from 'react-bootstrap';

class NavMenu extends Component {
	render() {
		return  (
			<nav className="NavBar">
				<Navbar default collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				      	<Link className="menu-thumbnail" to= { this.props.siteConfig.menuElements.brand.link }>
				      		<img src="/favicon.jpg" 
				      		alt= { this.props.siteConfig.menuElements.brand.altText }/>
	  						</Link>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <ul className="nav navbar-nav">
				      	{this.renderNavMenu()}
				      </ul>
				    </Navbar.Collapse>
				  </Navbar>
			</nav>
		);
	};
	renderNavMenu() {
		return this.props.siteConfig.menuElements.items.map((item) => {
			if ((item.render === 'authenticated' && !this.props.authenticated) 
				|| (item.render === 'notAuthenticated' && this.props.authenticated)) {
				return (<span key={ item.eventKey }></span>);
			}
			return (item.type === "submenu") 
				? (this.renderNavSubMenu(item))
				: (
			   	<li className="nav-item" key={ item.eventKey } >
			   	  <Link className="nav-link" to={ item.link }>
			   	  	{ item.title }
			   	  </Link>	
			   	</li>	
				);
		});
	};
	renderNavSubMenu(item) {
		return (
		  <NavDropdown key = { item.eventKey } eventKey={ item.key } title={ item.title } id = {item.submenu} >
 				{ this.renderSubMenuItems(item.submenu) }
    	</NavDropdown>
		);
	};
	renderSubMenuItems(submenuName) {
		return this.props.siteConfig.menuElements[submenuName].map((item) => {
			return (
		   	<li key={ item.eventKey }
			   		onClick={(e) => { document.getElementById(submenuName).click(); }}>
			   	<Link to={ item.link } >
			   		{ item.title }
			   	</Link>	
			  </li>
			);
		})
	};
};

const mapStateToProps = (state) => ({
 siteConfig: state.siteConfig,
  authenticated: state.authentication.authenticated
});

export default connect(mapStateToProps, null, null, {
  pure: false
}) (NavMenu);
