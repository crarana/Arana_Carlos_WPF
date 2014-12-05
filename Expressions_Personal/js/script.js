// Name: Carlos Arana
// Date: 12/4/14
// Activity: Expressions Worksheet
// Student ID: #0004645079

alert("My personal expressions exercise revolves around the amount of money I spend annually on tolls.");

var tollCost = prompt("How much is the toll cost?"); //To asses the cost of each toll being passed for work.
var times = prompt("How many tolls do you pass on your way to or from work?"); //To find out how many tolls are passed each trip
var workWeek = prompt("How many days do you work a week?"); //to learn how many days are worked per week

var shiftsYear = Number(workWeek) * 52; //how many days per year are worked

var timesPerWork = Number(times) * 2; //each trip to and from work crosses how many tolls

var tollsPerYear = Number(timesPerWork) * Number(shiftsYear); //Tolls crossed per year

var total = Number(tollCost) * tollsPerYear;

alert("If the cost of tolls is " + " $" + tollCost + " " + "and you cross" + " " + times + " " + "tolls per trip to or from work and you work" + " " + workWeek + " " + "times per week, then you spend" + " $" + total + " " + "per year on tolls for work.");
