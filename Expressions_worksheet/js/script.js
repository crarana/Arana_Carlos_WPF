// Name: Carlos Arana
// Date: 12/4/14
// Activity: Expressions Worksheet
// Student ID: #0004645079



//Dog Years

alert("Dog Years"); //Let the visitor know that the exercise is titled Dog Years

var humanYears = prompt("Enter Sparky's age:"); //Get a given from the prompt for Sparky's age

var dogYears = humanYears * 7; //Declare and define the relationship between human years and dog years

alert("Sparky is" + " " + humanYears + " " + "years old which is" + " " + dogYears + " " + "in dog years."); //Print out Sparky's age in relation to human years.




//Slice of Pie Part 1

alert("Slice of Pie Part 1"); //Let the visitor know that the exercise is titled Slice of Pie Part 1

var slices = prompt("How many slices are in each pizza?"); //Get a given from the prompt for the number of slices per pizza
var people = prompt("How many people are at the party?"); //Get a given from the prompt for the number of people at the party.
var pizzas = prompt("How many pizzas were ordered?"); //Get a given from the prompt for the number of pizzas ordered

var personal = pizzas * slices/people; //# of slices per person

alert("Each person ate" + " " + personal + " " + "slices of pizza at the party."); //Print out the result of how many slices each person ate



//Slices of Pie Part 2

alert("Slice of Pie Part 2"); //Let the visitor know that the exercise is titled Slice of Pie Part 2

var puppySlice = pizzas * slices%people; //# of slices Sparky gets to it if he eats the remainder slices

alert("Sparky got" + " " + puppySlice + " " + "slices of Pizza."); //print out result



//Average Shopping Bill

alert("Average Shopping Bill"); //Let the visitor know that the exercise is titled Average Shopping Bill


var bill = [prompt("How much was your grocery bill for last week?"), prompt("How much was your grocery bill the week prior to that?"), prompt("How much was your grocery bill three weeks ago?"), prompt("How much was your grocery bill four weeks ago?"), prompt("How much was your grocery bill five weeks ago?")]; //Prompt to get the given bills for each week of grocery shopping

var totalA = Number(bill[0]) + Number(bill[1]) + Number(bill[2]) + Number(bill[3]) + Number(bill[4]); //adds the items from the array for the givens from the prompts

var mean = total /5 ; //finds the average shopping bill

alert("You have spent a total of" + " $" + totalA + " " + "on groceries over 5 weeks. That is an average of" + " $" + mean + " " +  "per week."); //prints result


//Discounts

alert("Discounts"); //Let the visitor know that the exercise is titled Discounts

var price = prompt("What is the original price of the item?"); //Gets a given for the original price of the item
var discount = prompt("What is the discount percentage?"); //Gets a given for the percent being discounted
var description = prompt("What is the description of the item?"); //Gets a description of the item
var sales = prompt("What is the sales tax percentage being applied to the total?"); //Gets the sales tax being applied to the purchase

var count = (100 - Number(discount))/100; //Finds the discount
var tax = (100 + Number(sales))/100; //The sales tax after adjustment

var total = Number(price) * count; //Finds the total of the item at it's discounted price
var totalTaxed = total * tax; //Finds the total of the purchase after sales tax has been applied to the discounted price

alert("Your" + " " + description + " " + "was originally" + " $" + price + ", " + "but after a" + " " + discount + "% " + "discount, it is now" + " $" + total + " " + "without tax, and" + " $" + totalTaxed + " " + "with tax."); // Prints out the result for the givens