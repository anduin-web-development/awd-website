import React from 'react';

const Burger = props => {
  if (props.isActive) {
    return (
      <div className="awd-navbar__burger is-active" onClick={props.handleClick}>
        <span />
        <span />
        <span />
      </div>
    );
  }
  return (
    <div className="awd-navbar__burger" onClick={props.handleClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default Burger;
