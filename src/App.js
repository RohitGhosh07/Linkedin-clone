import React from 'react';
import { useEffect } from "react";
import { getUserAuth } from "./actions";
// Styles
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

// Components
import Login from './components/Login'

// External Imports
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';

const App = (props) => {

  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<React.Fragment><Header /><Home /></React.Fragment>} />
      </Routes>

    </div>
  );
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
