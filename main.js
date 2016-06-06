var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var rectWidth = width/20;
var rectHeight = height/40;
var context = canvas.getContext('2d');



var x = 450;
var y = 0;
var rotationDegrees = 0;
var xVector = 0;
var yVector = 0;

var movementRate = 2;
var rotationRate = 10;

var myRocket = new Rocket(
	context,
	rectWidth,
	rectHeight,
	rotationDegrees,
	rotationRate,
	xVector,
	yVector,
	movementRate,
	0,
	0,
	'red');

var secondRocket = new Rocket(
	context,
	50,
	50,
	180,
	20,
	1,
	yVector,
	10,
	450,
	0,
	'blue');

console.log('myRocket', myRocket);

function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);


	myRocket.draw();
	secondRocket.draw();





	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
