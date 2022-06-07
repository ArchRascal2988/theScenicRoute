import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogSign from './pages/LogSign';
import Home from './pages/Home';
import Dash from './pages/Dash';
import Create from './pages/Create';

function App() {
  return (
    <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/dashboard" 
              element={<Dash />} 
            />
            <Route 
              path="/create" 
              element={<Create />} 
            />
            <Route
            path= '/login'
            element={<LogSign type='login' />}
            />
            <Route
            path= '/signup'
            element={<LogSign type='signup' />}
            />
          </Routes>
    </Router>
  );
}

export default App;
