import React from 'react';
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom';

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
      <Link to="new">New</Link>
      <Link to="edit">Edit</Link>
      <Link to="delete">Delete</Link>
      <Link to="edit/798798798">Edit exact</Link>
      <hr />
      <hr />
      <Outlet />
    </div>
  );
};

const Comp3Home = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 3 Home ppage</h1>
      <hr />
    </div>
  );
};

const Comp3New = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 3 new ppage</h1>
      <hr />
    </div>
  );
};

const Comp3Edit = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 3 edit ppage</h1>
      <hr />
      <Outlet />
    </div>
  );
};

const Comp3Delete = () => {
  return (
    <div className="component-wrapper">
      <h1>Component 3 delte ppage</h1>
      <hr />
    </div>
  );
};

const Comp3EditExact = () => {
  const { id } = useParams();

  return (
    <div className="component-wrapper">
      <h1>Component 3 edit ID: {id} page</h1>
      <hr />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Comp1 />} />
        <Route path="/comp2" exact element={<Comp2 />} />
        <Route path="/comp3" exact element={<Comp3 />}>
          <Route index element={<Comp3Home />} />
          <Route path="new" exact element={<Comp3New />} />
          <Route path="edit" exact element={<Comp3Edit />}>
            <Route path=":id" exact element={<Comp3EditExact />} />
          </Route>
          <Route path="delete" exact element={<Comp3Delete />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
