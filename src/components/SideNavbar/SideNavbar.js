import React, { Component } from 'react';

class SideNavbar extends Component {

  constructor(props){
    super(props);
    console.log("SideNavbar connected");
    this.state = {
      hide: true
    };
  }

  _showNavbar(event){
    this.setState({hide: !this.state.hide});
  }

  render() {
    return (
      <div className="row">
        {!this.state.hide && (
          <div className="SideNavbar col-md-2" onMouseLeave={this._showNavbar.bind(this)}>
            <a href="#">Find my family</a>
            <a href="https://www.linkedin.com/in/latha-kandipati/">Edit my settings</a>
          </div>
        )}
        { this.state.hide && (
          <div className="showNav" onMouseEnter={this._showNavbar.bind(this)}>
          </div>
        )}
      </div>
    );
  }

}

export default SideNavbar;
