let name1 = "jitesh";
let age = 2;
let isFetching = false;
let arrayofNumbers = [1, 2];
let arrayofStrings = ["jitesh", "sirohi"];
//tuple
let tupleofArray;
tupleofArray = ["one", 2];
//enum
var Users;
(function (Users) {
    Users[Users["Users"] = 0] = "Users";
    Users[Users["SuperUser"] = 1] = "SuperUser";
    Users[Users["Admin"] = 2] = "Admin";
    Users[Users["SuperAdmin"] = 3] = "SuperAdmin";
})(Users || (Users = {}));
let user1 = Users.SuperUser;
//function product
function product(x, y) {
    return x * y;
}
//function divide
function divide(x, y) {
    return Math.floor(x / y);
}
//function product
function names(the_name) {
    console.log(the_name);
}
//# sourceMappingURL=problem1.js.map