import React, { Component } from 'react';
import Link from 'next/link';
import { menu } from '../../helpers';
let logo = require('svg-url-loader!../public/images/icons/logo.svg');

function Header (props) {

  // TODO Implemet user 
  const user = props.user;

  return (
    <header className='top'>
      <nav className='nav'>
        <ul className='nav__section nav__section--pages'>
          <li className='nav__item'>
            <Link href='/' >
              <a className='nav__link nav__link--logo'><img src={logo} alt="That's Delicious Logo" /></a>
            </Link>
          </li>
          { menu.map( item => (
          <li className='nav__item' key={item.title}>
            <Link href={item.slug}>
              <a className='nav__link'>
                <img className='invert' src={require(`svg-url-loader!../public/images/icons/${item.icon}.svg`)} alt={item.alt} />
                <span>{item.title}</span>
              </a>
            </Link>
          </li>
          )) }
        </ul>
        <div className='nav__section nav__section--search'>
          <div className='search'>
            <input className='search__input' type='text' placeholder='Coffee, beer...' name='search' />
            <div className='search__results'></div>
          </div>
        </div>
        <div className='nav__section nav__section--user'>
          {/* Need to implement active class (nav__link--active) with /register & /login path */}
          { user ? <div style={{color: 'white'}}>implement user</div> : (
            <>
            <li className='nav__item'>
              <a href='/register' className='nav__link'>Register</a>
            </li>
            <li className='nav__item'>
              <a href='/login' className='nav__link'>Log In</a>
            </li>
            </>
          ) }
        </div>
      </nav>
    </header>
  );
}
   
  export default Header;