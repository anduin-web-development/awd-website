import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import styled from 'styled-components';

const IndexPage = () => (
  <div>
    <Hero />
    <section className="section awd-grey">
      <div className="container">
        <h2 className="subtitle">A business card and an address...</h2>
      </div>
    </section>
  </div>
);

export default IndexPage;
