import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import OvenLayout from './OvenLayout';

const BlurbDetailLayout = () => {
  return (
    <OvenLayout
      leftChildren={<h1>Left Child Manual</h1>}
      rightChildren={<Outlet />}
    />
  );
};

export default BlurbDetailLayout;
