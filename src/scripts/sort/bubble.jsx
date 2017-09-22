import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

class World extends React.Component {
	render() {
		return <h1>World</h1>;
	}
}

ReactDOM.render(<World/>, document.getElementById('world'));

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
