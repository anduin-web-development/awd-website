import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import github from '../assets/social/github.svg';
import linkedin from '../assets/social/linkedin.svg';
import twitter from '../assets/social/twitter.svg';

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const SocialLink = styled.a`
  margin-right: 1.5rem;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-3 content">
            <h5 className="title is-5 grn-underline">Navigation</h5>
            <Link to="/#about">About</Link>
            <br />
            <Link to="/team">Team</Link>
            <br />
            <Link to="/#services">Services</Link>
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
              <SocialLink href="https://github.com/anduin-web-development">
                <Img src={github} alt="Github Icon" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/anduin/">
                <Img src={linkedin} alt="LinkedIn Icon" />
              </SocialLink>
              <SocialLink href="https://twitter.com/AnduinWeb">
                <Img src={twitter} alt="Twitter Icon" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
