import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbEdit = props => {
  useDynamicTitle(props.title);

  return (
    <div className="blurb-detail-wrapper">
      <div className="blurb-detail-header">
        <h1>Edit Blurb</h1>
      </div>
      <div className="blurb-detail-body">
        <p>Body to edit Blurb</p>
      </div>
    </div>
  );
};

export default BlurbEdit;
