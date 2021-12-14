import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// import stylesheets
import './PageLayout.css';

class PageLayout extends React.Component {
  render() {
    return (
      <section id="page">
        <Navbar />
        <div className="page-container">
          <Outlet />
        </div>
        <Footer />
      </section>
    );
  }
}

export default PageLayout;
