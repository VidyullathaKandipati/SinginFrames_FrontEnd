import React, {Component} from 'react';
import SignUpForm from './SignUpForm.js'
import $ from 'jquery';
import appState from '../../GlobalData.js'
import { browserHistory } from 'react-router';
import linkState from '../../Links.js'

class SignUpPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      errors: '',
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        contact: '',
        address: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  }

  processForm(event) {
    event.preventDefault();
    console.log('name: ', this.state.user.name);
    console.log('email: ',this.state.user.email);
    console.log('password: ', this.state.user.password);
    console.log('password_confirmation: ', this.state.user.password_confirmation);
    console.log('contact: ', this.state.user.contact);
    console.log('address: ', this.state.user.address);

    // create a string for an HTTP body message
    const name = (this.state.user.name);
    const email = (this.state.user.email);
    const password = (this.state.user.password);
    const password_confirmation = (this.state.user.password_confirmation);
    const contact = (this.state.user.contact);
    const address = (this.state.user.address);
    let serverUrl = '';
    if (linkState.development.isActive){
      serverUrl = linkState.development.newUser;
    }
    else {
      serverUrl = linkState.production.newUser;
    }

     $.ajax({
       url: serverUrl,
       type: 'POST',
       data: { user: {
                  name: name,
                  email: email,
                  password: password,
                  password_confirmation: password_confirmation,
                  contact: contact,
                  address: address
              } },
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
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default SignUpPage;
