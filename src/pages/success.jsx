import React from 'react';
import Link from 'gatsby-link';

const SuccessPage = () => (
  <div className="awd-404__wrapper">
    <h1 className="title is-1 has-text-white">Success!</h1>
    <p className="has-text-1">Your message was sent.</p>
    <br />
    <Link to="/">Back to Homepage</Link>
  </div>
);

export default SuccessPage;
