import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { connect } from 'react-redux';

const Form = styled.form`
  width: 256px;
  margin: auto;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 1em 1em 0.5em;
  label {
    width: 66px;
  }
`;

class Inp extends React.Component {
  state = { invalid: false };

  inputCheck(e) {
    // check 如果未定义则默认返回 false
    const {check=() => false} = this.props;
    const value = e.target.value;
    const invalid = check(value);
    console.log('invalid: ', invalid)
    this.setState({invalid});
  }

  render() {
    const {info='', name, type} = this.props;

    let classes = classnames({
      'form-control': true,
      'is-invalid': this.state.invalid
    });

    return <div className="input-group mb-2 is-invalid">
      <div className="input-group-prepend">
        {/* 使内容文字居中需要加：justify-content-center */}
        <label htmlFor={name}
               className="input-group-text justify-content-center">
          {name}
        </label>
      </div>

      <input type={type || 'text'}
             placeholder={`Enter your ${name}`}
             onBlur={this.inputCheck.bind(this)}
             onChange={this.inputCheck.bind(this)}
             defaultValue={info}
             className={classes}
             name={name}
             id={name}
      />
    </div>;
  }
}

export default class Infobox extends React.Component {
  constructor(props) {
    super(props);
    this.fields = ['name', 'age', 'sex'];
    this.state = {
      values: this.fields.reduce((obj, field) => (obj[field] = '', obj), {}),
      errors: this.fields.reduce((obj, field) => (obj[field] = '', obj), {})
    };
  }

  nameCheck(value) {
    if (!value) { return false }
    console.log('namecheck:', value)
    const invalidValue = value.length < 1;
    this.setState({
      values: {
        name: invalidValue ? '' : value
      }
    });
    console.log('name check')
    return invalidValue;
  }

  submit(e) {
    e.preventDefault();
    this.fields.forEach(field => {
      this[field+'Check']
        ? this[field+'Check']()
        : null
    });

    // const data = {};
    // const formData = new FormData(e.target);
    // for (const [key, value] of formData)
    //   data[key] = value;

    // this.props.callback(data);

    e.target.reset();
  }

  render() {
    const info = this.props.info || {};
    const {name, sex, age} = info;
    const check = (value) => {
      const result = Boolean(value);
      console.log('check:', value, result);
      return result;
    };
    return (
      <Form className="text-center" onSubmit={this.submit.bind(this)}>
        <Inp name="name" info={name}/>
        <Inp name="age" type="number" info={age}/>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <label htmlFor="sex"
                   className="input-group-text justify-content-center">
              sex
            </label>
          </div>
          <select name="sex"
                  id="sex"
                  className="custom-select"
                  defaultValue={sex || ''}
          >
            <option value="" disabled>Please select</option>
            <option value="male">Male</option>
            <option value="famale">Famale</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          {this.props.type || 'none'}
        </button>
      </Form>
    );
  }
}
