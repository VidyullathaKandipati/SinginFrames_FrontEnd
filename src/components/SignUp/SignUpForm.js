import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className="row">

    <div className="col1"></div>

      <div className="col6 sign-up">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="login-header">Sign up</h2>

        {errors && (<div className="error-message button-center"> {errors} </div>)}

        <div className="form-group">
          <TextField floatingLabelText="* Name" type="text" onChange={onChange}
                 autoFocus={true} name="name" defaultvalue={user.name} required={true} fullWidth={true} />
        </div>
        <br />
        <div className="form-group">
          <TextField floatingLabelText="* Email" type="email" onChange={onChange}
                 required={true} name="email" defaultvalue={user.email} fullWidth={true}/>
        </div>
        <br />
        <div className="form-group">
          <TextField floatingLabelText="* Password" type="password" onChange={onChange}
                 name="password" required={true} fullWidth={true}/>
        </div>
        <br />
        <div className="form-group">
          <TextField floatingLabelText="* Confirm Password" type="password" onChange={onChange}
               name="password_confirmation" required={true} fullWidth={true}/>
        </div>
        <br />
        <div className="form-group">
          <TextField floatingLabelText="* contact" type="text"
                  onChange={onChange} name="contact" defaultValue={user.contact} fullWidth={true}/>
        </div>
        <br />
        <div className="form-group">
          <TextField floatingLabelText="* address" floatingLabelFixed={true} type="text"
                 onChange={onChange} name="address" defaultvalue={user.address} fullWidth={true}/>
        </div>
        <br />
        <div className="form-group">
          { /*<label>Profile picture</label>
          < f.cl_image_upload :avatar %> */ }
        </div>

        <div className="button-center">
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
          <br/><br/>
          <p>Already have an account? <br /> Go the login link here <Link to={'/'}>Log in</Link></p>
        </div>
      </form>
    </div>
    <div className="col1"></div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
