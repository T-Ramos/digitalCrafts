import React, { Component } from 'react';

class Hello extends Component {
    render() {
        var name = "Travis"
      return (
        <div className="Hello">
          <h1>Hello {name}</h1>
        </div>
      );
    }
  }
  
  export default Hello;