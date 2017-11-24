import React from 'react';
import styled from 'styled-components';

import consultation from '../../assets/consultation.svg';
import graphicDesign from '../../assets/graphic-design.svg';
import staticWebsite from '../../assets/static-website.svg';
import customFeatures from '../../assets/custom-features.svg';
import webApplications from '../../assets/web-applications.svg';
import hostingMaintenance from '../../assets/hosting-maintenance.svg';
import Anchor from '../Anchor';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Services = () => {
  return (
    <div>
      <Anchor id="services" />
      <h2 className="title is-2 has-text-centered">Services</h2>
      <div className="columns">
        <Div className="column">
          <img src={consultation} alt="" width="200" height="200" />
          <div className="content">
            <h3 className="title is-3 has-text-centered">Consultation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </Div>
        <div className="column">
          <div>
            <img src={graphicDesign} alt="" />
          </div>
          <div className="content">
            <h3 className="title is-3">Graphic Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={staticWebsite} alt="" />
          </div>
          <div className="content">
            <h3 className="title is-3">Static Websites</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div>
            <img src={customFeatures} alt="" />
          </div>
          <div className="content">
            <h3 className="title is-3">Custom Features</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={webApplications} alt="" />
          </div>
          <div className="content">
            <h3 className="title is-3">Web Applications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={hostingMaintenance} alt="" />
          </div>
          <div className="content">
            <h3 className="title is-3">Hosting & Applications</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
