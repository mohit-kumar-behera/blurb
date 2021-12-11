import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from './Navbar/Navbar';

// import stylesheets
import './App.css';

const Comp1 = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 1</h1>
    </div>
  );
};
const Comp2 = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 2</h1>
    </div>
  );
};
const Comp3 = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 3</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Comp1 />} />
          <Route path="/comp2" exact element={<Comp2 />} />
          <Route path="/comp3" exact element={<Comp3 />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
