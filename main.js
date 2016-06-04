var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var rectWidth = width/5;
var rectHeight = height/10;
var context = canvas.getContext('2d');


// var x = 0;
// var y = height/2 - rectHeight/2;
//
// var movementRate = 1;
//
// function draw(){
//   //call clearRect with the entire size of the canvas to clear
//   // the whole thing
//
//   context.fillStyle = "rgb(0, 0, 0)";
//   context.fillRect(0, 0, width, height);
//
//   // Drawing triangle with paths
//   drawTriangle(context, x, y, rectWidth, rectHeight);
//   //Update x and y for the next draw operation
//
//   x = x + movementRate;
//
//
//   window.requestAnimationFrame(draw);
// }
// window.requestAnimationFrame(draw);
//
//
//
// function drawTriangle(context, x, y, rectWidth, rectHeight){
//   // Drawing triangle with paths
//   context.strokeStyle = 'blue';
//   context.beginPath();
//   context.moveTo(x, y);
//   context.lineTo(x + rectWidth, y + rectHeight/2);
//   context.lineTo(x, y + rectHeight);
//   context.closePath();
//   context.stroke();
//


    // context.strokeStyle = 'blue';
    // context.beginPath();
    // context.moveTo(x + rectWidth/2, y);
    // context.lineTo(x + rectWidth, y + rectHeight);
    // context.lineTo(x, y + rectHeight/2);
    // context.closePath();
    // context.stroke();


var x = 0;
var y = 0;
var rotationDegrees = 0;
var xVector = 0;
var yVector = 0;

var movementRate = 2;
var rotationRate = 10;

function draw(){
	// call clearRect with the entire size of the canvas to clear the whole thing
	// Fill the whole canvas with a black rectangle
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect(0, 0, width, height);

	x = x + xVector;
	y = y + yVector;

	drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees);

	// Update x and y for the next draw operation
	// y = y + movementRate;
	// x = x + movementRate;
	// x = x + movementRate;
	// rotationDegrees = rotationDegrees + rotationRate;

	if (rotationDegrees > 360){
		rotationDegrees = 0;
	}

	window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

window.addEventListener('keydown', function(event) {
	console.log('this is where I describe the log: keydown event.which', event.which);


	switch(event.which){
		case 37:
		console.log('left');
		rotationDegrees = rotationDegrees - rotationRate;
		break;
		case 38:
		console.log('up');
		xVector = movementRate * Math.cos(rotationDegrees * Math.PI / 180);
		yVector = movementRate * Math.sin(rotationDegrees * Math.PI / 180);
		break;
		case 39:
		console.log('right');
		rotationDegrees = rotationDegrees + rotationRate;
		break;
		case 40:
		console.log('down');
		xVector = 0;
		yVector = 0;
		break;
		default:
	}
});



function drawTriangle(context, x, y, rectWidth, rectHeight, rotationDegrees){
	context.save();

	var centerX = x + rectWidth/2;
	var centerY = y + rectHeight/2;

	context.translate(centerX, centerY); // Translate to center of rectangle
	// console.log('context.translate(centerX, centerY)', centerX, centerY);
	//
	// context.strokeStyle = "white";
	// context.strokeRect(0, 0, width, height);
	//
	// Convert degrees to radians, because context.rotate needs radians
	var radians = rotationDegrees * (Math.PI/180);
	context.rotate(radians);
	// console.log('rotationDegrees', rotationDegrees);
	// console.log('context.rotate(radians)', radians);

	// context.strokeStyle = "yellow";
	// context.strokeRect(0, 0, width, height);



	// Draw a triangle with paths
	context.strokeStyle = 'red';
	// Start a new path
	context.beginPath();


	var triangleOriginX = rectWidth/2;
	var triangleOriginY = rectHeight/2;
	// Now define the path with .moveTo() and .lineTo() methods
	context.moveTo(-triangleOriginX , -triangleOriginY);
	context.lineTo(-triangleOriginX  + rectWidth, -triangleOriginY + rectHeight/2);
	context.lineTo(-triangleOriginX, -triangleOriginY + rectHeight);

	context.closePath();

	// The path is only made visible when we call .stroke()
	context.stroke();

	context.restore();
}


//     function drawTriangle(context, x, y, rectWidth, rectHeight){
//       // Drawing triangle with paths
//       context.strokeStyle = 'blue';
//       context.beginPath();
//       context.moveTo(x, y);
//       context.lineTo(x + rectWidth, y + rectHeight/2);
//       context.lineTo(x, y + rectHeight);
//       context.closePath();
//       context.stroke();
//
// }
