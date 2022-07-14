let x: boolean = false;
x = true;

let y: string = "Hello";
y = "Hello World";

// 2 strings
let first_name: string = "masai";
let last_name: string = "School";

let full_name: string = `${first_name} ${last_name}`;
// console.log(full_name);

//Array
let array: Array<string> = ["masai", "school"];
let array2: number[] = [1, 2];
array2.push(5);
// console.log(array2);

//object
let obj1: object = {
  first_name: first_name,
  last_name: last_name,
};

//Primitive types
// type or interfacce
type person = {
  first_name: string;
  last_name: string;
  age?: number;
};

type softwareDeveloper = {
  skills: string;
};

const obj: person = {
  first_name: "jitesh",
  last_name: "sirohi",
  age: 26,
};

//Tupple - Array
//1. the number of elements in the tuple is fixed.
//2. the types of the tuple are fixed.
let tuple: [string, number];
tuple = ["masai", 1];

//Enums -> a group of named constants.

//  enum COLORS{
//     RED, GREEN, BLUE
//  }

// let greenColor = COLORS.GREEN;
// console.log(greenColor); // 1

// or

enum COLORS {
  RED = "RED", //0
  GREEN = "GREEN", //1
  BLUE = "BLUE", //2
}
let greenColor = COLORS.GREEN;
// console.log(greenColor); //GREEN

//functions
function sum(a: number, b: number) {
  return a + b;
}

// console.log(sum(2,3))

const printName = ({ first_name, last_name, age }: person) => {
  return `${first_name} ${last_name}`;
};

const person1: person = {
  first_name: "jitesh",
  last_name: "sirohi",
  age: 26,
};

printName(person1);

//Union

let output: (string | number)[];
output = ["masai", 1, 2, "school"]; // can't set boolen now.
// console.log(output)

//intersection
//add all the types svalue in one variable.
let person3: person & softwareDeveloper = {
  first_name: "jitesh",
  last_name: "sirohi",
  age: 26,
  skills: "great in everything",
};
// console.log(person3)
