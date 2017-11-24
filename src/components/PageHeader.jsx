import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: url(${props => props.bgUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  zindex: 20;
`;

const PageHeader = props => {
  return (
    <Section className="hero is-large" bgUrl={props.bgUrl}>
      <div className="hero-body">
        <div className="container">
          <div className="title is-1 has-text-white">{props.children}</div>
        </div>
      </div>
    </Section>
  );
};

export default PageHeader;
