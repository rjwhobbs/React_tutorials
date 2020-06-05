let arr1 = {
    test: [1,2,3,4,5,6]
}

let arr2 = [...arr1.test];

arr2[2] = 9000 ;

console.log(arr1);
// console.log(arr2);
