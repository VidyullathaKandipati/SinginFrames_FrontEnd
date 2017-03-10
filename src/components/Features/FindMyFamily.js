import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';
import UserOnMap from './UserOnMap.js';
import {K_SIZE} from './UserOnMapStyles.js';
import appState from '../../GlobalData.js';

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true
  };
}

class SimpleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: appState.user,
      user2: {
        lat: 12.972442,
        long: 77.580643
      },
      user3: {
        lat: 17.004393,
        long: 81.783325
      },
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
    // center: {lat: 2.8, long: -187.3},
    zoom: PropTypes.number,
    center: PropTypes.array,
    // zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCrdNG7LEAcx7NK1JxijJtyX2z4eoUqNlg'}}
        center={this.props.center}
        zoom={1}
        options={createMapOptions}
        hoverDistance={K_SIZE / 2}
      >
        { appState.user &&
        <UserOnMap
          lat={appState.user.lat}
          lng={appState.user.long}
         />
        }
         <UserOnMap
           lat={this.state.user2.lat}
           lng={this.state.user2.long}
          />
          <UserOnMap
            lat={this.state.user3.lat}
            lng={this.state.user3.long}
           />

      </GoogleMap>
      </div>
    );
  }
}

export default SimpleMap;
