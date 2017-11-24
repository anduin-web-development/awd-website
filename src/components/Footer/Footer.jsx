import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-3 content">
            <h5 className="title is-5 grn-underline">Navigation</h5>
            <Link to="/#mission">Mission</Link>
            <br />
            <Link to="/#services">Services</Link>
            <br />
            <Link to="/team">Team</Link>
            <br />
            <Link to="/#contact">Contact</Link>
            <br />
            <br />
            <p>
              Anduin Web Development is based in sunny San Diego, CA. &#9728;
            </p>
          </div>
          <div className="column is-3 content">
            <h5 className="title is-5 grn-underline">Site</h5>
            <Link to="/terms-and-privacy">Terms & Privacy</Link>
            <br />
            <Link to="/sitemap">Sitemap</Link>
            <br />
          </div>
          <div className="column is-3 is-offset-3">
            <h5 className="title is-5 grn-underline">Social</h5>
            <div>
              <SocialLinks
                github="https://github.com/anduin-web-development"
                linkedin="https://www.linkedin.com/company/anduin/"
                twitter="https://twitter.com/AnduinWeb"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
