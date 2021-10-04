// functions signatures
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, d: string) => number;

calc = (numbOne: number, numbTwo: number, action: string): number => {
    if(action == ('+' || 'add')) return numbOne + numbTwo;
    return numbOne - numbTwo
}

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (user: {name: string, age: number}) => {
    console.log(`${user.name} is ${user.age} years old`)
}

logDetails({name: "Miguel", age: 32})