import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import UnAutheticatedRoute from '../Authentication/UnAutheticatedRoute';

// import stylesyheets
import './Auth.css';

class AuthPageLayout extends React.Component {
  render() {
    return (
      <UnAutheticatedRoute>
        <div className="authentication-wrapper">
          <div className="form-wrapper">
            <Outlet />
          </div>
        </div>
      </UnAutheticatedRoute>
    );
  }
}

export default AuthPageLayout;
