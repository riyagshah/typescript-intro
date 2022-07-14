declare type objectInterface = {
    title: string;
    status: boolean;
    id: number;
};
declare let objectInterface1: objectInterface;
declare type nameInterface = {
    firstName: string;
    lastName?: string;
};
declare const nameInterface1: nameInterface;
declare const getName: ({ firstName, lastName }: nameInterface) => string;
declare type addressInterface = {
    houseNumber: number;
    street: string | number;
    city: string;
    state: string;
    postalCode: number;
    country: string;
};
declare type PersonDetailsInterface = {
    prefix?: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: number[];
    email?: string;
    addresses: string[];
};
declare let allPersons: any[];
declare function PhoneBook<Type>(arg: Type): Type;
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
declare const retrieve: (obj: User | Admin) => string;
declare let user: User;
declare let admin: Admin;
