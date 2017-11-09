import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';

const Contact = () => {
  return (
    <div>
      <PageHeader bgUrl="">Contact</PageHeader>
      <Section containerClass="content has-text-centered">
        <h2 className="title is-2">Short Rundown</h2>
        <p className="is-size-4">We're proudly based in San Diego, CA.</p>
      </Section>

      <Section>
        <p className="content">We're proudly based in San Diego, CA.</p>
        <ContactForm />
      </Section>
    </div>
  );
};

export default Contact;
