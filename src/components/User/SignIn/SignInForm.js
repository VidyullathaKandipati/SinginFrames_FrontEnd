import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { black, orange500, blue500, white } from 'material-ui/styles/colors';


const styles = {
  errorStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: black
  },
  floatingLabelStyle: {
    color: black
  },
  floatingLabelFocusStyle: {
    color: black
  },
  RaisedButtonStyle: {
    color: black
  }
};


const SignInForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className="row">

     {errors && (<div className="error-message button-center"> {errors} </div>)}

    <div className="col3"></div>

      <div className="col3 sign-in">

      <form action="/" onSubmit={onSubmit}>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
        <TextField floatingLabelText="* Email" underlineFocusStyle={styles.underlineStyle}
               onChange={onChange} autoFocus={true} required={true} type="email" name="email" className="my-input"
               floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
      </div>
      <br />
      <div className="form-group">
        <TextField floatingLabelText="* Password" underlineFocusStyle={styles.underlineStyle}
               onChange={onChange} required={true} type="password" name="password"
               floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
      </div>
      <br />
      <div className="button-center">
        <RaisedButton type="submit" className="sign-in-button">Login</RaisedButton>
        <br/><br/>
        <p>Don't have an account? <Link to={"/signup"}>New User</Link></p>
      </div>
      </form>
    </div>

    <div className="col3"></div>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default SignInForm;
