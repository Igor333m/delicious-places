import React, { Component } from 'react';
import { menu } from '../../helpers';
let logo = require('svg-url-loader!../public/images/icons/logo.svg');

class Header extends Component {
    render() { 
      return (
        <header className="top">
          <nav className="nav">
            <ul className="nav__section nav__section--pages">
              <li className="nav__item">
                <a href="/" className="nav__link nav__link--logo"><img src={logo} alt="That's Delicious Logo" /></a>
              </li>
              { menu.map( item => (
              <li className="nav__item" key={item.title}>
                <a href="" className="nav__link" href={item.slug}>
                <img className='invert' src={require(`svg-url-loader!../public/images/icons/${item.icon}.svg`)} alt={item.alt} />
                  <span>{item.title}</span>
                </a>
              </li>
              )) }
            </ul>
          </nav>
        </header>
      );
    }
  }
   
  export default Header;