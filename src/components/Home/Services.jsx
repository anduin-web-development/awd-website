import React from 'react';
import styled from 'styled-components';

import consultation from '../../assets/consultation.svg';
import graphicDesign from '../../assets/graphic-design.svg';
import staticWebsite from '../../assets/static-website.svg';
import customFeatures from '../../assets/custom-features.svg';
import webApplications from '../../assets/web-applications.svg';
import hostingMaintenance from '../../assets/hosting-maintenance.svg';

const Card = styled.div``;

const W = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 20px;
  width: 100%;
`;
const Wrapper = props => <W className="bg">{props.children}</W>;

const Services = () => {
  return (
    <div>
      <h2 className="title is-2 has-text-centered">Services</h2>
      <div className="columns">
        <div className="column">
          <Wrapper>
            <img src={consultation} alt="" />
          </Wrapper>
          <div className="content">
            <h3 className="title is-3">Consultation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              harum dicta officiis quis repudiandae nemo dignissimos iure,
              aliquam inventore nesciunt accusantium quasi dolorum facere ipsam.
            </p>
          </div>
        </div>
        <div className="column">
          <Wrapper>
            <img src={graphicDesign} alt="" />
          </Wrapper>
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
          <Wrapper>
            <img src={staticWebsite} alt="" />
          </Wrapper>
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
          <Wrapper>
            <img src={customFeatures} alt="" />
          </Wrapper>
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
          <Wrapper>
            <img src={webApplications} alt="" />
          </Wrapper>
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
          <Wrapper>
            <img src={hostingMaintenance} alt="" />
          </Wrapper>
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
