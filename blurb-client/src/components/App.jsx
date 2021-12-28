import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// import components
import PageLayout from './Layout/PageLayout';
import AuthPageLayout from './Layout/AuthPageLayout';
import BlurbDetailLayout from './Layout/BlurbDetailLayout';
import ProtectedRoute from './Authentication/ProtectedRoute';
import ProtectedUserRoute from './Authentication/ProtectedUserRoute';
import Login from './Authentication/Login';
import Logout from './Authentication/Logout';
import Signup from './Authentication/Signup';
import Home from './Home/Home';
import BlurbDetail from './Blurb/BlurbDetail';
import BlurbEdit from './Blurb/BlurbEdit';
import BlurbDelete from './Blurb/BlurbDelete';
import ProfileLayout from './Layout/ProfileLayout';
import Profile from './Profile/Profile';
import ProfileBlurb from './Profile/ProfileBlurb';
import ProfileBlurbCreate from './Profile/ProfileBlurbCreate';
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
  return <h1>My Profile</h1>;
};

const B = () => {
  return <h1>My Blurbs</h1>;
};

const C = () => {
  return <h1>My Settings</h1>;
};

const D = () => {
  return <h1></h1>;
};

const E = () => {
  return <h1></h1>;
};

const F = () => {
  return <h1></h1>;
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
          path="auth/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />

        <Route path="blurb/:slug" element={<BlurbDetailLayout />}>
          <Route index element={<BlurbDetail title="Blurb" />} />
          <Route
            path="edit"
            element={
              <ProtectedRoute>
                <ProtectedUserRoute>
                  <BlurbEdit title="Edit Blurb" />
                </ProtectedUserRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="delete"
            element={
              <ProtectedRoute>
                <ProtectedUserRoute>
                  <BlurbDelete title="Delete Blurb" />
                </ProtectedUserRoute>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="profile/:username" element={<ProfileLayout />}>
          <Route index element={<Profile title="Profile Page" />} />
          <Route path="blurb" element={<ProfileBlurb title="All Blurbs" />} />
          <Route
            path="blurb/create"
            element={
              <ProtectedRoute>
                <ProtectedUserRoute>
                  <ProfileBlurbCreate title="Create Blurb" />
                </ProtectedUserRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <ProtectedUserRoute>
                  <C />
                </ProtectedUserRoute>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<NoMatch title="Something went wrong" />} />
      </Route>
    </Routes>
  );
};

export default App;
