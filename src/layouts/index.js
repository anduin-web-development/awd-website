import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro',
        }
      ]}
    />
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
