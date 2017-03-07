import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SignInForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className="container">

    <h2 className="login-header">Log in</h2>

     {errors && (<div className="error-message button-center"> {errors} </div>)}

    <div className="col-md-3"></div>

      <div className="col-md-6">
      <form action="/" onSubmit={onSubmit}>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
        *<label>Email</label>
        <input className="form-control" placeholder="Your email" onChange={onChange}
               autoFocus={true} required={true} type="email" name="email"></input>
      </div>
      <div className="form-group">
        *<label>Password</label>
        <input type="password" className="form-control" placeholder="Your singingframes.com password"
               onChange={onChange} required={true} name="password"></input>
      </div>
      <div className="button-center">
        <button type="submit" className="btn btn-primary">Login</button>
        <br/><br/>
        <p>Don't have an account? <Link to={"/signup"}>New User</Link></p>
      </div>
      </form>
    </div>

    <div className="col-md-3"></div>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default SignInForm;
