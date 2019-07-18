import React from 'react';
import Header from '../Header';
import Router from '../../core/Router';
import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <Router />
  </div>
);

export default App;
