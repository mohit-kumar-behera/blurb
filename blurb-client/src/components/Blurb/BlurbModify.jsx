import React from 'react';
import { NavLink } from 'react-router-dom';

const BlurbModify = () => {
  const linkData = [
    {
      id: 'linkeditblurb',
      text: 'Edit Blurb',
      toPath: 'edit',
    },
    {
      id: 'linkdeleteblurb',
      text: 'Delete Blurb',
      toPath: 'delete',
    },
  ];

  const renderLink = () => {
    return linkData.map(link => {
      return (
        <NavLink
          key={link.id}
          to={link.toPath}
          className={({ isActive }) =>
            isActive ? 'modify-info__link active' : 'modify-info__link'
          }
        >
          <strong>{link.text}</strong>
        </NavLink>
      );
    });
  };

  return <div className="modify-info">{renderLink()}</div>;
};

export default BlurbModify;
