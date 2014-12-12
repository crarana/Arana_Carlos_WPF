// Name: Carlos Arana
// Date: 12/11/14
// Assignment: Conditionals
// Project: Wacky conditionals
// Student ID: #0004645079

//This prompt will be to determine what tiles are options for the project of laying in new tile floor for a room.

alert("The cost of wood floor tiles is $.75 each. The cost of ceramic floor tiles is $1.25 each. You are going to be laying new tile and you'd like to know which is within your budget. Each tile is one foot by one foot."); //alert the user to the coming prompts

//acquire values with given prompts
var length = prompt("What is the length of the room in feet?"); //acquire a value for the length var
var width = prompt("What is the width of the room in feet?"); //acquire a value for the width var
var budget = prompt("What is your budget for this project?"); //acquire a value for the budget

//adjustments
var length = Number(length); //adjust value for length to a numeric value
var width = Number(width); //adjust value for width to a numeric value
var budget = Number(budget); //adjust value for budget to a numeric value
