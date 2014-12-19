// Name: Carlos Arana
// Date: 12/18/14
// Activity: Functions Worksheet
// Student ID: #0004645079

//Problem: Circumference

//Calculate the circumference of a cricle.
//prompt for given
var radius= prompt("What is the radius of the circle") ; //defined var radius based on prompt
var circumference = calculateCircumference(radius);
console.log("The Circumference of the Circle is" + " " + circumference);

function calculateCircumference(radius){
	return radius*2*3.14;
}

//Strung!

//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.
var weight= prompt("How much is the weight of the victim?");
var kill = calculateKill(weight);
console.log("It would take" + " " + kill + " " + "beestings to kill an animal that weighs" + " " + weight + "pounds");

function caclculateKill(weight){
	return weight*8.666666667
}






















































