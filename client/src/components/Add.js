import React from 'react';
import Infobox from './infoBox';

export default class Add extends React.Component {
  add(data) {
    // alert('you\'ll add infos');
    fetch('/api-addInfo', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json"
      })
    }).then(res => res.json())
      .then((dt) => console.log('dt:', dt));
  }

  render() {
    return <div>
      <h4 className="text-center mb-3">this is add page!</h4>
      <Infobox type="Add" callback={this.add.bind(this)}/>
    </div>;
  }
}