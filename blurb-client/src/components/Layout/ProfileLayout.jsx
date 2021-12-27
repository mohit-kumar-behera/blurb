import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import OvenLayout from './OvenLayout';
import ProfileNavigation from '../Profile/ProfileNavigation';

import { styleOrange } from './OvenLayoutStyle';

const ProfileLayout = () => {
  return (
    <OvenLayout
      style={styleOrange}
      leftChildren={<ProfileNavigation />}
      rightChildren={<Outlet />}
    />
  );
};

export default ProfileLayout;
