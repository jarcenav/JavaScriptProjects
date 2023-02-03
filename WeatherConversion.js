//Variable kelvin is equal to 293
const kelvin = 293;

//Conversion from kelvin to celsuis
const celsius = kelvin - 273;

//Conversion from celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Rounds the number saved to fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Displays the fahrenheit value to the user
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);