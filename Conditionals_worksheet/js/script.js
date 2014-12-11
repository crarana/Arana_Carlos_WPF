// Name: Carlos Arana
// Date: 12/11/14
// Activity: Conditionals Worksheet
// Student ID: #0004645079


//Celsius to Farenheit converter

//Acquire givens with prompts
var temp = prompt("Enter a number for the temperature"); //given for degrees
var unit = prompt("Enter the unit of measurement for temperature. (F for Farenheit or C for Celsius)"); //given for unit of measurement


//if unit measurement is C, calculate conversion to Fahrenheit. Print results. Otherwise if unit measurement is F, calculate converstion to Celsius. Print results. Otherwise, print that more information is needed.
if( unit === "C" || "c"){ //if unit is C
	var faren = Number(temp) * (9/5) + 32; //convert C to F.
	console.log("The temperature is" + " " + temp + " " + "degrees Celsius, or the temperature is" + " " + faren + " " + "degrees Farenheit."); //console log
	alert("The temperature is" + " " + temp + " " + "degrees Celsius, or the temperature is" + " " + faren + " " + "degrees Farenheit."); //alert the user
} else if (unit === "F" || "f"){ //otherwise if unit is F
	var cels = (Number(temp) - 32) * (5/9); //convert F to C.
	console.log("The temperature is" + " " + temp + " " + "degrees Farenheit, or the temperature is" + " " + cels + " " + "degrees Celsius."); // console log
	alert("The temperature is" + " " + temp + " " + "degrees Farenheit, or the temperature is" + " " + cels + " " + "degrees Celsius."); //alert the user
} else { //if neither of these options is true, then :
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};