import React, { Component } from 'react';
import './App.css';

import Contact from './components/Contact';
// import Form from './components/Form';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div >
       <Navbar />
       <br></br>
        {/* <Form /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
