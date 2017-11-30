import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import action from '../assets/action__sm-conference.jpg';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';

const H5 = styled.h5`
  padding-left: 1rem;
`;

const SLink = styled(Link)``;

const Sitemap = () => {
  return (
    <div>
      <Navbar />
      <PageHeader bgUrl={action}>Sitemap</PageHeader>
      <Section>
        <div className="content">
          <h3 className="title is-3">
            <SLink to="/">Home</SLink>
          </h3>
          <H5 className="title is-5">
            <SLink to="/#mission">Mission</SLink>
          </H5>
          <H5 className="title is-5">
            <SLink to="/#services">Services</SLink>
          </H5>
          <H5 className="title is-5">
            <SLink to="/#contact">Contact</SLink>
          </H5>
          <h3 className="title is-3">
            <SLink to="/team">Team</SLink>
          </h3>
          <h3 className="title is-3">
            <SLink to="/terms-and-privacy">Terms & Privacy</SLink>
          </h3>
        </div>
      </Section>
      <Footer />
      <Heel />
    </div>
  );
};

export default Sitemap;
