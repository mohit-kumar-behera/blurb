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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<P />} />
      </Route>
    </Routes>
  );
};

export default App;
