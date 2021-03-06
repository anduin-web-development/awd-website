import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/hero.jpg';
import heroMobile from '../../assets/hero__sm.jpg';
import logo from '../../assets/logo-sm.png';

const Section = styled.section`
  background: url(${hero}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  zindex: 20;
  @media screen and (max-width: 500px) {
    background: url(${heroMobile}) no-repeat center center scroll;
  }
  @media screen and (min-width: 501px) and (max-width: 740px) {
    background-attachment: scroll;
  }
`;

const Div = styled.div`
  transform: translateY(-25vh);
  @media screen and (max-width: 500px) {
    transform: translateY(-100px);
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    transform: none;
  }
  @media screen and (min-width: 501px) and (max-width: 740px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: relative;
  top: 20px;
  left: 20px;
  z-index: 2;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <Section className="hero is-fullheight">
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Div>
            <h1 className="title is-1">Hi, we're Anduin.</h1>
            <h3 className="subtitle is-3">We build websites.</h3>
          </Div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
