import React, { Component } from 'react';
import Link from 'gatsby-link';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <div className="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/pricing" className="navbar-item">
              Pricing
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
