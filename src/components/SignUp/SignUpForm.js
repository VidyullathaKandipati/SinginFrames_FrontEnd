import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className="container">
    <h2 className="login-header">Sign up</h2>

    <div className="col-md-3"></div>

      <div className="col-md-6">
      <form action="/" onSubmit={onSubmit}>

       {errors && (<div className="error-message button-center"> {errors} </div>)}

        <div className="form-group">
          *<label>Name</label>
          <input type="text" className="form-control textfield-border" placeholder="Your name" onChange={onChange}
                 autoFocus={true} name="name" value={user.name} required={true}></input>
        </div>
        <div className="form-group">
          *<label>Email</label>
          <input type="email" className="form-control textfield-border" placeholder="Your email" onChange={onChange}
                 required={true} name="email" value={user.email}></input>
        </div>
        <div className="form-group">
          *<label>Password</label>
          <input type="password" className="form-control textfield-border" onChange={onChange}
                 placeholder="You will use this password for logging in to this website"
                 name="password" required={true}></input>
        </div>
        <div className="form-group">
          *<label>Password Confirmation</label>
          <input type="password" className="form-control textfield-border" onChange={onChange}
               placeholder="Re-type the password, this is necessary for security purposes"
               name="password_confirmation" required={true}></input>
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input type="text" className="form-control textfield-border" placeholder="Your contact number"
                  onChange={onChange} name="contact" value={user.contact}></input>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control textfield-border" placeholder="Your Address"
                 onChange={onChange} name="address" value={user.address}></input>
        </div>
        <div className="form-group">
          { /*<label>Profile picture</label>
          < f.cl_image_upload :avatar %> */ }
        </div>

        <div className="button-center">
          <button type="submit" className="btn btn-primary">Create new account</button>
          <br/><br/>
          <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
        </div>
      </form>
    </div>
    <div className="col-md-3"></div>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
