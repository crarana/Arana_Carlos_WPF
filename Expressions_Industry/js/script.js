/*
 Name: Carlos Arana
 Date: 12/4/14
 Activity: Expressions Worksheet
 Student ID: #0004645079
*/

/*
For this expressions practice I decided to make it about my current job. It is holiday season and we are offering great
deals on our high-end line of haircare products. A lot of money goes into the research and development of Loreal's
Kerastase line of products and the pricepoint for the products indicates that. Because the products are expensive,
the holiday season is a great time to offer discounts that make them more affordable.

We offer holiday bundles, and the individual products at discounts. This will work to compare a holiday bundle that contains 3 products
at a discount as well as the three individual products at their discounted products.
 */

alert("3 Products are on sale for the holiday season. The same 3 products come in a bundle that is also on sale for the holiday season. Which is a better deal?"); //To help the user understand the coming questions

//Gathering the givens

var itemPrices = [prompt("What is the original price of the first product?"), prompt("What is the original price of the second product?"), prompt("What is the original price of the third product?")]; //Gathers the givens for the prices of the products
var discountItems = prompt("What is the percentage discounted of buying individual products this holiday season?"); //To determine the percent off for individual items
var bundle = prompt("What is the original price of the 3 item bundle?"); //Given for the price of the bundle
var discountBundle = prompt("What is the percentage discounted from the bundle this holiday season?"); //Given for the discount on the bundle
var taxes = prompt("What is the sales tax percentage"); //given for the tax added to the purchase

//Calculating the discounts and difference

var totalItems = Number(itemPrices[0]) + Number(itemPrices[1]) + Number(itemPrices[2]);
var countItems = (100 - Number(discountItems))/100;
var taxed = (100 - Number(taxes))/100;
var totalItemsTax = totalItems * countItems * taxed;
var countBundle = (100 - Number(discountBundle))/100;
var totalBundleTax = Number(bundle) * countBundle * taxed;

var difference; 