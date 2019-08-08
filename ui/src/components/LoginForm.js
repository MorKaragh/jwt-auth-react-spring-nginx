import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);

  }

  onLoginChange(e) {
    this.props.store.dispatch({
      type: "LOGIN_CHANGE",
      payload: e.target.value
    })
  }

  onPasswordChange(e) {
    this.props.store.dispatch({
      type: "PASSWORD_CHANGE",
      payload: e.target.value
    })
  }

  onLoginClick(e){
    let stor = this.props.store;
    axios.post('/auth/authenticate',{
      username: this.props.store.getState().login,
      password: this.props.store.getState().password
    }).then(function (response) {
      if (response.status === 200) {
        stor.dispatch({
          type: "LOGIN_OK",
          payload: response.data.token
        })
      }
    }).catch(function (error) {
      stor.dispatch({
        type: "LOGIN_BAD",
        payload: error
      })
    });

  }

  render(){
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text"
                        placeholder="Enter login"
                        onChange={this.onLoginChange}
                        defaultValue={this.props.store.login}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
                        placeholder="Password"
                        onChange={this.onPasswordChange}
                        value={this.props.store.password}/>
        </Form.Group>
        <Button variant="primary"
                onClick={this.onLoginClick}>
          Submit
        </Button>
      </Form>
    );
  }

}
