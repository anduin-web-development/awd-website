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
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum dicta officiis quis repudiandae nemo dignissimos iure, aliquam inventore nesciunt accusantium quasi dolorum facere ipsam."
            src={consultation}
          />
          <Service
            src={graphicDesign}
            title="Graphic Design"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum dicta officiis quis repudiandae nemo dignissimos iure, aliquam inventore nesciunt accusantium quasi dolorum facere ipsam."
          />
          <Service
            src={staticWebsite}
            title="Static Websites"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus harum dicta officiis quis repudiandae nemo dignissimos
                iure, aliquam inventore nesciunt accusantium quasi dolorum
                facere ipsam."
          />
        </div>
        <div className="columns">
          <Service
            src={customFeatures}
            title="Custom Features"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum dicta officiis quis repudiandae nemo dignissimos iure, aliquam inventore nesciunt accusantium quasi dolorum facere ipsam."
          />
          <Service
            src={webApplications}
            title="Web Applications"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum dicta officiis quis repudiandae nemo dignissimos iure, aliquam inventore nesciunt accusantium quasi dolorum facere ipsam."
          />
          <Service
            src={hostingMaintenance}
            title="Hosting & Applications"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum dicta officiis quis repudiandae nemo dignissimos iure, aliquam inventore nesciunt accusantium quasi dolorum facere ipsam."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
