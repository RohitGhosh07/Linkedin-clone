import React from 'react';
// Styles
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

// Components
import Login from './components/Login'

// External Imports
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<React.Fragment><Header /><Home /></React.Fragment>} />
      </Routes>

    </div>
  );
}

export default App;
