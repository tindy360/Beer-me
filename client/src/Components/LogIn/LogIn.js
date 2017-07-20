import React from 'react';
import {  Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import {logInUser} from '../../Action';

const LogIn = ({loginData}) =>
    <div>
      <h1>Sign in </h1>
      <Form
        onSubmit={
          e => {e.preventDefault();
            let userData = {user:`${e.target.username.value}`, password:`${e.target.password.value}`};
            console.log(userData);//returns expected object
            loginData(userData);
          }
        } >
        <FormGroup>
          <Label for='email'></Label>
          <Input type='username' name='username' id='username' placeholder='Email'></Input>
        </FormGroup>
        <FormGroup>
          <Label for='password'></Label>
          <Input type='password' name='password' id='password' placeholder='password'></Input>
        </FormGroup>
        <Button>Sign In</Button>
      </Form>
    </div>;

const mapDispatchToProps = dispatch => ({
  loginData: (userData) => dispatch(logInUser(userData))
});

export default connect(null, mapDispatchToProps) (LogIn);
