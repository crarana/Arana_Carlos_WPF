// Name: Carlos Arana
// Date: 12/18/14
// Assignment: Functions
// Project: Functions Wacky
// Student ID: #0004645079

//This project will be used to determine how much gas is needed to get to a specific planet depending on your cars MPG.

//alert
alert("Let's imagine for a moment that your car has been upgraded to a space friendly automobile. Now you can drive to any destination in the solar system. You will be asked a couple questions to determine how much money you will need for gas on your journey.") //alert the user

//givens

var mpg = prompt("How many miles does your car get per gallon."); //gather the mpg with the given
var planet = prompt("Which planet would you like to visit?"); //gather the planet being visited with the given
var price = prompt("How much does one gallon of gas cost?"); //gather the price of the gallon from the given
var planetT = planet; //make a substitute variable to contain the result from planet because planet is about to be converted to its distance

//conditional statement to convert string planet to integer distance of planet

if(planet === "mercury" || "Mercury"){ //if the planet choice is Mercury
	planet = Number(48000000); //then the distance is this
}else if(planet === "venus" || "Venus"){ //if the planet choice is Venus
	planet = Number(26000000); //then the distance is this
}else if(planet === "mars" || "Mars"){ //if the planet choice is Mars
	planet = Number(249000000); //then the distance is this
}else if(planet === "jupiter" || "Jupiter"){//if the planet choice is Jupiter
	planet= Number(365000000); //then the distance is this
}else if(planet === "saturn" || "Saturn"){ //if the planet choice is Saturn
	planet = Number(746000000); //then the distance is this
}else if(planet === "neptune" || "Neptune"){ //if the planet choice is Neptune
	planet = Number(2800000000); //then the distance is this
}else if(planet === "uranus" || "Uranus"){ //if the planet choice is Uranus
	planet = Number(1800000000); //then the distance is this
}else if(planet === "pluto" || "Pluto"){ //if the planet choice is Pluto
	planet = Number(3670000000); //then the distance is this
}else{ //otherwise if no other planet was chosen
	alert("It looks like we need more information to complete this program. Please try again."); //alert the user
	console.log("It looks like we need more information to complete this program. Please try again."); //console log
};

//var total and the console log and alert

var total = calculateTotal(mpg, planet, price); //define variable total as the function result for calculateTotal
console.log("If your car gets" + " " + mpg + " " + "mpg and gas costs" + " $" + price + " " + "per gallon and you are trying to visit" + " " + planetT + " " + "then it will take" + " $" + total + " " + "to make your journey."); //console log results
alert("If your car gets" + " " + mpg + " " + "mpg and gas costs" + " $" + price + " " + "per gallon and you are trying to visit" + " " + planetT + " " + "then it will take" + " $" + total + " " + "to make your journey."); //alert the user of the results

//functions

function calculateTotal(mpg, planet, price){ //function calculate total with parameters mpg, planet, and price acts as follows
	return planet/mpg*price
};