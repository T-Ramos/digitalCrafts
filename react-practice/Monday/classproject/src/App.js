import React, { Component } from 'react';

import Products from './Products';
import Test2 from './Test2'; 

class App extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <Products name={this.props.name}/>
        <Test2 txt="Hello World"/>
      </div>
    );
  }
}

export default App;
