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

const SocialLinks = props => {
  return (
    <Div>
      <A href={props.linkedin} className="awd-footer__social-link">
        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
      </A>
      <A href={props.twitter} className="awd-footer__social-link">
        <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
      </A>
      <A href={props.github} className="awd-footer__social-link">
        <i className="fa fa-github-square fa-3x" aria-hidden="true" />
      </A>
    </Div>
  );
};

export default SocialLinks;
