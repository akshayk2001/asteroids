var width = 500;
var height = 500;
var canvas = document.getElementById('asteroids');
canvas.width = width;
canvas.height = height;
var rectWidth = width/5;
var rectHeight = height/5;
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

    var movementRate = 1;

    function draw(){
      //call clearRect with the entire size of the canvas to clear
      // the whole thing

      context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, width, height);

      // Drawing triangle with paths
      drawTriangle(context, x, y, rectWidth, rectHeight);
      //Update x and y for the next draw operation


      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);



    function drawTriangle(context, x, y, rectWidth, rectHeight){
      // Drawing triangle with paths
      context.strokeStyle = 'blue';
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + rectWidth, y + rectHeight/2);
      context.lineTo(x, y + rectHeight);
      context.closePath();
      context.stroke();
      context.translate(width/2 - rectWidth/2, height/2 - rectHeight/2);
      context.rotate(45);

}
