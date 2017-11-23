import React, { Component } from 'react';
import Link from 'gatsby-link';
import ScrollInNav from './ScrollInNav';

export class Navbar extends Component {
  render() {
    return (
      <ScrollInNav>
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Anduin Web Development
            </Link>
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
              <Link to="/team" className="navbar-item">
                Team
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
      </ScrollInNav>
    );
  }
}

export default Navbar;
