import React from 'react';
import Link from 'gatsby-link';
import Anchor from '../components/Anchor';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import Hero from '../components/Home/Hero';
import Mission from '../components/Home/Mission';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';
import ScrollInNavbar from '../components/Navbar/ScrollInNavbar';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';

const IndexPage = () => (
  <div>
    <ScrollInNavbar />
    <Hero />
    <Section sectionClass="awd-bg-primary">
      <Mission />
    </Section>
    <Section>
      <Services />
    </Section>
    {/* <Section> */}
      {/* <Testimonials /> */}
    {/* </Section> */}
    <Section>
      <Anchor id="contact" />
      <h3 className="title is-3 has-text-centered">
        Get in touch! The first coffee is on us.
      </h3>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <ContactForm />
        </div>
      </div>
    </Section>
    <Footer />
    <Heel />
  </div>
);

export default IndexPage;
