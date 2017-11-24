import React from 'react';
import Link from 'gatsby-link';
import PageHeader from '../components/PageHeader';
import OmarProfile from '../components/Team/OmarProfile';
import PaulProfile from '../components/Team/PaulProfile';
import Section from '../components/Section';
import paul from '../assets/paul-at-work.jpg';
import teamHero from '../assets/team__outdoors.jpg';

const Team = () => (
  <div>
    <PageHeader bgUrl={teamHero}>Team</PageHeader>
    <Section containerClass="content has-text-centered">
      <h2 className="title is-2 has-text-white">About Us</h2>
      <p className="is-size-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        assumenda iusto provident suscipit odio fugit amet magnam eveniet
        repudiandae a molestias unde adipisci, accusantium cum ratione corrupti
        expedita modi voluptate.
      </p>
    </Section>
    <Section>
      <OmarProfile />
    </Section>
    <Section>
      <PaulProfile />
    </Section>
    {/* <Section>
      <Profile name="Aboli Rane" title="Business Development Specialist" />
    </Section> */}
  </div>
);

export default Team;
