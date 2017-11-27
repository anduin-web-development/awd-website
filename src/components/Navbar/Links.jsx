import React from 'react';
import Link from 'gatsby-link';

const Links = props => {
  if (props.isActive) {
    return (
      <div className="awd-navbar__links is-active">
        <Link to="/#mission" className="awd-navbar__link">
          Mission
        </Link>
        <Link to="/#services" className="awd-navbar__link">
          Services
        </Link>
        <Link to="/team" className="awd-navbar__link">
          Team
        </Link>
        <Link
          to="/#contact"
          className="awd-navbar__link awd-navbar__link-contact"
        >
          Get in Touch!
        </Link>
      </div>
    );
  } else {
    return (
      <div className="awd-navbar__links">
        <Link to="/#mission" className="awd-navbar__link">
          Mission
        </Link>
        <Link to="/#services" className="awd-navbar__link">
          Services
        </Link>
        <Link to="/team" className="awd-navbar__link">
          Team
        </Link>
        <Link
          to="/#contact"
          className="awd-navbar__link awd-navbar__link-contact"
        >
          Get in Touch
        </Link>
      </div>
    );
  }
};

export default Links;
