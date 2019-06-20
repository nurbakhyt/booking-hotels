import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

function Nav() {
  return (
    <nav className="app-nav">
      <Link to="/" className="app-nav__item app-nav__item--brand">Booking</Link>
      <Link to="/" className="app-nav__item">Отели</Link>
    </nav>
  );
}

export default Nav;
