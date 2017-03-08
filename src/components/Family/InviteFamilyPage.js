import React, {Component} from 'react';
import CreateFamilyForm from './CreateFamilyForm.js'
import $ from 'jquery';
import appState from '../../../GlobalData.js'
import { hashHistory } from 'react-router';

class InviteFamilyPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      errors: '',
      family: {
        id: appState.family.id,
        name: appState.family.name,
        email: appState.user.email,
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const family = this.state.family;
    family[field] = event.target.value;

    this.setState({family});
  }

  processForm(event) {
    event.preventDefault();
    console.log('id: ', this.state.user.id);
    console.log('name: ', this.state.user.name);
    console.log('email: ',this.state.user.email);

    // create a string for an HTTP body message
    const email = (this.state.user.email);

     $.ajax({
       url: `http://localhost:5000/invites/${this.state.user.id}`,
       type: 'POST',
       data: { invite: {
                  id: id,
                  email: email
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
         hashHistory.push('/home');
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

export default InviteFamilyPage;
