//1. interface for an object

type objectInterface = {
  title: string;
  status: boolean;
  id: number;
};

let objectInterface1: objectInterface = {
  title: "Jitesh Siorhi",
  status: false,
  id: 1,
};

//2. function getName
type nameInterface = {
  firstName: string;
  lastName?: string;
};

const nameInterface1: nameInterface = {
  firstName: "jitesh",
  lastName: "",
};

const getName = ({ firstName, lastName }: nameInterface) => {
  return `${firstName} ${lastName}`;
};

///3. interface Address

type addressInterface = {
  houseNumber: number;
  street: string | number;
  city: string;
  state: string;
  postalCode: number;
  country: string;
};

// const addressInterface1: addressInterface = {
//   houseNumber: 1,
//   street: 2,
//   city: "ghaziabad",
//   state: "UP",
//   postalCode: 123,
//   country: "INDIA",
// };

// 4. PersonDetails interface

type PersonDetailsInterface = {
  prefix?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: number[];
  email?: string;
  addresses: string[];
};

// let PersonDetailsInterface1: PersonDetailsInterface = {
//   firstName: "jitesh",
//   lastName: "sirohi",
//   phone: [12345],
//   addresses: ["New York"],
// };

//5. function PhoneBook

let allPersons = [];

function PhoneBook<Type>(arg: Type): Type {
  allPersons.push(arg);
  return arg;
}

PhoneBook("jitesh");
PhoneBook("sirohi");

// problem 3
//function to retrieve the type of the user or admin

interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

const retrieve = (obj: User | Admin): string => {
  return obj.type;
};

let user: User = {
  type: "user",
  name: "Jitesh",
  age: 2,
  occupation: "string",
};
let admin: Admin = {
  type: "admin",
  name: "Jitesh",
  age: 2,
  role: "role",
};
