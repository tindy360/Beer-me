import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Brewery from './Components/Brewery/Brewery';
import Header from './Components/Header/Header';
import Login from './Components/LogIn/LogIn';
import Dashboard from './Components/Dashboard/Dashboard';
import BodyContainer from './Components/BodyContainer/BodyContainer';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render(loggedIn) {
    return (
      <Router>
        <div>
          <Header></Header>
          <Route exact path={'/'} component={BodyContainer} />
          <Route exact path={'/brewery/:brewery'} component={Brewery} />
          <Route exact path={'/login'} component={Login} />

          <Route exact path={'/dashboard'} component={Dashboard} />

          {/*  <Route exact path={'/'} component={Splash} />  */}
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: state.logIn.loggedIn,
})

export default connect(mapStateToProps) (App);
