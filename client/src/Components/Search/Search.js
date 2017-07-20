import React from 'react';
import {
  FormGroup,
  FormControl,
  Label,
  Input
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { findBrews } from '../../Action';
import List from '../List/List';
import './Search.css';

const Search = ({getBrews}) =>(
  <div>
    <form
      className="form"
      type="submit"
      onSubmit={e => {
        e.preventDefault();
        let searchString = e.target.search.value;
        console.log(searchString);
        getBrews(searchString);
        //trigger GET request
      }}
    >
      <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type='search' name='search' id='searchBlock' placeholder='Search' />
        </FormGroup>
    </form>
    {/* needed conditional render for list table  */}
  </div>
);

const mapDispatchToProps = dispatch => ({
  getBrews: (searchString) => dispatch(findBrews(searchString))
});
export default connect(null, mapDispatchToProps)(Search);
