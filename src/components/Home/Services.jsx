import React from 'react';
import styled from 'styled-components';

import consultation from '../../assets/consultation.svg';
import graphicDesign from '../../assets/graphic-design.svg';
import staticWebsite from '../../assets/static-website.svg';
import customFeatures from '../../assets/custom-features.svg';
import webApplications from '../../assets/web-applications.svg';
import hostingMaintenance from '../../assets/hosting-maintenance.svg';

const Card = styled.div``;

const ImgWrapper = styled.div`
  align-items: center;
  background-color: #ecebf6;
  border: solid 5px #1b1564;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 20px;
  width: 100%;
`;

const Img = styled.img``;

const Services = () => {
  return (
    <div>
      <h2 className="title is-2 has-text-centered">Services</h2>
      <div className="columns">
        <div className="column">
          <ImgWrapper>
            <Img src={consultation} alt="" />
          </ImgWrapper>
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
          <ImgWrapper>
            <img src={graphicDesign} alt="" />
          </ImgWrapper>
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
          <ImgWrapper>
            <img src={staticWebsite} alt="" />
          </ImgWrapper>
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
          <ImgWrapper>
            <img src={customFeatures} alt="" />
          </ImgWrapper>
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
          <ImgWrapper>
            <img src={webApplications} alt="" />
          </ImgWrapper>
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
          <ImgWrapper>
            <img src={hostingMaintenance} alt="" />
          </ImgWrapper>
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
