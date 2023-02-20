import React from 'react';

import { Footer, Blog, Posibility, Features, WhatPIKUP, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatPIKUP />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
