import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import Navbar from '../Navbar/Navbar';

// import stylesheets
import './PageLayout.css';

class PageLayout extends React.Component {
  render() {
    return (
      <section id="page">
        <Navbar />
        <div class="page-container">
          <Outlet />
        </div>
      </section>
    );
  }
}

export default PageLayout;
