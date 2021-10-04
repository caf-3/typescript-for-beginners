"use strict";
var character = "Tomás Caetano";
console.log(character);
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    input.type == "text" ? input.value = "Dinamic value" : input.value = "14";
    console.log(input);
});
