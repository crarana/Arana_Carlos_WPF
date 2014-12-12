// Name: Carlos Arana
// Date: 12/11/14
// Assignment: Conditionals
// Project: Personal conditionals
// Student ID: #0004645079

//In this assignment I will calculate which bills are paid this week depending on balance and priority. This is something that affects my life because it is important to prioritize in a budget. For instance, rent and utilities supercede groceries, and both superceded my phone bill.

alert("In this program you will be asked to prioritize your next three bills, and subsequently: your checking account balance. With this information the program will determine how many of the bills will be paid based on their priority. None of these bills are due this week.") //alert the user on the upcoming prompts

//acquire givens
var rent = prompt("How much is your rent?"); //prompt to acquire value for var rent
var food = prompt("How much will your next grocery bill be?"); //prompt to get value for var food
var phone = prompt("How much is your upcoming phone bill?"); //prompt to get phone bill value for var phone
var balance = prompt("how much is your current balance?"); //prompt to acquire balance value for balance var


//comparisons
var food = Number(food); //adjust to number value
var rent = Number(rent); //adjust to number value
var phone = Number(phone); //adjust to number value
var balance = Number(balance); //adjust to number value
var rentFood = rent + food; // value for the combination of rent and food
var rentPhone = rent + phone; //value for the combination of rent and phone
var rentFoodPhone = rent + food + phone; //value for combination of 3 values
var foodPhone = food + phone; //value for combination of food and phone

if (balance >= rentFoodPhone){ //if you have enough for all 3 bills RFP
	console.log("You have enough to pay all three of your bills."); //console log
	alert("You have enough to pay all three of your bills."); //alert the user
}else if(balance >= rentFood && balance <= rentFoodPhone && balance >= rentPhone){ //if you have enough for 2 of the bills, either or RF or RP
	console.log("You have enough to pay two of your bills. Either your rent and food, or your rent and phone."); //console log
	alert("You have enough to pay two of your bills. Either your rent and food, or your rent and phone."); //alert the user
}else if(balance >= rentFood && balance <= rentPhone && balance <= rentFoodPhone){ //if you have only enough for two specific bills RF
	console.log("You have enough to pay only your rent and your food bills."); //console log
	alert("You have enough to pay only your rent and your food bills."); //alert the user
}else if(balance <= rentFood && balance >= rentPhone && balance <= rentFoodPhone){ //if you have only enough for two specific bills RP
	console.log("You have enough to pay only your rent and phone bills."); //console log
	alert("You have enough to pay only your rent and phone bills."); //alert the user
}else if(balance >= rent && balance <= rentPhone && balance <= rentFood && balance <= rentFoodPhone){
	console.log("You have only enough to pay your rent."); //console log
	alert("You have only enough to pay your rent."); //alert the user
}else if(balance < rent && balance >= foodPhone){
	console.log("You have enough for your phone and food bills but not enough for rent. Best to hold off on those bills until you have your rent paid."); //console log
	alert("You have enough for your phone and food bills but not enough for rent. Best to hold off on those bills until you have your rent paid."); //alert the user
}else {
	console.log("Did not have enough information to complete the calculation. Please try again."); //console log
	alert("Did not have enough information to complete the calculation. Please try again."); //alert the user
};