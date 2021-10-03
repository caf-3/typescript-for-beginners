var logDetails = function (uid, item) {
    console.log(item + " has uid " + uid);
};
var userDetails = function (user) {
    console.log("\n        name: " + user.name + "\n        age: " + user.age + "\n        isStaff: " + user.isStaff + "\n    ");
};
logDetails('1234a', 'Pizza');
userDetails({ name: 'Tomás', age: 21, isStaff: false });
