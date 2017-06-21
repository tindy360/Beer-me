import React from 'react';
import './Brewery.css';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';


const Brewery = () => (
  <div>
    <p></p>
  </div>
);
const mapStateToProps = state =>({
  mapData: state.brewery.breweryInfo
})
export default connect(mapStateToProps) (Brewery);
