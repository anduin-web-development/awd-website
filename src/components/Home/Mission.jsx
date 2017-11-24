import React from 'react';
import styled from 'styled-components';
import Anchor from '../Anchor';

const Mission = () => {
  return (
    <div className="has-text-centered">
      <Anchor id="mission" />
      <h2 className="title is-2 has-text-white">Mission</h2>
      <div className="columns">
        <div className="column is-8 is-offset-2 content is-size-4">
          <p>
            A business card and an address. Time was, that's all you had to
            have. These days, it's a little more complicated. You need a
            website, a digital marketing strategy - an internet identity. We can
            help with that.
          </p>
          <p>
            We're web developers. But more than that, we're&nbsp;
            <i>
              <u>partners</u>
            </i>. Whether you need a simple single-page website or a custom
            application, we'll help you bring your business to the web - and
            we’ll make sure your web presence is in keeping with your company's
            identity and values.
          </p>
          <p>So you can focus on building your business.</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
