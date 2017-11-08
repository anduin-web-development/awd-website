import React from 'react';

import consultation from '../../assets/consultation.svg';
import graphicDesign from '../../assets/graphic-design.svg';
import staticWebsite from '../../assets/static-website.svg';
import customFeatures from '../../assets/custom-features.svg';
import webApplications from '../../assets/web-applications.svg';
import hostingMaintenance from '../../assets/hosting-maintenance.svg';

const Services = () => {
  return (
    <div>
      <div className="columns">
        <div className="column">
          <img src={consultation} alt="" />
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
          <img src={graphicDesign} alt="" />
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
          <img src={staticWebsite} alt="" />
          <div className="content">
            <h3 className="title is-3">Static Website</h3>
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
          <img src={customFeatures} alt="" />
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
          <img src={webApplications} alt="" />
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
          <img src={hostingMaintenance} alt="" />
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
