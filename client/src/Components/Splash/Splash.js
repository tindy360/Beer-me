import React from 'react';
import './Splash.css'
import Search from '../Search/Search';
import List from '../List/List';

const Splash = () => {
    return(
      <div>
        <p className='splashBlock'>Intro text discrptive. You'll find beer here.</p>
        <button className='splashButton'>find breweries</button>

        <Search></Search>
        <List></List>
      </div>
    );
  };

export default Splash;
