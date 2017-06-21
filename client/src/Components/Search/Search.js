import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { findBrews } from '../../Action'
import './Search.css';

const Search = ({getBrews}) =>(
  <div>
    <form
      type="submit"
      onSubmit={e => {
        e.preventDefault();
        let searchString = e.target.search.value;
        console.log(searchString);
        getBrews(searchString);
        //trigger GET request
      }}
    >
      <FormGroup controlId="formValidationSuccess1" validationState={null}>
        <ControlLabel>Search</ControlLabel>
        <FormControl
          type="text"
          className="search"
          name="search"
          placeholder="Enter text"
         />
        <HelpBlock>Enter a city and State to find local micro breweries and brew pubs.</HelpBlock>
      </FormGroup>
      <button type="submit">submit</button>
    </form>
  </div>
);

const mapDispatchToProps = dispatch => ({
  getBrews: (searchString) => dispatch(findBrews(searchString))
});
export default connect(null, mapDispatchToProps)(Search);
