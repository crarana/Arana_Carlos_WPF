// Name: Carlos Arana
// Date: 12/18/14
// Assignment: Functions
// Project: Functions Personal
// Student ID: #0004645079

//building an indoor garden

//my roomate and I are building an indoor garden to occupy an empty room in the house. We want the entire room to be a garden except for a walkway.
//The prompts will be gathered by the user to determine their indoor garden space

alert("You will be converting an empty room in your house to an indoor garden. To do so, you must consider how much space wll be devoted to a walkway and how much space will be devoted to the garden area."); //alert to let the user know whats coming next

//gathering givens

var width=prompt("What is the width in feet of the room?"); //var for width of room given
var length=prompt("What is the length in feet of the room?"); //var for length of room given
var walkWidth=prompt("What is the width in feet of the intended walkway?"); //var for walkwidth given
var walkLength=prompt("What is the length in feet of the intended walkway?"); //var for walklength given

//declaring vars with functions as definitions

var roomArea = calculateRoom(length, width); //var defined by function with parameters
var walkArea = calculateWalk(walkWidth, walkLength); //var defined by function with parameters
var gardenArea = differenceArea(roomArea, walkArea); //var defined by function with parameters
console.log("If the room is" + " " + roomArea + " " + "square feet and the walkway area is" + " " + walkArea + " " + "square feet, then the garden can be" + " " + gardenArea + " " + "square feet."); //print to console
alert("If the room is" + " " + roomArea + " " + "square feet and the walkway area is" + " " + walkArea + " " + "square feet, then the garden can be" + " " + gardenArea + " " + "square feet."); //alert to the user

//functions 

function calculateRoom(width, length){ //function for calculating room area with given arguments
	return width*length
};
function calculateWalk(walkWidth, walkLength){ //function for calculating walk area are with given arguments
	return walkWidth*walkLength
};
function differenceArea(roomArea, walkArea){ //function for caclulating the difference in the areas of the room and the walkway
	return roomArea - walkArea
};
