import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  height: 200px;
  width: 200px;
  border: solid 5px #1b1564;
  border-radius: 100px;
`;

const Testimonials = () => {
  return (
    <div>
      <h2 className="title is-2 has-text-centered">Testimonials</h2>
      <div className="columns">
        <div className="column is-3">
          <ImgWrapper>
            <img src="" alt="" />
          </ImgWrapper>
        </div>
        <div className="column is-9 content is-size-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            laborum aperiam repellendus, eligendi inventore consectetur, facere
            explicabo officia ipsum non minus sed voluptatum voluptatem dolores.
          </p>
          <p>
            <i>Attribution</i>
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-9 content is-size-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            laborum aperiam repellendus, eligendi inventore consectetur, facere
            explicabo officia ipsum non minus sed voluptatum voluptatem dolores.
          </p>
          <p>
            <i>Attribution</i>
          </p>
        </div>
        <div className="column is-3">
          <ImgWrapper>
            <img src="" alt="" />
          </ImgWrapper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
