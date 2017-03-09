import React, {Component} from 'react';
import InviteFamilyForm from './InviteFamilyForm.js'
import $ from 'jquery';
import appState from '../../GlobalData.js'
import { hashHistory } from 'react-router';
import linkState from '../../Links.js'

class InviteFamilyPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      errors: '',
      family: {
        id: appState.family.id,
        name: appState.family.name,
        email: ''
      },
      users: []
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

    console.log('id: ', this.state.family.id);
    console.log('email: ',this.state.family.email);

    // create a string for an HTTP body message
    const id = (this.state.family.id);
    const email = (this.state.family.email);

    let serverUrl = linkState.production.newinvite;

     $.ajax({
       url: serverUrl,
       type: 'POST',
       data: {invite: {
                  family_id: id,
                  email: email
               }},
       success: (response) => {
         console.log('it worked!', response);
         hashHistory.push('/');
       },
       error: (response) => {
         this.setState({errors: response.responseText});
         console.log("Error!!!",response.responseText);
       }
     });

  }

  render() {
    return (
      <InviteFamilyForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        family={this.state.family}
      />
    );
  }

}

export default InviteFamilyPage;
