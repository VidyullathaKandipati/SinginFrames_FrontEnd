import React, { Component } from 'react';
import { Link } from 'react-router';
import SignInForm from '../User/SignIn/SignInForm.js';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import appState from '../../GlobalData.js'

class HomePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      signIn: false,
      errors: '',
      user: {
        email: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

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

     $.ajax({
       url: 'http://localhost:5000/login',
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
                          address: userData.address
                        };
        browserHistory.push('/home');
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
            <h2>Welcome to Singing Frames</h2>
            <h3>Connecting families .... </h3>
          </div>
          <div className="frame">
            <p>Home</p>
            <Link to="/"><img src="https://static.pexels.com/photos/164466/pexels-photo-164466.jpeg" alt="Home"/></Link>
          </div>
          <div className="frame">
            <p>Login</p>
            <Link to="#" onClick={this.logIn.bind(this)}><img src="https://static.pexels.com/photos/9746/people-mother-family-father.jpg" alt="Login"/></Link>
          </div>
          <div className="frame">
            <p>New user</p>
            <Link to="/signup"><img src="https://static.pexels.com/photos/220563/pexels-photo-220563.jpeg" alt="New user"/></Link>
          </div>
          <div className="frame">
            <p>Find me</p>
            <Link to="/"><img src="https://static.pexels.com/photos/65642/grasshopper-viridissima-green-corn-leaf-65642.jpeg" alt="Show me on Map"/></Link>
          </div>

        </div>

      </div>
    );
  }

}

export default HomePage;
