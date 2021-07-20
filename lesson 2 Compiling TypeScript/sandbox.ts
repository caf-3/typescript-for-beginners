const character = "Tomás Caetano";
console.log(character);
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.type == "text" ? input.value = "Dinamic value" : input.value = "14";
    console.log(input)
})