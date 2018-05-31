<Form inline onSubmit={this.handleSubmit}>
  <FormGroup controlId="formInlineName">
    <ControlLabel>Username</ControlLabel>{' '}
    <FormControl type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <ControlLabel>Password</ControlLabel>{' '}
    <FormControl type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput}  />
  </FormGroup>{' '}
  <Button>{this.state.register ? "Register" : "Login"}</Button>
</Form>;
