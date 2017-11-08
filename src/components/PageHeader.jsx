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
    <Section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="title is-1">{props.children}</div>
      </div>
    </Section>
  );
};

export default PageHeader;
