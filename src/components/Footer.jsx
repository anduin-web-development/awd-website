import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const P = styled.p`
  position: relative;
  top: 4rem;
  background-color: #0b0831;
`;

const Footer = () => {
  return (
    <footer className="footer awd_bg-primary">
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <Link to="">Terms & Privacy</Link>
            <Link to="">Terms & Privacy</Link>
          </div>
          <div className="column is-3 is-offset-6">
            <Link to="">Terms & Privacy</Link>
          </div>
        </div>
      </div>
      <P className="has-text-centered">&copy; Anduin Web Development 2017</P>
    </footer>
  );
};

export default Footer;
