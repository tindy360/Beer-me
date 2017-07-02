import React from 'react';
import './Brewery.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Brewery = ({ addressData }) => {


  return(
  <div>
    <ul>
      <li>{addressData.name}</li>
      <li>{addressData.street}</li>
      <li>{addressData.city}</li>
      <li>{addressData.state}</li>
      <li>{addressData.zip}</li>
      <li>{addressData.phone}</li>
      <li>{addressData.url}</li>
    </ul>
    <Container >

    </Container>
  </div>
)};

const mapStateToProps = state =>({
  addressData: state.brewery.breweryAddress
})
export default connect(mapStateToProps) (Brewery);
