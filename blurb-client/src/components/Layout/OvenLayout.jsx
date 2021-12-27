import React from 'react';

// import stylesheets
import './OvenLayout.css';

const OvenLayout = ({ leftChildren, rightChildren }) => {
  return (
    <div className="oven-layout">
      <div className="oven-layout__left">{leftChildren}</div>
      <div className="oven-layout__right">{rightChildren}</div>
    </div>
  );
};

export default OvenLayout;
