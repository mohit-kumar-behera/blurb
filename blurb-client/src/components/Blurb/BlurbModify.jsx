import React from 'react';
import { Link } from 'react-router-dom';

const BlurbModify = () => {
  return (
    <div className="modify-info">
      <Link to="edit" className="modify-info__link">
        <strong>Edit</strong>
      </Link>
      <Link to="delete" className="modify-info__link">
        <strong>Delete</strong>
      </Link>
    </div>
  );
};

export default BlurbModify;
