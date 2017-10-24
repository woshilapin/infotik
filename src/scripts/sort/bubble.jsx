import React from 'react';
import ReactDOM from 'react-dom';

class Array extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"array": props.values
		};
	}

	render() {
		const cells = this.state.array.map((number) => (
			<td key={number.toString()}>{number}</td>
		));
		return (
			<table className="array">
				<tbody>
					<tr>{cells}</tr>
				</tbody>
			</table>
		);
	}
}

const array = document.getElementById('array');
const tds = array.getElementsByTagName('td');
const values = [];
for (const td of tds) {
	values.push(td.textContent);
}
ReactDOM.render(<Array values={values} />, array);
