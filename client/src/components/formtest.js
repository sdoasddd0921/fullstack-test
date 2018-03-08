import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const age = value =>
  value && value < 1
  ? 'You are too young'
  : undefined;
const number = value =>
  value && isNaN(Number(value)) ? 'Must be number' : undefined;

class renderField extends React.Component {
  render() {
    // console.log('renderField props: ', this.props);
    const {
      input,
      label,
      type,
      meta: { touched, error, warning }
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          { touched &&
            ((error && <span>{error}</span>)) ||
            (warning && <span>{warning}</span>)
          }
        </div>
      </div>
    );
  }
}

class FieldLevelValidation extends React.Component {
  render() {
    // console.log('form props: ', this.props);
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Username"
          validate={[required]}
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Your age"
          validate={[required, number, age]}
        />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine||submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'fieldLevelValidation'
})(FieldLevelValidation);