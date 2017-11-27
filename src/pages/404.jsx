import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const NotFoundPage = () => (
  <div className="awd-404__wrapper">
    <h1 className="title is-1 has-text-white">404 Not Found</h1>
    <p className="has-text-1">
      You requested a resource that doesn&#39;t exist.
    </p>
    <br />
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFoundPage;
