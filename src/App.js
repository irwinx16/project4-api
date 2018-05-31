import React, { Component } from 'react';
import './App.css';

// Components
import ProductContainer from './ProductContainer'
import LoginRegister from './LoginRegister';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      logInErrorMessage: ''
    }
  }

  doLogin = async (username, password) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    const loginJson = await fetch('http://localhost:9292/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const loggedIn = await loginJson.json();
      // console.log(loggedIn);
      if (loggedIn.success) {
        this.setState({
          loggedIn: true,
          logInErrorMessage: '',
          message: `Welcome back, ${username}!`
        })
      } else {
          this.setState({
            logInErrorMessage: loggedIn.message
          });
        }
  }

  doRegister = async (username, password) => {
    const registerJson = await fetch('http://localhost:9292/user/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const parsedRegisterResponse = await registerJson.json();
      if (parsedRegisterResponse.success) {
        this.setState({
          loggedIn: true,
          message: `Welcome to the site, ${username}!`
        })
      } else {
          this.setState({
            logInErrorMessage: parsedRegisterResponse.message
          })
        }
  }



  render() {

    console.log(this.state, "this is the app.js container");
    return (
        // {this.state.loggedIn ?
        // : <LoginRegister doLogin={this.doLogin} doRegister={this.doRegister} />

        // }
      <div className="App">
        <ProductContainer/>




      </div>
    );
  }
}


export default App;
