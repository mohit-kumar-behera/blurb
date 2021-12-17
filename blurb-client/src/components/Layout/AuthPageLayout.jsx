import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import UnAutheticatedRoute from '../Authentication/UnAutheticatedRoute';

class AuthPageLayout extends React.Component {
  render() {
    return (
      <UnAutheticatedRoute>
        <>
          <p>layout for auth</p>
          <hr />
          <Outlet />
        </>
      </UnAutheticatedRoute>
    );
  }
}

export default AuthPageLayout;
