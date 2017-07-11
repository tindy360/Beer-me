import React from 'react';
import './Splash.css'
import { Link } from 'react-router-dom';

const Splash = () => {
    return(
      <div>
        <p className='splashBlock'>With this sapplicatoin the user can create an account, search for and save craft breweries throughout the US.</p>
        <Link to={`/search`}><button className='splashButton'>find breweries</button></Link>
      </div>
    );
  };

export default Splash;
