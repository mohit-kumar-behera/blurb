import React from 'react';

// import components
import BlurbCard from './BlurbCard';

// import stylesheets
import './Blurb.css';

const blurbData = [
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Father of Silver',
    user: {
      name: 'Judy Allen',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Shogun of Peace dsiufis idsfi dsfi ',
    user: {
      name: 'Nettie Norman',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Shogun of the Sun',
    user: {
      name: 'Candice Parks',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Baron of Finance',
    user: {
      name: 'Myrtle Patterson',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Official of Agents dsf dsifg iudsgf iudsg fiudsg fiudfiug sdifug i',
    user: {
      name: 'Nellie Kelly',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Delegate of Law',
    user: {
      name: 'Ada Hampton',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Liaison of Guards',
    user: {
      name: 'Eva Washington',
    },
  },
  {
    id: Math.floor(Math.random() * 14575),
    title: 'Apostle of Worship',
    user: {
      name: 'Clifford Neal',
    },
  },
];

class Blurb extends React.Component {
  renderBlurbs() {
    return blurbData.map(blurb => <BlurbCard blurb={blurb} />);
  }

  render() {
    return <div className="blurb-wrapper">{this.renderBlurbs()}</div>;
  }
}

export default Blurb;
