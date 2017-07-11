import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Splash from '../src/Components/Splash/Splash';
import Brewery from '../src/Components/Brewery/Brewery';
import Search from '../src/Components/Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Splash} />
          <Route exact path={'/brewery/:brewery'} component={Brewery} />
          <Route exact path={'/search'} component={Search} />
          {/* <Route exact path={'/'} component={Splash} />
          <Route exact path={'/'} component={Splash} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
