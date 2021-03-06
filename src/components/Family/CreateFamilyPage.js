import React, {Component} from 'react';
import CreateFamilyForm from './CreateFamilyForm.js'
import $ from 'jquery';
import appState from '../../GlobalData.js'
import linkState from '../../Links.js';
import { hashHistory } from 'react-router';

class CreateFamilyPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      errors: '',
      family: {
        name: ''
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
    console.log('name: ', this.state.family.name);

    // create a string for an HTTP body message
    const name = (this.state.family.name);

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
       data: { family: {
                  name: name
              } },
       success: (response) => {
         console.log('it worked!', response);
         appState.family = { id: response.id,
                           name: response.name
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
      <CreateFamilyForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        family={this.state.family}
      />
    );
  }

}

export default CreateFamilyPage;
