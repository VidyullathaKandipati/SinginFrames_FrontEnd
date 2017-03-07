import React, {Component} from 'react';
import appState from '../../GlobalData.js';

class ShowUserPage extends Component {
  render(){
    return(
      <div className="container">
       {appState.user && (<div className="navbar-right greeting">
            Welcome {appState.user.name}
          </div>)}
      </div>
    );
  }
}
export default ShowUserPage;
