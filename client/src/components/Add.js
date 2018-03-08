import React from 'react';
import Infobox from './studentInfoBox';

export default class Add extends React.Component {
  add(data) {
    fetch('/api-addInfo', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json"
      })
    }).then(res => res.json())
      .then((dt) => console.log('dt:', dt));
  }

  sub=(data)=> {
    console.log(data)
  }

  render() {
    return <div>
      <h4 className="text-center mb-3">this is add page!</h4>
      <Infobox type="Add" onSubmit = {this.sub}/>
    </div>;
  }
}