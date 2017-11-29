import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Burger from './Burger';
import Links from './Links';
import logo from '../../assets/logo-xs.png';

const Img = styled.img`
  margin: 1rem;
`;

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isActive: false,
    };
  }

  handleClick(e) {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <nav className="awd-navbar">
        <div>
          <Link to="/">
            <Img src={logo} alt="" />
          </Link>
        </div>
        <Burger isActive={this.state.isActive} handleClick={this.handleClick} />
        <Links isActive={this.state.isActive} handleClick={this.handleClick} />
      </nav>
    );
  }
}

export default Navbar;
