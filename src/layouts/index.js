import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './index.scss';
import favicon from '../assets/favicon.ico';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Anduin Web Development | Websites for growing businesses in professional sectors."
      meta={[
        {
          name: 'description',
          content:
            'Anduin Web Development | Websites for growing businesses in professional sectors.',
        },
        {
          name: 'keywords',
          content:
            'web development, web design, san diego, web application, graphic design, custom web design, san diego web design, san diego web development, web developers, growing businesses, startups, bootstrap websites',
        },
      ]}
      link={[
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: favicon,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro',
        },
        {
          rel: 'stylesheet',
          href:
            'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
