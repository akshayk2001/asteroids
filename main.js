var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var rectWidth = width/5;
var rectHeight = height/5;
var context = canvas.getContext('2d');


var x = 0;
var y = 0 - rectHeight;

var movementRate = 1;

function draw(){
  //call clearRect with the entire size of the canvas to clear
  // the whole thing

  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Drawing triangle with paths
  drawTriangle(context, x, y, rectWidth, rectHeight);
  drawTriangle(context, x * 2, y * 2, rectWidth, rectHeight);
  //Update x and y for the next draw operation
  y = y + movementRate;

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);



function drawTriangle(context, x, y, rectWidth, rectHeight){
  // Drawing triangle with paths
  context.strokeStyle = 'blue';
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + rectWidth, y);
  context.lineTo(x + rectWidth/2, y + rectHeight);
  context.closePath();
  context.stroke();

}
