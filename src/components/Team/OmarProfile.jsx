import React from 'react';
import Mugshot from './Mugshot';
import SocialLinks from './SocialLinks';
import omar from '../../assets/omar-at-work.jpg';

const OmarProfile = props => {
  return (
    <div className="columns">
      <div className="column is-5">
        <Mugshot src={omar} />
      </div>
      <div className="column is-7 content">
        <h3 className="title is-3">Omar Malik</h3>
        <h5 className="subtitle is-5">Web Developer</h5>
        <SocialLinks />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          obcaecati deserunt accusantium laudantium. At consequuntur nostrum
          expedita molestias ipsum itaque id porro dignissimos dolorem
          blanditiis voluptatibus, fugit earum quasi! Harum.
        </p>
        <a href="mailto:omar@anduin.io">
          <i className="fa fa-envelope fa-lg" aria-hidden="true" />
          <span>&nbsp;Email Omar</span>
        </a>
      </div>
    </div>
  );
};

export default OmarProfile;
