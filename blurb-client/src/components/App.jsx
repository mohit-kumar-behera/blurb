import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import components
import PageLayout from './Layout/PageLayout';
import AuthPageLayout from './Layout/AuthPageLayout';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
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

        <Route path="auth" element={<AuthPageLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login title="Login | Blurb" />} />
          <Route path="signup" element={<Signup title="Signup | Blurb" />} />
        </Route>

        <Route path="*" element={<NoMatch title="Something went wrong" />} />
      </Route>
    </Routes>
  );
};

export default App;
