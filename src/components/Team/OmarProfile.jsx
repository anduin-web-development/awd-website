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
        <SocialLinks />
        <p>
          Omar is a web developer from San Diego. Recently, he supported the
          launch of DoWhop.com, a startup based out of the EvoNexus incubator.
          His background is in science communication and so he has experience
          working across media platforms to bring stories to life. He prefers
          to work closely with clients to choose the right tools for the right
          job.
        </p>
        <p>
          He holds a degree in biology from Berkeley and studied at Dev
          Bootcamp to gain expertise in Agile software development. He likes
          to hike in his spare time and supports environmental sustainability.
        </p>
        <a href="mailto:omar@anduin.io">
          <i className="fa fa-envelope fa-lg" aria-hidden="true" />
          <span>&nbsp;Email Omar</span>
        </a>
      </div>
    </div>;
};

export default OmarProfile;
