import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import ScrollInNav from './ScrollInNav';
import logo from '../assets/logo-xs.png';

const NavLink = styled(Link)`
  color: #0f1752;
  display: table-cell;
  padding: 1rem;
  vertical-align: middle;
`;

const Img = styled.img`
  margin: 1rem;
`;

export class Navbar extends Component {
  render() {
    return (
      <ScrollInNav>
        <nav className="awd-navbar">
          <div>
            <Link to="">
              <Img src={logo} alt="" />
            </Link>
          </div>
          <div className="awd-navbar__links">
            <NavLink to="/#mission" className="awd-navbar__link">
              Mission
            </NavLink>
            <NavLink to="/#services" className="awd-navbar__link">
              Services
            </NavLink>
            <NavLink to="/team" className="awd-navbar__link">
              Team
            </NavLink>
            <NavLink
              to="/#contact"
              className="awd-navbar__link awd-navbar__link-contact"
            >
              Get in Touch!
            </NavLink>
          </div>
        </nav>
      </ScrollInNav>
    );
  }
}

export default Navbar;
