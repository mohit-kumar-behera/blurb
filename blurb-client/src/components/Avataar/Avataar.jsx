import React from 'react';

import './Avataar.css';

const Avataar = ({ avataar, img }) => {
  return (
    <div
      className={`avataar ${avataar.classes && avataar.classes.join(' ')} ${
        avataar.rounded ? 'rounded' : ''
      }`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className={`avataar__img ${img.classes && img.classes.join(' ')}${
          img.cover ? 'cover' : 'contain'
        }`}
      />
    </div>
  );
};

export default Avataar;
