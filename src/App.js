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

  doLogout = async () => {
    const logoutJson = await fetch('http://localhost:9292/user/logout', {
      credentials: 'include' // you MUST include in ALL ajax requests
    })
    const loggedOut = await logoutJson.json();
    if (loggedOut.success) {
      this.setState({
        loggedIn: false,
        showingEmployee: false
      })
    }
      return loggedOut;
  }

  render() {

    console.log(this.state, "this is the app.js container");
    return (
      <div className="App">
        {this.state.loggedIn ? <ProductContainer doLogout={this.doLogout}/>
        :
        <LoginRegister doLogin={this.doLogin} doRegister={this.doRegister} />
        }
      </div>
    );
  }
}


export default App;
