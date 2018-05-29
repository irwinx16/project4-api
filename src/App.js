import React, { Component } from 'react';
import './App.css';

// Components
import ProductContainer from './ProductContainer'
// import LoginRegister from './LoginRegister';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {

    console.log(this.state, "this is the app.js container");
    return (
      <div className="App">
        <ProductContainer/>


      </div>
    );
  }
}


export default App;
