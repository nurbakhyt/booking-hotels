import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scss';

function FooterBar() {
  return (
    <footer className="app-footer">
      <Link to="/" className="app-footer__item app-footer__item--brand">Booking</Link>
      <Link to="/" className="app-footer__item">2019</Link>
    </footer>
  );
}

export default FooterBar;
