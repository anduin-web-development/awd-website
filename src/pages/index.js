import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Home/Hero';
import Mission from '../components/Home/Mission';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import styled from 'styled-components';

const IndexPage = () => (
  <div>
    <Hero />
    <section className="section awd_bg-solitude">
      <div className="container">
        <Mission />
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
