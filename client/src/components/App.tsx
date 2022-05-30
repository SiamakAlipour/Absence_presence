import React from 'react';
import { BrowserRouter as BRouter } from 'react-router-dom';
import './App.css';
import Router from '../router';

function App() {
  return (
    <BRouter>
      <div className="app">
        <Router />
      </div>
    </BRouter>
  );
}

export default App;
