let thing = {
	one: 1,
	two: 2
}

// let one = thing.one;
// let two = thing.two;

function test({one, two}) {
	console.log(one);
}

test(thing);
