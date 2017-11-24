import React from 'react';

const Section = props => {
  return (
    <section
      className={`section ${props.sectionClass || ''}`}
      style={props.style}
    >
      <div className={`container ${props.containerClass || ''}`}>
        {props.children}
      </div>
    </section>
  );
};

export default Section;
