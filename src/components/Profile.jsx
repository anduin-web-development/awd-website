import React from 'react';

const Profile = props => {
  return (
    <div>
      <img src="" alt="" />
      <div className="content">
        <h3 className="title is-3">{props.name}</h3>
        <h5 className="subtitle is-5">{props.title}</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          obcaecati deserunt accusantium laudantium. At consequuntur nostrum
          expedita molestias ipsum itaque id porro dignissimos dolorem
          blanditiis voluptatibus, fugit earum quasi! Harum.
        </p>
      </div>
    </div>
  );
};

export default Profile;
