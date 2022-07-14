//1. interface for an object
let objectInterface1 = {
    title: "Jitesh Siorhi",
    status: false,
    id: 1,
};
const nameInterface1 = {
    firstName: "jitesh",
    lastName: "",
};
const getName = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
};
// let PersonDetailsInterface1: PersonDetailsInterface = {
//   firstName: "jitesh",
//   lastName: "sirohi",
//   phone: [12345],
//   addresses: ["New York"],
// };
//5. function PhoneBook
let allPersons = [];
function PhoneBook(arg) {
    allPersons.push(arg);
    return arg;
}
PhoneBook("jitesh");
PhoneBook("sirohi");
const retrieve = (obj) => {
    return obj.type;
};
let user = {
    type: "user",
    name: "Jitesh",
    age: 2,
    occupation: "string",
};
let admin = {
    type: "admin",
    name: "Jitesh",
    age: 2,
    role: "role",
};
//# sourceMappingURL=problem2.js.map