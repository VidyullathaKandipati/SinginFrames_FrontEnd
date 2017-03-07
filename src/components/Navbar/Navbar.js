import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import appState from '../../GlobalData.js'

const Navbar = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login"> Log in |</Link>
        <Link to="/signup"> Sign up |</Link>
        { appState.user && ( <Link to="/edituser"> Edit User profile |</Link>) }
        { !appState.family && (<Link to="/newfamily"> Create family | </Link> ) }
        { (<Link to="/invitefamily"> Invite family |</Link>) }
        { appState.family && (<Link to="/invitefamily"> Invite family |</Link>) }
      </div>

    </div>

    {children}

  </div>
);

Navbar.propTypes = {
  children: PropTypes.object.isRequired
};

export default Navbar;
