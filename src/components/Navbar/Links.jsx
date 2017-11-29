import React from 'react';
import Link from 'gatsby-link';

const Links = props => {
  let active = '';
  if (props.isActive) {
    active += ' is-active';
  }
  return (
    <div className={`awd-navbar__links${active}`}>
      <Link
        to="/#mission"
        className="awd-navbar__link"
        onClick={props.handleClick}
      >
        Mission
      </Link>
      <Link
        to="/#services"
        className="awd-navbar__link"
        onClick={props.handleClick}
      >
        Services
      </Link>
      <Link to="/team" className="awd-navbar__link" onClick={props.handleClick}>
        Team
      </Link>
      <Link
        to="/#contact"
        className="awd-navbar__link"
        onClick={props.handleClick}
      >
        Get in Touch!
      </Link>
    </div>
  );
};

export default Links;
