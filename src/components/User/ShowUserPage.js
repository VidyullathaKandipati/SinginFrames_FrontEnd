import React, {Component} from 'react';
import appState from '../../GlobalData.js';
import { Link } from 'react-router';

class ShowUserPage extends Component {
  render(){
    return(
      <div className="container">
       {appState.user && (<div className="navbar-right greeting">
            Welcome {appState.user.name}
            { appState.user && ( <Link to="/edituser"> Edit User profile |</Link>) }
          </div>)}
      </div>
    );
  }
}
export default ShowUserPage;
