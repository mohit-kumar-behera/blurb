import React from 'react';
import { Link } from 'react-router-dom';

// import components
import StretchLink from '../StretchLink';

const BlurbCard = ({ blurb }) => {
  return (
    <div className="blurb-card">
      <div className="blurb-card__body">
        {/* <StretchLink>
          <Link
            to={`blurb/${blurb.title.toLowerCase().replaceAll(' ', '-')}`}
            className="title"
          >
            {blurb.title}
          </Link>
        </StretchLink> */}

        <StretchLink
          to={`blurb/${blurb.title.toLowerCase().replaceAll(' ', '-')}`}
          className="title"
        >
          {blurb.title}
        </StretchLink>
      </div>
      <div className="blurb-card__footer">
        <Link
          to={`profile/${blurb.user.name.split(' ')[0].toLowerCase()}`}
          className="author"
        >
          {blurb.user.name}
        </Link>
      </div>
    </div>
  );
};

export default BlurbCard;
