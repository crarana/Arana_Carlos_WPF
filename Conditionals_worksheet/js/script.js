// Name: Carlos Arana
// Date: 12/11/14
// Activity: Conditionals Worksheet
// Student ID: #0004645079


//Celsius to Farenheit converter

//Acquire givens with prompts
var temp = prompt("Enter a number for the temperature"); //given for degrees
var unit = prompt("Enter the unit of measurement for temperature. (F for Farenheit or C for Celsius)"); //given for unit of measurement

if( unit === "C" ){
	var faren = Number(temp) * 2 + 30;
	console.log("The temperature is" + " " + temp + " " + "degrees Celsius, or the temperature is" + " " + faren + " " + "degrees Farenheit.");
} else if (unit === "F"){
	var cels = (Number(temp) - 30)/2;
	console.log("The temperature is" + " " + temp + " " + "degrees Farenheit, or the temperature is" + " " + cels + " " + "degrees Celsius.");
} else {
	console.log("Did not have enough information to complete the calculation. Please try again.");
};