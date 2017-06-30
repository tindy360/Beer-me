import React from 'react';
import './Brewery.css';
import { connect } from 'react-redux';
import { Map, Marker, InfoWindow }from 'google-maps-react';
import PropTypes from 'prop-types';

const Brewery = ({mapData, addressData}) => {
    console.log('cords',addressData);
    console.log('Map', mapData);
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
    <Map google={window.google}
      zoom={11}

       >
      </Map>
  </div>
)};

const mapStateToProps = state =>({
  mapData: state.brewery.breweryInfo[0],
  addressData: state.brewery.breweryAddress
})
export default connect(mapStateToProps) (Brewery);
