import React, { useState, useEffect } from 'react';

// Local Import
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

// API
import APIHelper from './APIHelper.js';

function App() {
  return (
    <div className="m-auto overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
