let name1:string="jitesh";
let age:number= 2;
let isFetching:boolean = false;
let arrayofNumbers:number[]=[1,2];
let arrayofStrings:string[]=["jitesh","sirohi"];

//tuple
let tupleofArray:[string, number];
tupleofArray=["one",2];

//enum
enum Users{
    Users, SuperUser, Admin, SuperAdmin
}
let user1 = Users.SuperUser;

//function product
function product(x:number, y:number):number{
    return x*y;
}

//function divide
function divide(x:number, y:number):number{
    return Math.floor(x/y);
}

//function product
function names(the_name:string):void{
   console.log(the_name);
}

