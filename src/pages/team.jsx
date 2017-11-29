import React from 'react';
import Link from 'gatsby-link';
import PageHeader from '../components/PageHeader';
import OmarProfile from '../components/Team/OmarProfile';
import PaulProfile from '../components/Team/PaulProfile';
import Section from '../components/Section';
import paul from '../assets/paul-at-work.jpg';
import teamHero from '../assets/team__outdoors.jpg';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';

const Team = () => (
  <div>
    <Navbar />
    <PageHeader bgUrl={teamHero}>Our Team</PageHeader>
    <Section>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <OmarProfile />
        </div>
      </div>
    </Section>
    <Section>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <PaulProfile />
        </div>
      </div>
    </Section>
    <Footer />
    <Heel />
  </div>
);

export default Team;
