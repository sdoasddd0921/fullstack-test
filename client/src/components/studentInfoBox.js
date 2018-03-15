import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { reduxForm, Field } from 'redux-form';

// validations
const requried = value =>
  value ? undefined : 'Requried';
const number = value =>
  value && isNaN(Number(value))
    ? 'Must be a number'
    : undefined;
const ageTooYoung = value =>
  value && value < 1
    ? 'Too young'
    : undefined;
const ageTooOld = value =>
  value && value > 120
    ? 'Too oold'
    : undefined;
const IDlength = value =>
  value && !/^(20[0-9]{8})$/i.test(value)
    ? 'Invalid student ID'
    : undefined;

// 直接在组件文件里写样式，支持嵌套，就不用eject后再配置sass-loader了
const Form = styled.form`
  width: 256px;
  margin: auto;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 1em 1em 0.5em;
  label {
    width: 66px;
  }
  .error {
    color: red;
    font-size: 0.9em;
  }
`;

// 单个输入框
class renderField extends React.Component {
  state = {
    value: this.props.defaultValue || ''
  }

  handleChange(event) {
    // 需要拿到redux-form的onchange事件，进行扩展，使输入框组件成为控制型组件
    this.props.input.onChange(event);
    this.setState({value: event.target.value});
  }

  render() {
    const {
      input,
      input: {name},
      type,
      plh,
      selectOpts = [],
      meta: {touched, error}
    } = this.props;
    // 根据传入的type值设置不同类型的输入框
    let inputField = null;
    if (type !== 'select') {
      inputField = <input
        {...input}
        type={type || 'text'}
        placeholder={plh}
        className={ classnames({
          "form-control": true,
          "is-invalid": touched && error
        })}
        name={name}
        id={name}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />;
    } else {
      inputField = <select
        {...input}
        name={name}
        id={name}
        className="custom-select"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      >
        <option value="" disabled>Please select</option>
        {
          selectOpts.map(
            (opt, index) =>
              <option key={index} value={opt}>{opt}</option>
          )
        }
      </select>
    }

    return (
      <div className="mb-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <label htmlFor={name}
                   className="input-group-text justify-content-center"
            >
              {name}
            </label>
          </div>
          {inputField}
        </div>
        {/* 输出错误信息 */}
        {touched && (error && <span className="error">{error}</span>)}
      </div>
    );
  }
}

// 信息输入表单
const ValidationForm = ({ handleSubmit, submitting, name, sex, age, ID, type='button' }) => (
  <Form className="text-center" onSubmit={handleSubmit}>
    <Field
      name="name"
      component={renderField}
      validate={[requried]}
      defaultValue={name}
    />
    <Field
      name="age"
      type="number"
      component={renderField}
      defaultValue={age}
      validate={[requried, number, ageTooYoung, ageTooOld]}
    />
    <Field
      name="ID"
      type="text"
      defaultValue={ID}
      component={renderField}
      validate={[requried, number, IDlength]}
    />
    <Field
      name="sex"
      type="select"
      defaultValue={sex}
      selectOpts={['Male', 'Famale', 'Secrecy']}
      component={renderField}
      validate={requried}
    />
    <div className="container-fluid mt-3">
      <button className="btn btn-primary"
              type="submit"
              disabled={submitting}
      >
        {type}
      </button>
    </div>
  </Form>
);

export default reduxForm({
  form: 'studentInfooBoox'
})(ValidationForm);