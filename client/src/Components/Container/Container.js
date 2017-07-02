import React  from 'react';
import { connect } from 'react-redux';
import { Map, Marker, InfoWindow }from 'google-maps-react';


const Container = ({mapLat, mapLng}) => {
  console.log('lat', mapLat);
  return (
    <div >
      <Map google={window.google}
        zoom={19}
        style={{width: '50%', height: '50%', position: 'relative'}}
        center={{lat: `${mapLat}`, lng: `${mapLng}` }}
        >
        <Marker
           position={{lat: `${mapLat}`, lng: `${mapLng}` }}
          >
        </Marker>

      </Map>
    </div>
  )
}
const mapStateToProps = state => ({
  mapLat: state.brewery.breweryInfo.lat,
  mapLng: state.brewery.breweryInfo.lng
})
export default connect(mapStateToProps)(Container);
