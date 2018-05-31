import React, { Component } from 'react';
import './style.css';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      register: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.register) this.props.doRegister(this.state.username, this.state.password)
    else this.props.doLogin(this.state.username, this.state.password)
  }

  handleInput = (e) => {
    const field = e.currentTarget.name
    if (field === "username") this.setState({"username": e.currentTarget.value})
      else this.setState({"password": e.currentTarget.value})
  }
  registration = (e) => {
    this.setState({register: true});
  }
  loggingIn = (e) => {
    this.setState({register: false});
  }



  render() {
    return (
      <div>
        <h1> This is login / register.</h1>
        <p><span className={this.state.register ? "current" : null} onClick={this.registration}>Register</span> • <span className={!this.state.register ? "current" : null} onClick={this.loggingIn}>Log In</span></p>

      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Username</ControlLabel>{' '}
          <FormControl type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
        </FormGroup>{' '}
        <FormGroup controlId="formInlineEmail">
          <ControlLabel>Password</ControlLabel>{' '}
          <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput}  />
        </FormGroup>{' '}
        <Button type="submit" >{this.state.register ? "Register" : "Login"}</Button>
      </Form>;

      </div>
    )
  }
}
export default LoginRegister;
