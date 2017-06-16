import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Splash from '../src/Components/Splash/Splash';
import Breweries from '../src/Components/Breweries/Breweries';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Splash} />
          <Route exact path={'/breweries/:brewery'} component={Breweries} />
        </div>
      </Router>
    );
  }
}

export default App;
