import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer className="footer awd_bg-primary">
      <div className="container">
        <div className="columns">
          <div className="column is-3 content">
            <ul>
              <li>
                <Link to="">Terms & Privacy</Link>
              </li>
              <li>
                <Link to="">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="column is-3 is-offset-6">
            <Link to="">Terms & Privacy</Link>
          </div>
        </div>
        <p className="has-text-centered">&copy; Anduin Web Development 2017</p>
      </div>
    </footer>
  );
};

export default Footer;
