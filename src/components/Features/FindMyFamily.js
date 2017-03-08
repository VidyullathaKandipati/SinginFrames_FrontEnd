import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
// import ReactDOM from 'react-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
      <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyCrdNG7LEAcx7NK1JxijJtyX2z4eoUqNlg'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Hope this works.'}
        />
      </GoogleMap>
      </div>
    );
  }
}

export default SimpleMap;
