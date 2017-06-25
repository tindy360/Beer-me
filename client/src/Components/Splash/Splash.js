import React from 'react';
import './Splash.css'
import Search from '../Search/Search';
import List from '../List/List';
import LogIn from '../LogIn/LogIn';

const Splash = () => {
    return(
      <div>
        <p className='splashBlock'>Intro text discrptive. You'll find beer here.</p>
        <button className='splashButton'>find breweries</button>

        <Search></Search>
        <List></List>
        <LogIn></LogIn>
      </div>
    );
  };

export default Splash;
