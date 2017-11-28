import React from 'react';
import styled from 'styled-components';

import consultation from '../../assets/consultation.svg';
import graphicDesign from '../../assets/graphic-design.svg';
import staticWebsite from '../../assets/static-website.svg';
import customFeatures from '../../assets/custom-features.svg';
import webApplications from '../../assets/web-applications.svg';
import hostingMaintenance from '../../assets/hosting-maintenance.svg';
import Anchor from '../Anchor';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 200;
  height: 200;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin-bottom: 1rem;
`;

const Service = props => (
  <div className="column">
    <ContentWrapper>
      <ImgWrapper>
        <Img src={props.src} alt={props.title} />
      </ImgWrapper>
      <div className="content">
        <h3 className="title is-3 has-text-centered">{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </ContentWrapper>
  </div>
);

const Services = () => {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <Anchor id="services" />
        <h2 className="title is-2 has-text-centered">Services</h2>
        <div className="columns">
          <Service
            title="Consultation"
            body="Don't know what you need? We'll help you figure it out. Our services might be perfectly suited to your needs - but if they're not, we're happy to point you in the right direction. The first coffee is on us!"
            src={consultation}
          />
          <Service
            src={graphicDesign}
            title="Graphic Design"
            body="Designing for the web is different from designing for print. We do design in-house and we've got photographers on call, so you'll never be lacking for the perfect graphic for your website."
          />
          <Service
            src={staticWebsite}
            title="Static Websites"
            body="If you just want to publish basic information about your business on the web, you probably want a static website. We'll work off your input and code up a site from scratch, so you get a highly custom, modern website."
          />
        </div>
        <div className="columns">
          <Service
            src={customFeatures}
            title="Custom Features"
            body="Anything from a blog to a custom twitter-feed - if you've seen it out in the wild wild web, we can probably build it. Let us know what you're looking for, and we'll spec it out and give you an estimate."
          />
          <Service
            src={webApplications}
            title="Web Applications"
            body="You might need something more than a simple website - a database, custom integrations with third-party services, or an admin interface. We do full-stack development, which means that we can do all of the above."
          />
          <Service
            src={hostingMaintenance}
            title="Hosting & Maintenance"
            body="If you already have a domain name and hosting, we're happy to work with what you've got. If you want to leave it to us, we can launch, secure, host, and maintain your website for a monthly fee."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
