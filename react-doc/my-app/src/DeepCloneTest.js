// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
let obj1 = {a: 0, b: {c: 42}};
let obj2 = Object.assign({}, obj1);
let obj4 = {...obj1};
// Better
let obj3 = JSON.parse(JSON.stringify(obj1));

obj1.a = 12;
obj1.b.c = 99;

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);


