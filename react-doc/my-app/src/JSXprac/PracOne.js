import React, { Component } from 'react';

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {    
		items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}    
		</Repeat>
  );
}

class PracOne extends Component {
	render() {
		return [
			// Don't forget the keys :)
			<li key="A">First item</li>,
			<li key="B">Second item</li>,
			<li key="C">Third item</li>,
			<ListOfTenThings />
		];
	}
}

export default PracOne;
