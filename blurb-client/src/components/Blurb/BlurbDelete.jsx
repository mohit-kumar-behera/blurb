import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbDelete = props => {
  useDynamicTitle(props.title);

  return (
    <div className="blurb-detail-wrapper">
      <div className="blurb-detail-header">
        <h1>Delete Blurb</h1>
      </div>
      <div className="blurb-detail-body">
        <p>
          <strong>Are you sure you want to delete Apostle Of Worship ?</strong>
        </p>
      </div>
      <div className="blurb-detail-footer content-right">
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
