import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import components
import PageLayout from './Layout/PageLayout';
import Home from './Home/Home';
import NoMatch from './Error/NoMatch';

// import stylesheets
import './App.css';

const P = () => {
  return 'P component P componentP component';
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home title="Blurb" />} />
        <Route path="about" element={<P title="test title" />} />
        <Route path="*" element={<NoMatch title="Something went wrong" />} />
      </Route>
    </Routes>
  );
};

export default App;
