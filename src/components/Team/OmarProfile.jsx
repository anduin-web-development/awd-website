import React from 'react';
import Mugshot from './Mugshot';
import SocialLinks from './SocialLinks';
import omar from '../../assets/omar-at-work.jpg';

const OmarProfile = props => {
  return <div className="columns">
      <div className="column is-5">
        <Mugshot src={omar} />
      </div>
      <div className="column is-7 content">
        <h3 className="title is-3">Omar Malik</h3>
        <h5 className="subtitle is-5">Web Developer</h5>
        <SocialLinks linkedin="https://www.linkedin.com/in/omarmalikprofile/" github="https://github.com/omarcodex" twitter="https://twitter.com/omarcodex" />
        <p>
          Omar is a web developer from San Diego. Recently, he supported the
          launch of DoWhop, a software startup based out of the EvoNexus
          incubator. His background is in science communications, where he has
          worked for non-profit and government clients. He has experience
          working across media platforms including video production.
        </p>
        <p>
          He holds degrees in biology from Berkeley and environmental policy
          from Yale. At Dev Bootcamp, he gained expertise in Agile software
          development. He enjoys hiking for fun and living sustainably. 
        </p>
        <a href="mailto:omar@anduin.io">
          <i className="fa fa-envelope fa-lg" aria-hidden="true" />
          <span>&nbsp;Email Omar</span>
        </a>
      </div>
    </div>;
};

export default OmarProfile;
