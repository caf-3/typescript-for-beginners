let greet: Function;
greet = () => {
    console.log('Void Telecom')
}
greet();

const clientData = (name: string, age: number, color: string = 'Black') => {
    return `name  -> ${name}\nage   -> ${age}\ncolor -> ${color}`
}

console.log(clientData('Tomás', 15))

const add = (a: number, b: number) => {
    return a + b;
}
let result = add(10, 16);