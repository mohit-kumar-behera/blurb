import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import OvenLayout from './OvenLayout';
import BlurbNavigation from '../Blurb/BlurbNavigation';

import { styleBlue } from './OvenLayoutStyle';

const BlurbDetailLayout = () => {
  return (
    <OvenLayout
      style={styleBlue}
      leftChildren={<BlurbNavigation />}
      rightChildren={<Outlet />}
    />
  );
};

export default BlurbDetailLayout;
