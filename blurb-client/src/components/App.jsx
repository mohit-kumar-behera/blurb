import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import components
import PageLayout from './Layout/PageLayout';
import Home from './Home/Home';

// import stylesheets
import './App.css';

const P = () => {
  return 'P component P componentP component';
};

const NoMatch = () => {
  return <h1>Error 404. Sorry, No Page Found</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<P />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
