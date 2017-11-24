import React from 'react';

const Anchor = props => {
  return (
    <span
      id={props.id}
      style={{
        display: 'block',
        position: 'relative',
        top: '-80px',
      }}
    />
  );
};

export default Anchor;
