import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/home" />
              : <LoginPage onLogin={() => setIsAuthenticated(true)} />
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated
              ? <HomePage />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;