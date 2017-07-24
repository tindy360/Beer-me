import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findBrews, renderList } from '../../Action';
import './Header.css';

const Header = ({getBrews, showList}) => {
    return (
        <div className="header">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand className="title">Beer-Me</Navbar.Brand>
                    <Navbar.Form pullLeft>
                        <form
                            className="form"
                            type="submit"
                            onSubmit={e => {
                                e.preventDefault()
                                let searchString = e.target.search.value
                                console.log(searchString)
                                getBrews(searchString)
                                showList()
                            }}
                        >
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                        </form>
                    </Navbar.Form>
                </Navbar.Header>
            </Navbar>

        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    getBrews: searchString => dispatch(findBrews(searchString)),
    showList: () => dispatch(renderList())
});
const mapStateToProps = state => ({
  show: state.show
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
