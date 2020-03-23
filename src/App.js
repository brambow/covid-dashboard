import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import countyData from './data/sc_counties_20200322';

function App() {
  return (
    <div className="App">
      <Header />
      <Content countyData={countyData} />
    </div>
  );
}

export default App;
