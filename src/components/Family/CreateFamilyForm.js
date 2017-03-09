import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const CreateFamilyForm = ({
  onSubmit,
  onChange,
  errors,
  family
}) => (
  <div className="row">

    <div className="col1"></div>

      <div className="col6 sign-up">
      <form action="/" onSubmit={onSubmit}>
      <h2 className="login-header">New family</h2>

       {errors && (<div className="error-message button-center"> {errors} </div>)}

        <div className="form-group">
          <TextField floatingLabelText="* Family Name" type="text" onChange={onChange} floatingLabelStyle={{'font-family': "'Kaushan Script', cursive"}}
                 autoFocus={true} name="name" defaultvalue={family.name} required={true} fullWidth={true}/ >
        </div>
        <div className="form-group">
          { /*<label>Family picture</label>
          < f.cl_image_upload :avatar %> */ }
        </div>
        <br /><br />
        <div className="button-center">
          <RaisedButton label="Create new family" type="submit" primary={true} />
          <br/><br/>
        </div>
      </form>
    </div>
    <div className="col-md-3"></div>
  </div>
);

CreateFamilyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  family: PropTypes.object.isRequired
};

export default CreateFamilyForm;
