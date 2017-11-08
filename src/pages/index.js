import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import styled from 'styled-components';

const IndexPage = () => (
  <div>
    <Hero />
    <section className="section awd_bg-solitude">
      <div className="container">
        <h2 className="subtitle">A business card and an address...</h2>
      </div>
    </section>
    <section className="section awd_bg-alabaster">
      <div className="container">
        <Services />
      </div>
    </section>
    <section className="section awd_bg-solitude">
      <div className="container">
        <Testimonials />
      </div>
    </section>
  </div>
);

export default IndexPage;
