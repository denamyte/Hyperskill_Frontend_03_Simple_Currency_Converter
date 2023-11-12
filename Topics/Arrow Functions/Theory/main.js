// You can experiment here, it won’t be checked

let myArray = [1, 2, 3];
let modifyArray = arr => { arr.splice(0,1); arr.push(5, 6); return arr; };
modifyArray(myArray)

console.log(myArray)

