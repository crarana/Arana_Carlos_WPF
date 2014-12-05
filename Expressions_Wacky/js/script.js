/*
 Name: Carlos Arana
 Date: 12/4/14
 Activity: Expressions Worksheet
 Project: Expressions Wacky
 Student ID: #0004645079
*/

/* compounded monthly interest for a credit card with an annual interest rate of 15%. */

alert("In this expressions project, we will consider the interest applied to a credit card with certain purchases on it at 15% interest per year. You will be asked for the initial balance on the card at the beginning of month one, then for the 3 purchases made on the card in month 1, then the 3 purchases made in month 2, and finally the three purchases made in month 3.") //alert to indicate the exercise

//Gather givens

var initBalance = prompt("What is the initial balance on the card?"); //gather the given for the initial balance

var purchaseA = [prompt("What is the first purchase made in the first month?"), prompt("What is the second purchase made in the first month?"), prompt("What is the third purchase made in the first month?")]; //gather the values for the first month
var purchaseB = [prompt("What is the first purchase made in the second month?"), prompt("What is the second purchase made in the second month?"), prompt("What is the third purchase made in the second month?")]; //gather the values for the second month
var purchaseC = [prompt("What is the first purchase made in the third month?"), prompt("What is the second purchase made in the third month?"), prompt("What is the third purchase made in the third month?")]; //gather the values for the third month

//Calculations

var percent = .15/12; 
//percentage per month
percent++;
//percent applied to balance

var monthTotal = Number(initBalance) + Number(purchaseA[0]) + Number(purchaseA[1]) + Number(purchaseA[2]); //First month total before percentage applied
var balanceTotal = monthTotal * percent; //Balance for first month + interest

balanceTotal += Number(purchaseB[0]) + Number(purchaseB[1]) + Number(purchaseB[2]);




alert(" The total is" + " " + balanceTotal + ". ");

