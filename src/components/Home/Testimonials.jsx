import React from 'react';
import styled from 'styled-components';

const W = styled.div`
  height: 200px;
  width: 200px;
  border: solid 5px #334fa7;
  border-radius: 100px;
`;
const Wrapper = props => <W className="bg">{props.children}</W>;

const Testimonials = () => {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <div>
          <h2 className="title is-2 has-text-centered">Testimonials</h2>
          <div className="columns">
            <div className="column is-3">
              <Wrapper>
                <img src="" alt="" />
              </Wrapper>
            </div>
            <div className="column is-9 content is-size-4">
              <p>
              Working with Omar was awesome. He's easy to work with, executes coding sprints on-time and brings forth good ideas that enhance the project.</p>
              <p>
                <i>Christopher Mendoza, Porfolio Manager & FinTech Evangelist</i>
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-9 content is-size-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                laborum aperiam repellendus, eligendi inventore consectetur,
                facere explicabo officia ipsum non minus sed voluptatum
                voluptatem dolores.
              </p>
              <p>
                <i>Attribution</i>
              </p>
            </div>
            <div className="column is-3">
              <Wrapper>
                <img src="" alt="" />
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
