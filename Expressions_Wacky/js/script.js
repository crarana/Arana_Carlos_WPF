/*
 Name: Carlos Arana
 Date: 12/4/14
 Activity: Expressions Worksheet
 Project: Expressions Wacky
 Student ID: #0004645079
*/

/* compounded monthly interest for a credit card with an annual interest rate of 12%. */

alert("In this expressions project, we will consider the interest applied to a credit card with certain purchases on it at 12% interest per year. You will be asked for the initial balance on the card at the beginning of month one, then for the 3 purchases made on the card in month 1, then the 3 purchases made in month 2, and finally the three purchases made in month 3.") //alert to indicate the exercise

var initBalance = prompt("What is the initial balance on the card?"); //gather the given for the initial balance
var purchaseA = [prompt("What is the first purchase made in the first month?"), ("What is the second purchase made in the first month?"), ("What is the third purchase made in the first month?") ]; //gather the values for the first month
var purchaseB = [prompt("What is the first purchase made in the second month?"), ("What is the second purchase made in the second month?"), ("What is the third purchase made in the second month?") ]; //gather the values for the second month
var purchaseC = [];