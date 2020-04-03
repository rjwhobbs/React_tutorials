// let thing = [1,2,3,4,5,6,7];
// let x = [...thing];
// x[0] = 99;
// console.log(thing);
// console.log(x);

class Rectangle {
	constructor(height, width) {
	  this.name = 'Rectangle';
	  this.height = height;
	  this.width = width;
	}
	sayName() {
	  console.log('Hi, I am a ', this.name + '.');
	}
	get area() {
	  return this.height * this.width;
	}
	set area(value) {
	  this._area = value;
	}
}

const rect = new Rectangle(5, 2);
// console.log(rect.area(29));
// console.log(rect.area);

class Person {
	constructor(name) {
	  this._name = name;
	}
  
	get name() {
	  return this._name.toUpperCase();
	}
  
	set name(newName) {
	  this._name = newName; // validation could be checked here such as only allowing non numerical values
	}
  
	walk() {
	  console.log(this._name + ' is walking.');
	}
  }
  
  let bob = new Person('Bob');
//   console.log(bob.name);

  const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(function(x, y){
	// console.log(y);
	return x * 2;
  });
  
//   console.log(map1);
  // expected output: Array [2, 8, 18, 32]

let arr = [1,2,3,4,5];
let arrX = [...arr];
arrX.push(99);
// console.log(arr);
// console.log(arrX);

const za_format_two = (number) => {
	if (number.toString().charAt(0) == 'R') {
		number = number.slice(1);
	}

	number = parseInt(number).toFixed(2);
	number += '';
	var x = number.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
        console.log("XXX");
        x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        console.log(x1);
	}
	return 'R' + x1 + x2;

}

let x = za_format_two(100);

console.log(x);
