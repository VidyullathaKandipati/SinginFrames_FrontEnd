import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

export default class UserOnMap extends Component {
  static propTypes = {
  // GoogleMap pass $hover props to hovered components
  // to detect hover it uses internal mechanism, explained in x_distance_hover example
  $hover: PropTypes.bool,
};
static defaultProps = {};

render() {

  return (
       <div className="user-on-map" >
          <img src='https://static.pexels.com/photos/27476/pexels-photo-27476.jpg' alt="User on map"/>
       </div>
    );
  }
}
