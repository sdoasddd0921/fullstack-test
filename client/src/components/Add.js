import React from 'react';
import { connect } from 'react-redux';
import Infobox from './studentInfoBox';
import { togglePopup } from '../redux/actions';

class Add extends React.Component {
  add(data) {
    fetch('/api/student', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Accept": "application/json",
        "Content-type": "application/json"
      })
    }).then(res => res.json())
      .then((dt) => {
        console.log(dt)
        if (dt.error) {
          this.props.openPopup(dt.error, true);
        } else {
          this.props.openPopup('Student added successfully.');
        }
      })
      .catch((err) => this.props.openPopup('Student added false.', true));
  }

  sub(data) {
    data.age = Number(data.age);
    this.add(data);
  }

  render() {
    return <div>
      <h4 className="text-center mb-3">this is add page!</h4>
      <Infobox type="Add" onSubmit = {this.sub.bind(this)}/>
    </div>;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openPopup: (result, err=false) => dispatch(togglePopup('open', result, err))
  };
};

export default connect(null, mapDispatchToProps)(Add);