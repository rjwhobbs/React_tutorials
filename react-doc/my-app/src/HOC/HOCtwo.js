import React, { Component } from 'react';

class GetPics {
	getCat() {
		return "http://placekitten.com/200/300"
	}

	getDog(w) {
		return "https://placedog.net/" + w;
	}
}

let GetAnimals = new GetPics;



function WithSub(WrappedComp, selectAnimal) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				url: selectAnimal(GetAnimals)
			}
		}

		render () {
			return (
				<WrappedComp url={this.state.url} />
			)
		}
	}
}

const CatSub = WithSub(Cat, (GetAnimals) => {
	return (GetAnimals.getCat())
});

const DogSub = WithSub(Dog, (GetAnimals) => {
	return (GetAnimals.getDog(500))
});

function Cat(props) {
	return (
		<div>
			This is a cat <br/>
			<img src={props.url} alt=""/>
		</div>
	)
}

function Dog(props) {
	return (
		<div>
			This is a dog <br/>
			<img src={props.url} alt=""/>
		</div>
	)
}

class HOCtwo extends Component {
	render() {
		return (
			<div>
				<CatSub />
				<DogSub />
			</div>
		);
	}
}

export default HOCtwo;
