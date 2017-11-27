import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import action from '../assets/action__sm-conference.jpg';
import Footer from '../components/Footer/Footer';
import Heel from '../components/Footer/Heel';

const Sitemap = () => {
  return (
    <div>
      <Navbar />
      <PageHeader bgUrl={action}>Sitemap</PageHeader>
      <Section />
      <Section>
        <div className="content">
          <ul>
            <li>Home</li>
            <li>
              <ul>
                <li>Mission</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </li>
            <li>Team</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>
      </Section>
      <Footer />
      <Heel />
    </div>
  );
};

export default Sitemap;
