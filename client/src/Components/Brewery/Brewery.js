import React from 'react';
import './Brewery.css';
import { connect } from 'react-redux';
import Map from '../Map/Map';
import GoogleMapReact from 'google-map-react';

const Brewery = ({mapData, addressData}) => {
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
    <GoogleMapReact
       defaultZoom={11}
      >
      <Map
        center={{lat:mapData[0].lat, lng:mapData[0].lng}}
        lat={mapData.lat}
        lng={mapData.lng}
        text={'Kreyser Avrora'}
       />
    </GoogleMapReact>
  </div>
)};

const mapStateToProps = state =>({
  mapData: state.brewery.breweryInfo,
  addressData: state.brewery.breweryAddress
})
export default connect(mapStateToProps) (Brewery);
