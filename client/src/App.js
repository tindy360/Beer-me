import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Splash from '../src/Components/Splash/Splash';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Splash} />
        </div>
      </Router>
    );
  }
}

export default App;
