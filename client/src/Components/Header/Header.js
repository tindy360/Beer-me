import React from 'react';
import Search from '../Search/Search';
import { Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand className='title'>
                  Beer-Me
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
        </div>
    )
}
export default Header
