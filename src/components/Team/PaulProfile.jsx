import React from 'react';
import Mugshot from './Mugshot';
import SocialLinks from './SocialLinks';
import paul from '../../assets/paul-at-work.jpg';

const PaulProfile = props => {
  return (
    <div className="columns">
      <div className="column is-7 content">
        <h3 className="title is-3">Paul Newsam</h3>
        <h5 className="subtitle is-5">Web Developer</h5>
        <SocialLinks />
        <div className="content">
          <p>
            Paul has a B.A. in Integrative Biology and English Literature from
            U.C. Berkeley. Following graduation, he spent a number of years
            conducting biological fieldwork for organizations like USGS, Texas
            A&M University, and Bird Conservancy of the Rockies. He was first
            exposed to web development during a stint at a Sourcery
            Technologies, a tech startup in San Francisco, where he led the
            data-processing effort.
          </p>
          <p>
            He trained in web development at DevBootcamp's San Diego campus in
            2017, and since then he's built websites for businesses in retail,
            finance, and biotech. He has experience developing applications in
            Ruby on Rails and React. In his spare time, he likes to read, hike,
            and write plays.
          </p>
        </div>
      </div>
      <div className="column is-5">
        <Mugshot src={paul} />
      </div>
    </div>
  );
};

export default PaulProfile;
