import React, { Component } from 'react';

import Products from './Products';


class App extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <Products name={this.props.name}/>
      </div>
    );
  }
}

export default App;
