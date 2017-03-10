import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

export default class UserOnMap extends Component {
  static propTypes = {
  // GoogleMap pass $hover props to hovered components
  // to detect hover it uses internal mechanism, explained in x_distance_hover example
  $hover: PropTypes.bool,
  // text: PropTypes.string,
  //  zIndex: PropTypes.number
};
static defaultProps = {};
// shouldComponentUpdate = shouldPureComponentUpdate;

constructor(props) {
   super(props);
 }

render() {
// const {text, zIndex} = this.props;
  return (
       <div className="user-on-map" >
          <img src='https://static.pexels.com/photos/103123/pexels-photo-103123.jpeg' alt="User on map"/>
       </div>
    );
  }
}
