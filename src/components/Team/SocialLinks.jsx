import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const SocialLinks = () => {
  return (
    <Div>
      <A href="">
        <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
        <span>&nbsp;Linked In</span>
      </A>
      <A href="">
        <i className="fa fa-twitter-square fa-lg" aria-hidden="true" />
        <span>&nbsp;Twitter</span>
      </A>
      <A href="">
        <i className="fa fa-github-square fa-lg" aria-hidden="true" />
        <span>&nbsp;Github</span>
      </A>
    </Div>
  );
};

export default SocialLinks;
