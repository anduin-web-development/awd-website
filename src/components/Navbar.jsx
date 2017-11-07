import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand" />
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end">
            <a href="" className="navbar-item">
              Link
            </a>
            <a href="" className="navbar-item">
              Link
            </a>
            <a href="" className="navbar-item">
              Link
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
