import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div className="awd-404__wrapper">
    <h1 className="title is-1 has-text-white">404 Not Found</h1>
    <p className="has-text-1">You shall not pass!</p>
    <br />
    <Link to="/">Back to the Shire</Link>
  </div>
);

export default NotFoundPage;
