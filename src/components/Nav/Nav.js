import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <div className="app__container">
      <ul className="nav__list">
        <li>
          <Link to="/" className="nav__link">Home </Link>
        </li>
        <li>
          <Link to="/search" className="nav__link">Search</Link>
        </li>
        <li>
          <Link to="/profile" className="nav__link">Profile</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
