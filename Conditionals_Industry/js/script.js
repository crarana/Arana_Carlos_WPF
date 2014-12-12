// Name: Carlos Arana
// Date: 12/11/14
// Assignment: Conditionals
// Project: Industry conditionals
// Student ID: #0004645079

/* For this assignment im going to make it a discount offered for buying 3 or more items. 
*/
alert("If you buy three items or more, the salon offers 15% off the total."); //alerts the user of the upcoming prompts

//acquire givens
var total = prompt("How much is the total for your services today?"); //acquire the total for var total
var items = prompt("How many items are you buying today?"); //acquire the amount of items for the item var

//adjustments
var total = Number(total); //adjust to numerical value
var items = Number(items); //adjust to numerical value
var discount = total*.85; //adjust for discount from total

if(items >= 3) {
	total*.85	
}else if (items <=2) {
}else{
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};
