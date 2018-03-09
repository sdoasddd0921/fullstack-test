import React from 'react';
import Infobox from './studentInfoBox';

export default class Add extends React.Component {
  add(data) {
    console.log('in add: ', JSON.stringify(data))
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
    console.log(data);
    this.add(data);
  }

  render() {
    return <div>
      <h4 className="text-center mb-3">this is add page!</h4>
      <Infobox type="Add" onSubmit = {this.sub}/>
    </div>;
  }
}