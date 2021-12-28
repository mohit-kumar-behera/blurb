import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

// import stylesheets
import '../Layout/OvenLayout.css';

const BlurbDelete = props => {
  useDynamicTitle(props.title);

  return (
    <div className="ovenlayout-detail-wrapper">
      <div className="ovenlayout-detail-header">
        <h1 className="blurb-header">Delete Blurb</h1>
      </div>
      <div className="ovenlayout-detail-body">
        <p>
          <strong>Are you sure you want to delete Apostle Of Worship ?</strong>
        </p>
      </div>
      <div className="ovenlayout-detail-footer content-right">
        <button
          className="modal-action-btn danger"
          onClick={() => console.log('delete blurb')}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlurbDelete;
