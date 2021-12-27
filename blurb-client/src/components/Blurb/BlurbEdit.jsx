import React from 'react';

// import components
import BlurbForm from './BlurbForm';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbEdit = props => {
  useDynamicTitle(props.title);

  const initialValues = {
    blurbTitle: 'APOSTLE OF WORSHIP',
    blurbContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi',
  };

  return (
    <div className="blurb-detail-wrapper">
      <div className="blurb-detail-header">
        <h1>Edit Blurb</h1>
      </div>
      <div className="blurb-detail-body">
        <BlurbForm initialValues={initialValues} />
      </div>
    </div>
  );
};

export default BlurbEdit;
