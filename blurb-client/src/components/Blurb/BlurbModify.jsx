import React from 'react';
import { Link } from 'react-router-dom';

const BlurbModify = () => {
  return (
    <div className="modify-info">
      <Link to="" className="modify-info__link">
        <strong>Blurb Detail</strong>
      </Link>
      <Link to="edit" className="modify-info__link">
        <strong>Edit Blurb</strong>
      </Link>
      <Link to="delete" className="modify-info__link">
        <strong>Delete Blurb</strong>
      </Link>
    </div>
  );
};

export default BlurbModify;
