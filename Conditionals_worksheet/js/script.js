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
alert("This program will calculate your letter grade when given you numeric grade at the end of a course.") //alert the user of the upcoming prompt.

//Acquire the givens with prompts
var percent = prompt("What is the number grade at the conclusion of your course?"); //given for the percent grade
var percent = Number(percent); //converts the var string response to a var number

//if and only if you got a certain score, you will get a certain grade
if (percent >= 95) { //if you got 95 or greater
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an A+ in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned an A+ in the class!"); //alert the user
}else if (percent >=90 && percent<=94){ // if you got between a 90 and a 94
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an A in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned an A in the class!"); //alert the user
}else if(percent >= 85 && percent <=89){ //if you got between an 85 and an 89
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a B+ in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned a B+ in the class!"); //alert the user
}else if(percent >=80 && percent<=84){ //if you got between an 84 and an 80
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a B in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned a B in the class!"); //alert the user
}else if(percent >=76 && percent<=79){ //if you got between a 76 and a 79
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a C+ in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned a C+ in the class!"); //alert the user
}else if(percent >=73 && percent<=75){ //if you got between a 73 and 75
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a C in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned a C in the class!"); //alert the user
}else if(percent >=70 && percent<=72){ //if you got between a 70 and a 72
	console.log("You have a" + " " + percent + "%, " + "which means you have earned a D in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned a D in the class!"); //alert the user
}else if(percent <=69){ //if you got a 69 or less
	console.log("You have a" + " " + percent + "%, " + "which means you have earned an F in the class!"); //console log
	alert("You have a" + " " + percent + "%, " + "which means you have earned an F in the class!"); //alert the user
}else{
console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
}


//GROUP 3: MULTIPLE CONDITIONS
//Tire Pressure 1

alert("This next program will determine if your tire pressure will pass inspection. You will be asked the tire pressure of your four tires in psi.") //alert the user

//acquire the givens
var pressure = [prompt("What is the pressure of your front left tire in psi?"), prompt("What is the pressure of your front right tire in psi?"), prompt("What is the pressure of your back left tire in psi?"), prompt("What is the pressure of your back right tire in psi?")]; //this is the prompts for the array which holds the tires pressures

//front tires must have same pressure, back two tires must have the same pressure, but front tires and back tires can have differing pressures.
if(Number(pressure[0]) === Number(pressure[1]) && Number(pressure[2]) === Number(pressure[3])){ //if the two front tires are equal and the back two tires are equal
	console.log("The tires pass spec!"); //console log
	alert("The tires pass spec!"); //alert the user
}else if(Number(pressure[0]) != Number(pressure[1]) || Number(pressure[2]) != Number(pressure[3])){
	console.log("Get your tires checked out!"); //console log
	alert("Get your tires checked out!"); //alert the user
}else{
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};











































