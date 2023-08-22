// Internal Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// External Imports
import { BrowserRouter } from "react-router-dom";

// Styles
import './index.css';

// Components
import App from './App';

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


