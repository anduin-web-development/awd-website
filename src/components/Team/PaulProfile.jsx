import React from 'react';
import Mugshot from './Mugshot';
import SocialLinks from './SocialLinks';
import paul from '../../assets/paul-at-work.jpg';

const PaulProfile = props => {
  return (
    <div className="columns">
      <div className="column is-5 awd-mobile-show">
        <Mugshot src={paul} />
      </div>
      <div className="column is-7 content">
        <h3 className="title is-3">Paul Newsam</h3>
        <h5 className="subtitle is-5">Web Developer</h5>
        <SocialLinks
          linkedin="https://www.linkedin.com/in/paul-newsam/"
          github="https://github.com/pnewsam"
          twitter="https://twitter.com/a8ntheater"
        />
        <div className="content">
          <p>
            Paul has built websites for businesses in retail, biotech, and
            finance. Before Anduin, he led the data-processing effort at
            Sourcery Technologies, a SaaS tech startup in San Francisco.
          </p>
          <p>
            Formerly, Paul worked as a biologist conducting field surveys around
            the Western U.S. for organizations like USGS, Texas A&M University,
            and Bird Conservancy of the Rockies. He holds a degree in Biology
            and English from U.C. Berkeley and trained in web development at Dev
            Bootcamp. In his spare time, he likes to read, hike, and write
            plays.
          </p>
          <a href="mailto:paul@anduin.io">
            <i className="fa fa-envelope fa-lg" aria-hidden="true" />
            <span>&nbsp;Email Paul</span>
          </a>
        </div>
      </div>
      <div className="column is-5 awd-mobile-hide">
        <Mugshot src={paul} />
      </div>
    </div>
  );
};

export default PaulProfile;
