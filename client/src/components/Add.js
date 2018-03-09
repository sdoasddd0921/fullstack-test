import React from 'react';
import { connect } from 'react-redux';
import Infobox from './studentInfoBox';
import { togglePopup } from '../redux/actions';

class Add extends React.Component {
  add(data) {
    fetch('/api/addStudent', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json"
      })
    }).then(res => res.json())
      .then((dt) => console.log('dt:', dt));
  }

  sub=(data)=> {
    data.age = Number(data.age);
    console.log(this.props.dispatch);
    this.props.dispatch(togglePopup('open'))
    this.add(data);
  }

  render() {
    return <div>
      <h4 className="text-center mb-3">this is add page!</h4>
      <Infobox type="Add" onSubmit = {this.sub}/>
    </div>;
  }
}

export default connect()(Add);