import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';
import UserOnMap from './UserOnMap.js';
import {K_SIZE} from './UserOnMapStyles.js';
import appState from '../../GlobalData.js'

class SimpleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: appState.user,
      syd: {
        lat: 33.8688,
        long: 151.2093
      }
    };
  }

  static defaultProps = {
    center: [-33.8688, 151.2093],
    zoom: 9,
    greatPlaceCoords: {lat: -33.8688, lng: 151.2093}
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
        { appState.user &&
        <UserOnMap
          lat={appState.user.lat}
          lng={appState.user.long}
         />
       }
      </GoogleMap>
      </div>
    );
  }
}

export default SimpleMap;
