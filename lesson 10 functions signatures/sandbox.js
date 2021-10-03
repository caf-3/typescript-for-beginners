// functions signatures
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
var calc;
calc = function (numbOne, numbTwo, action) {
    if (action == ('+' || 'add'))
        return numbOne + numbTwo;
    return numbOne - numbTwo;
};
var logDetails;
logDetails = function (user) {
    console.log(user.name + " is " + user.age + " years old");
};
logDetails({ name: "Miguel", age: 32 });
