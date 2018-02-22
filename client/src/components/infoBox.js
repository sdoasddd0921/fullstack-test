import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

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
    const {check=() => true} = this.props;
    const value = e.target.value;
    const invalid = !check(value);
    console.log(invalid)
    this.setState({invalid})
  }

  render() {
    const {info='', name, type} = this.props;

    let classes = classnames({
      'form-control': true,
      'is-invalid': this.state.invalid
    });

    return <div className="input-group mb-2">
      <div className="input-group-prepend">
        {/* 使内容文字居中需要加：justify-content-center */}
        <label htmlFor={name}
               className="input-group-text justify-content-center">
          {name}
        </label>
      </div>

      <input type={type || 'text'}
             placeholder={`Enter your ${name}`}
        // className="form-control is-invalid"
             className={classes}
             onBlur={this.inputCheck.bind(this)}
             defaultValue={info}
             name={name}
             id={name}
      />
    </div>;
  }
}

const Inps = ({info='', name, type, check=() => false}) => {
  let checkFlag = false;
  const inputCheck = (e) => {
    if (!e) return false
    const value = e.target.value;
    checkFlag = check(value);
  };

  let classes = classnames({
    'form-control': true,
    'is-invalid': checkFlag
  });

  return (
    <div className="input-group mb-2">
      <div className="input-group-prepend">
        {/* 使内容文字居中需要加：justify-content-center */}
        <label htmlFor={name}
               className="input-group-text justify-content-center">
          {name}
        </label>
      </div>

      <input type={type || 'text'}
             placeholder={`Enter your ${name}`}
             // className="form-control is-invalid"
             className={classes}
             onBlur={inputCheck}
             defaultValue={info}
             name={name}
             id={name}
      />
    </div>
  );
};

export default class Infobox extends React.Component {
  submit(e) {
    e.preventDefault();

    const data = {};
    const formData = new FormData(e.target);
    for (const [key, value] of formData)
      data[key] = value;

    this.props.callback(data);

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
        <Inp name="name" info={name} check={check}/>
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
