import React from 'react';
import { Link } from 'react-router-dom';

const BlurbMeta = props => {
  const { user, createdAt, updatedAt } = props;

  return (
    <>
      <h1 className="user-info">{user}</h1>
      <div className="datetime-info">
        <small>
          <b>Created At</b> <span>{createdAt}</span>
        </small>
        <small>
          <b>Updated At</b> <span>{updatedAt}</span>
        </small>
      </div>
    </>
  );
};

export default BlurbMeta;
