import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';
import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Anduin Web Development"
      meta={[
        { name: 'description', content: 'Sample' },
        {
          name: 'keywords',
          content:
            'web development, web design, san diego, web application, graphic design, custom web design, san diego web design, san diego web development, web developers',
        },
      ]}
      link={[
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
    <Navbar />
    {children()}
    <Footer />
    <Heel />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
