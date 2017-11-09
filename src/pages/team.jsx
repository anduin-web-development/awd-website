import React from 'react';
import Link from 'gatsby-link';
import PageHeader from '../components/PageHeader';
import Profile from '../components/Profile';
import Section from '../components/Section';

const Team = () => (
  <div>
    <PageHeader bgUrl="">Team</PageHeader>
    <Section containerClass="content has-text-centered">
      <h2 className="title is-2">About Us</h2>
      <p className="is-size-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        assumenda iusto provident suscipit odio fugit amet magnam eveniet
        repudiandae a molestias unde adipisci, accusantium cum ratione corrupti
        expedita modi voluptate.
      </p>
    </Section>
    <Section>
      <div className="columns">
        <div className="column">
          <Profile name="Omar Malik" title="Web Developer" />
        </div>
        <div className="column">
          <Profile name="Paul Newsam" title="Web Developer" />
        </div>
        <div className="column">
          <Profile name="Aboli Rane" title="Business Development Specialist" />
        </div>
      </div>
    </Section>
  </div>
);

export default Team;
