// Name: Carlos Arana
// Date: 12/11/14
// Activity: Conditionals Worksheet
// Student ID: #0004645079

//GROUP 1: EXPRESSIONS WITH CONDITIONALS
//Celsius to Farenheit converter

alert("This calculator is a Fahrenheit to Celsisus converter."); //alerts the user for upcoming prompts.
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

//Last Chance for Gas!

alert("This prompt will ask you questions about the current state of your car to determine whether or not you can make it across a 200 mile stretch in the desert with no gas stops."); //alerts the user for upcoming prompts.

//Acquire givens with prompts
var effic = prompt("How many mpg does the car get?"); //given for mpg 
var gasLeft = prompt("What is the gauge reading of the gas left in the tank in percent?"); //given for percent of tank full
var tank = prompt("How much gas in gallons can the tank carry when full?"); //given for tank capacity in gallons

//calculations done by machine
var percent = Number(gasLeft)/100; //adjusts the percentage
var gal = Number(tank)*percent; //adjusts to determine how many gallons are left in the tank
var can = gal*Number(effic); //adjusts to determine if the amount of gallons of gas left can make it 200 miles at the mpg of the car

//if the total calculated is greater than or equal to 200, then print that it is possible. Otherwise if the total calculated is less than 200, then print that it is not possible. Otherwise, print that more information is needed.
if (can >= 200) { //if there is enough gallons
	console.log("Yes, you can make it without stopping for gas!"); //console log
	alert("Yes, you can make it without stopping for gas!"); //alert the user
}else if (can < 200) { //if there are not enough
	console.log("You only have" + " " + Number(gal) + " " + "gallons of gas in your tank, better get gas now while you can!"); //console log
	alert("You only have" + " " + Number(gal) + " " + "gallons of gas in your tank, better get gas now while you can!"); //alert the user
} else { //if neither of these options is true, then :
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};

//GROUP 2: MULTIPLE RESULTS
//Grade Letter Calculator

//Acquire the givens with prompts
var percent = prompt("What is the number grade at the conclusion of your course?");
var percent = Number(percent);

if (percent >= 95) {
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an A+ in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned an A+ in the class!");
}else if (percent >=90 && percent<=94){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an A in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned an A in the class!");
}else if(percent >= 85 && percent <=89){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a B+ in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned a B+ in the class!");
}else if(percent >=80 && percent<=84){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a B in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned a B in the class!");
}else if(percent >=76 && percent<=79){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a C+ in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned a C+ in the class!");
}else if(percent >=73 && percent<=75){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a C in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned a C in the class!");
}else if(percent >=70 && percent<=72){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a D in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned a D in the class!");
}else if(percent <=69){
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an F in the class!");
	alert("You have a" + " " + percent + "%, " + "which means you have earned an F in the class!");
}else{
console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
}


//GROUP 3: MULTIPLE CONDITIONS
//Tire Pressure 1


var pressure = [prompt("What is the pressure of your front left tire in psi?"), prompt("What is the pressure of your front right tire in psi?"), prompt("What is the pressure of your back left tire in psi?"), prompt("What is the pressure of your back right tire in psi?")]; 

//front tires must have same pressure, back two tires must have the same pressure, but front tires and back tires can have differing pressures.

if(Number(pressure[0]) === Number(pressure[1]) || Number(pressure[2]) === Number(pressure[3])){
	console.log("The tires pass spec!");
	alert("The tires pass spec!");
}else if(Number(pressure[0]) != Number(pressure[1]) || Number(pressure[2]) != Number(pressure[3])){
	console.log("Get your tires checked out!");
	alert("Get your tires checked out!");
}else{
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};











































