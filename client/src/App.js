import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Splash from './Components/Splash/Splash';
import Brewery from './Components/Brewery/Brewery';
import Search from './Components/Search/Search';
import Header from './Components/Header/Header';
import Login from './Components/LogIn/LogIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Route exact path={'/'} component={Splash} />
          <Route exact path={'/brewery/:brewery'} component={Brewery} />
          <Route exact path={'/search'} component={Search} />
           <Route exact path={'/login'} component={Login} />
          {/*  <Route exact path={'/'} component={Splash} />  */}
        </div>
      </Router>
    );
  }
}

export default App;
