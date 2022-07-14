declare let x: boolean;
declare let y: string;
declare let first_name: string;
declare let last_name: string;
declare let full_name: string;
declare let array: Array<string>;
declare let array2: number[];
declare let obj1: object;
declare type person = {
    first_name: string;
    last_name: string;
    age?: number;
};
declare type softwareDeveloper = {
    skills: string;
};
declare const obj: person;
declare let tuple: [string, number];
declare enum COLORS {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}
declare let greenColor: COLORS;
declare function sum(a: number, b: number): number;
declare const printName: ({ first_name, last_name, age }: person) => string;
declare const person1: person;
declare let output: (string | number)[];
declare let person3: person & softwareDeveloper;
