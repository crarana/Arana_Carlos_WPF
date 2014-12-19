// Name: Carlos Arana
// Date: 12/18/14
// Activity: Functions Worksheet
// Student ID: #0004645079

//Problem: Circumference

//Calculate the circumference of a cricle.
//prompt for given
var radius= prompt("What is the radius of the circle") ; //defined var radius based on prompt
var circumference = calculateCircumference(radius); //added var defined by function for radius
console.log("The Circumference of the Circle is" + " " + circumference); //console log results

function calculateCircumference(radius){ //function, and functionname
	return radius*2*3.14; //print result
}

//Strung!

//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.
var weight= prompt("How much is the weight of the victim?"); //var weight defined by prompt results
var kill = calculateKill(weight); //var kill defined by function caclculateKill
console.log("It would take" + " " + kill + " " + "beestings to kill an animal that weighs" + " " + weight + "pounds"); //cosole log results

function caclculateKill(weight){
	return weight*8.666666667
}






















































