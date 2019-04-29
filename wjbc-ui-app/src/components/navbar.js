import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__items">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__items">
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
