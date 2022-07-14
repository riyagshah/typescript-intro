let x = false;
x = true;
let y = "Hello";
y = "Hello World";
// 2 strings
let first_name = "masai";
let last_name = "School";
let full_name = `${first_name} ${last_name}`;
// console.log(full_name);
//Array
let array = ["masai", "school"];
let array2 = [1, 2];
array2.push(5);
// console.log(array2);
//object
let obj1 = {
    first_name: first_name,
    last_name: last_name,
};
const obj = {
    first_name: "jitesh",
    last_name: "sirohi",
    age: 26,
};
//Tupple - Array
//1. the number of elements in the tuple is fixed.
//2. the types of the tuple are fixed.
let tuple;
tuple = ["masai", 1];
//Enums -> a group of named constants.
//  enum COLORS{
//     RED, GREEN, BLUE
//  }
// let greenColor = COLORS.GREEN;
// console.log(greenColor); // 1
// or
var COLORS;
(function (COLORS) {
    COLORS["RED"] = "RED";
    COLORS["GREEN"] = "GREEN";
    COLORS["BLUE"] = "BLUE";
})(COLORS || (COLORS = {}));
let greenColor = COLORS.GREEN;
// console.log(greenColor); //GREEN
//functions
function sum(a, b) {
    return a + b;
}
// console.log(sum(2,3))
const printName = ({ first_name, last_name, age }) => {
    return `${first_name} ${last_name}`;
};
const person1 = {
    first_name: "jitesh",
    last_name: "sirohi",
    age: 26,
};
printName(person1);
//Union
let output;
output = ["masai", 1, 2, "school"]; // can't set boolen now.
// console.log(output)
//intersection
//add all the types svalue in one variable.
let person3 = {
    first_name: "jitesh",
    last_name: "sirohi",
    age: 26,
    skills: "great in everything",
};
// console.log(person3)
//# sourceMappingURL=index.js.map