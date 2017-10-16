import React, { Component } from 'react';
import HeaderJumbotron from './containers/header_jumbotron';
import NavMenu from './containers/nav_menu';
import FooterBanners from './containers/footer_banners';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderJumbotron />
        <NavMenu />               
        {this.props.children}
        <FooterBanners />  
      </div>
    );
  }
}

export default App;

