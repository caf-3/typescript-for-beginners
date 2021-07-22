var greet;
greet = function () {
    console.log('Void Telecom');
};
greet();
var clientData = function (name, age, color) {
    if (color === void 0) { color = 'Black'; }
    return "name  -> " + name + "\nage   -> " + age + "\ncolor -> " + color;
};
console.log(clientData('Tomás', 15));
var add = function (a, b) {
    return a + b;
};
var result = add(10, 16);
