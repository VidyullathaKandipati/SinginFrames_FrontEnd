import React, { PropTypes } from 'react';

const InviteFamilyForm = ({
  onSubmit,
  onChange,
  errors,
  family
}) => (
  <div className="container">
    <h2 className="login-header">New family</h2>

    <div className="col-md-3"></div>

      <div className="col-md-6">
      <form action="/" onSubmit={onSubmit}>

       {errors && (<div className="error-message button-center"> {errors} </div>)}

        <div className="form-group">
          *<label>Email</label>
          <input type="email" className="form-control textfield-border" placeholder="Your name" onChange={onChange}
                 autoFocus={true} name="email" required={true}></input>
        </div>
        <div className="form-group">
          { /*<label>Family picture</label>
          < f.cl_image_upload :avatar %> */ }
        </div>

        <div className="button-center">
          <button type="submit" className="btn btn-primary">Create new account</button>
          <br/><br/>
        </div>
      </form>
    </div>
    <div className="col-md-3"></div>
  </div>
);

InviteFamilyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  family: PropTypes.object.isRequired
};

export default InviteFamilyForm;
