import React, { Component } from 'react';
import { Link } from 'react-router';
import SignInForm from '../User/SignIn/SignInForm.js';
// import LogOutPage from '../User/LogOutPage.js';
// import AfterLoginMenu from '../User/AfterLoginMenu.js';
import $ from 'jquery';
import { hashHistory } from 'react-router';
import appState from '../../GlobalData.js'
import linkState from '../../Links.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class HomePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      signIn: false,
      errors: '',
      user: {
        email: '',
        password: ''
      },
      open: false
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  logIn(){
    console.log("Setting user loging to true.");
    this.setState({signIn: true});
  }

  changeUser(event){
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  }

  processForm(event){
    event.preventDefault();

    console.log('email: ', this.state.user.email);
    console.log('password: ', this.state.user.password);
    // create a string for an HTTP body message
    // const name = encodeURIComponent(this.state.user.name);
    const email = this.state.user.email;
    const password = this.state.user.password;
    // const password_confirmation = encodeURIComponent(this.state.user.password_confirmation);
    // const contact = encodeURIComponent(this.state.user.contact);
    // const address = encodeURIComponent(this.state.user.address);
    let serverUrl = '';
    if (linkState.development.isActive){
      serverUrl = linkState.development.login;
    }
    else {
      serverUrl = linkState.production.login;
    }

     $.ajax({
       url: serverUrl,
       type: 'POST',
       data: {
                  email: email,
                  password: password
              } ,
       success: (response) => {
        console.log('it worked!', response);
        let userData = response.data.attributes
        appState.user = { id: response.data.id,
                          name: userData.name,
                          email: userData.email,
                          contact: userData.contact,
                          address: userData.address,
                          lat: userData.latitude,
                          long: userData.longitude
        };
        let familyData = userData.families[0];
        appState.family = {
                            id: familyData.id,
                            name: familyData.name
        };
        console.log(appState.user);
        hashHistory.push('/');
        this.setState({signIn: false});
        this.handleToggle();
      },
      error: (response) => {
        this.setState({errors: response.responseText});
        console.log("Error!!!",response.responseText);
      }
     });
  }

  render() {
    return (
      <div className="root-page">
      { this.state.signIn && <SignInForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
        /> }

        <div className="container welcome-msg button-center">
          <div className="logo">
            <div className="row">
              <div className="col1"></div>
              <div className="col6">
                <h1>Welcome to Singing Frames</h1>
                <h2>Connecting families .... </h2>
              </div>

            </div>
          </div>
  { /*
          <div className="album">

          <div className="frame frame-flex">
            <Link to="/">
              <p>Home</p>
              <img src="https://static.pexels.com/photos/164466/pexels-photo-164466.jpeg" alt="Home"/>
            </Link>
          </div>
          <div className="frame frame-flex empty">

          </div>
          </div>
          */
        }

          <div className="album">
          {
            !appState.user &&
            <div className=" frame frame-flex empty"></div>
          }
          {
            appState.user &&
              <div className="frame find-me frame-flex">
                <Link to="/findme">
                  <p>Find me</p>
                  <img src="https://static.pexels.com/photos/57449/portrait-child-hands-57449.jpeg" alt="Show me on Map"/>
                </Link>
              </div>
          }

          {
            !appState.user &&
            <div className="frame frame-flex">
              <Link to="#" onClick={this.logIn.bind(this)}>
                <p>Login</p>
                <img src="https://static.pexels.com/photos/9746/people-mother-family-father.jpg" alt="Login"/>
              </Link>
            </div>
          }
          {
            !appState.user &&
            <div className=" frame frame-flex empty"></div>
          }

          </div>

          <div className="album">
          {
            appState.user &&
            <div className=" frame frame-flex empty"></div>
          }
          {
            !appState.user &&
            <div className="frame frame-flex">
              <Link to="/signup">
                <p>New user</p>
                <img src="https://static.pexels.com/photos/220563/pexels-photo-220563.jpeg" alt="New user"/>
              </Link>
            </div>
          }
          {
            !appState.user &&
            <div className=" frame frame-flex empty"></div>
          }
          {
            appState.user &&

            <div className="frame frame-flex">
              <Link to="/newfamily">
                <p>Create family</p>
                <img src="https://static.pexels.com/photos/46252/family-kids-happy-people-46252.jpeg" alt="Create a new family"/>
              </Link>
            </div>
          }

          </div>

          <div className="album">
          {
            !appState.user &&
            <div className=" frame frame-flex empty"></div>
          }
          {
            appState.user &&

            <div className="frame frame-flex">
              <Link to="/invitefamily">
                <p>Invite family</p>
                <img src="https://static.pexels.com/photos/128299/pexels-photo-128299.jpeg" alt="Invite family"/>
              </Link>
            </div>
          }

          </div>

          {
            appState.user &&
            <div className="frame right-side1">
              <a href="#/findme"> <p> Log out </p> </a>
            </div>
          }

        </div>

      </div>
    );
  }

}

export default HomePage;
