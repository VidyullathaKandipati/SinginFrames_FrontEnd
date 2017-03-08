import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';
import UserOnMap from './UserOnMap.js';
import {K_SIZE} from './UserOnMapStyles.js';

class SimpleMap extends Component {
  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  static propTypes = {
    // center: {lat: 59.95, lng: 30.33},
    // zoom: 11
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCrdNG7LEAcx7NK1JxijJtyX2z4eoUqNlg'}}
        center={this.props.center}
        zoom={this.props.zoom}
        hoverDistance={K_SIZE / 2}
      >
        <UserOnMap
          lat={59.955413}
          lng={30.337844}
         />
      </GoogleMap>
      </div>
    );
  }
}

export default SimpleMap;
