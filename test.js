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
console.log(rect.area);

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
  console.log(bob.name);