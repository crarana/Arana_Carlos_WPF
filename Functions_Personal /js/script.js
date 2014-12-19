// Name: Carlos Arana
// Date: 12/18/14
// Assignment: Functions
// Project: Functions Personal
// Student ID: #0004645079

//building an indoor garden

//my roomate and I are building an indoor garden to occupy an empty room in the house. We want the entire room to be a garden except for a walkway.
//The prompts will be gathered by the user to determine their indoor garden space

prompt("You will be converting an empty room in your house to an indoor garden. To do so, you must consider how much space wll be devoted to a walkway and how much space will be devoted to the garden area.");

var width=prompt("What is the width in feet of the room?");
var length=prompt("What is the length in feet of the room?");
var walkWidth=prompt("What is the width in feet of the intended walkway?");
var walkLength=prompt("What is the length in feet of the intended walkway?");

var roomArea = calculateRoom(length, width);
var walkArea = calculateWalk(walkWidth, walkLength);
var gardenArea = differenceArea(roomArea, walkArea);
console.log("If the room is" + " " + roomArea + " " + "square feet and the walkway area is" + " " + walkArea + " " + "square feet, then the garden can be" + " " + gardenArea + " " + "square feet.");
result("If the room is" + " " + roomArea + " " + "square feet and the walkway area is" + " " + walkArea + " " + "square feet, then the garden can be" + " " + gardenArea + " " + "square feet.");

function roomArea(width, length){
	return width*length
};
function walkArea(walkWidth, walkLength){
	return walkWidth*walkLength
};
function gardenArea(roomArea, walkArea){
	return roomArea - walkArea
};
