const kelvin = prompt('What is the Kelvon temperature today?'); //today's forcast in kelvin
var celsius = kelvin - 273; //conversion
var fahrenheit = celsius *(1.8) + 32; //conversion
fahrenheit = Math.floor(fahrenheit);
console.log("the temperature is ".concat(fahrenheit, " degrees fahrenheit"));
