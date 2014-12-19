// Name: Carlos Arana
// Date: 12/18/14
// Assignment: Functions
// Project: Functions Industry
// Student ID: #0004645079

//for this one, im deciding to make it about getting a discount on your ice cream for every 5th visit, and an extra special discount for every the 20th visit

alert("You are visiting a cookie shop you often visit. When you buy 5 cookies or more you get 2.00 off.") //alert the user of the coming prompts.

var cookies = prompt("how many cookies will you buy?"); //given for cookies
var total = prompt("What is your total for today before any discounts?"); //given for total
var discount = (cookies > 5) ? 2.00 : 0; //ternary used to determine whether or not the discount will be applied.

var totalDiscount = caclulcatingCost(total, discount); //defining the function under a variable name

console.log("You have bought" + " " + cookies + " " + "and your total is" + " $" + totalDiscount +"."); //console log
alert("You have bought" + " " + cookies + " " + "and your total is" + " $" + totalDiscount +"."); //alert the user

function caclulcatingCost(total, discount){ //run the function to calculate cost
	return total - discount //return the amount for the function
};



	
