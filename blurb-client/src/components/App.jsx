import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// import components
import PageLayout from './Layout/PageLayout';
import AuthPageLayout from './Layout/AuthPageLayout';
import ProtectedRoute from './Authentication/ProtectedRoute';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Home from './Home/Home';
import NoMatch from './Error/NoMatch';

// import stylesheets
import './App.css';

const P = () => {
  return (
    <>
      <h1>User page</h1>
      <Outlet />
    </>
  );
};

const A = () => {
  return 'index compoennt';
};

const B = () => {
  return 'Create Blurb';
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home title="Blurb" />} />
        <Route path="about" element={<P title="test title" />} />

        <Route path="auth" element={<AuthPageLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login title="Login | Blurb" />} />
          <Route path="signup" element={<Signup title="Signup | Blurb" />} />
        </Route>

        <Route
          path="user/:username"
          element={
            <ProtectedRoute>
              <P />
            </ProtectedRoute>
          }
        >
          <Route index element={<A />} />
          <Route path="blurb" element={<B />} />
        </Route>

        <Route path="*" element={<NoMatch title="Something went wrong" />} />
      </Route>
    </Routes>
  );
};

export default App;
