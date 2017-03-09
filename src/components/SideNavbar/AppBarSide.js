import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router';

class AppBarSide extends Component{


  constructor(props){
    super(props)
    this.state = {
      logIn: false
    }
  }

  render(){
    return (
      <div>
    <Drawer width={400} open={true}  onRequestChange={(open) => {true}}>

    <div className="frame">
      <p>Home</p>
      <Link to="/">
        <img src="https://static.pexels.com/photos/164466/pexels-photo-164466.jpeg" alt="Home"/>
      </Link>
    </div>

    <div className="frame">
      <p>Login</p>
      <Link to="/">
        <img src="https://static.pexels.com/photos/9746/people-mother-family-father.jpg" alt="Login"/>
      </Link>
    </div>

    <div className="frame">
      <p>New user</p>
      <Link to="/signup">
        <img src="https://static.pexels.com/photos/220563/pexels-photo-220563.jpeg" alt="New user"/>
      </Link>
    </div>

    <div className="frame">
      <p>Find me</p>
      <Link to="/findme">
        <img src="https://static.pexels.com/photos/65642/grasshopper-viridissima-green-corn-leaf-65642.jpeg" alt="Show me on Map"/>
      </Link>
    </div>

    </Drawer>
    </div>
  );
}
}
export default AppBarSide;
