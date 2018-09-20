import React, { Component } from 'react';
import './App.css';

import Contact from './components/Contact';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <br></br>
        <Contact/>
      </div>
    );
  }
}

export default App;
