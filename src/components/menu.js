import React, { Component } from 'react';
import '../css/index.css';

class Menu extends Component {
  state = { navState: false }

  handleNav() {
    let navState = this.state.navState;
    if (!navState) {
      this.setState({
        navState: true,
        navAnimation:'open 0.8s linear 1 forwards',
        brandAnimation:'toBlack 0.6s linear 1 forwards'
      });
      setTimeout(() => {
        this.setState({ textAnimation: 'textIn 0.5s linear forwards'});
      }, 800);
    } else {
      this.setState({ textAnimation: 'textOut 0.5s linear forwards'});
      setTimeout(() => {
        this.setState({
          navState: false,
          navAnimation:'close 0.6s linear 1 forwards',
          brandAnimation:'toBlue 0.6s linear 1 forwards'
        })
      }, 500);
    }
  }

  render() {
    return(
      <div id='menu'>
        <div id='navigation' style={{animation:`${this.state.navAnimation}`}}>
          <ul style={{animation:`${this.state.textAnimation}`}}>
            <li onClick={this.handleNav.bind(this)}><a href='#about'>W.W.W. About JS</a></li>
            <li onClick={this.handleNav.bind(this)}><a href='#projects'>Featured Projects</a></li>
            <li onClick={this.handleNav.bind(this)}><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        <span
          className='brand'
          title="Jian Song's Portfolio"
          onClick={this.handleNav.bind(this)}
          style={{animation:`${this.state.brandAnimation}`}}
          >JS</span>
      </div>
    )
  }
}

export default Menu;
