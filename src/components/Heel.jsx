import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: #fafafa;
  background-color: #010116;
  padding: 1.5rem 0;
  width: 100%;
`;

const Heel = () => {
  return (
    <Div>
      <p className="content has-text-centered">
        &copy; Anduin Web Development, 2017. All rights reserved.
      </p>
    </Div>
  );
};

export default Heel;
