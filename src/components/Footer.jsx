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

const Social = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <footer className="footer awd_bg-primary">
      <div className="container">
        <div className="columns">
          <div className="column is-3 content">
            <Link to="">Terms & Privacy</Link>
            <br />
            <Link to="">Sitemap</Link>
            <br />
          </div>
          <div className="column is-3 is-offset-6">
            <Social>
              <a href="">
                <Img src={github} alt="Github Icon" />
              </a>
              <a href="">
                <Img src={linkedin} alt="LinkedIn Icon" />
              </a>
              <a href="">
                <Img src={twitter} alt="Twitter Icon" />
              </a>
            </Social>
          </div>
        </div>
        <p className="has-text-centered">&copy; Anduin Web Development 2017</p>
      </div>
    </footer>
  );
};

export default Footer;
