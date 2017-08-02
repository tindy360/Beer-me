import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { findBrews, renderList, logOutUser } from '../../Action';
import './Header.css';

const Header = ({ getBrews, triggerList, isLoggedIn, logOut }) => {
    return (
        <div className="header">
            <Navbar>
                <Navbar.Header>
                    <Link to='/'><Navbar.Brand className="title">Beer-Me</Navbar.Brand></Link>
                    <Navbar.Form pullLeft>
                        <form
                            className="form"
                            type="submit"
                            onSubmit={e => {
                                e.preventDefault()
                                let searchString = e.target.search.value
                                console.log(searchString)
                                getBrews(searchString)
                                triggerList()
                                e.target.placeholder = 'Enter new search'
                            }}
                        >
                            <FormGroup>
                                <FormControl
                                    name="search"
                                    type="text"
                                    placeholder="Search"
                                />
                            </FormGroup>
                        </form>
                    </Navbar.Form>
                </Navbar.Header>
                <Link to={`${isLoggedIn ? '/dashboard' : '/login' }`}><Button bsSize='small' className='loginButton'>Login</Button></Link>
                <Link to={'/'} onClick={() =>{ logOut()}}><Button bsSize='small' className='loginButton'>Logout</Button></Link>
            </Navbar>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    getBrews: searchString => dispatch(findBrews(searchString)),
    triggerList: () => dispatch(renderList()),
    logOut: () => dispatch(logOutUser())
});
const mapStateToProps = state => ({
    isLoggedIn: state.logIn.loggedIn
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
