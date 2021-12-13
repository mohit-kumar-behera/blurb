import React from 'react';

const BlurbCard = props => {
  return (
    <div className="blurb-card">
      <div className="blurb-card__body">
        <h2 className="title">{props.blurb.title}</h2>
      </div>
      <div className="blurb-card__footer">
        <small className="author">{props.blurb.user.name}</small>
      </div>
    </div>
  );
};

export default BlurbCard;
