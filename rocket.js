class Rocket {
  constructor(
    context,
    width,
    height,
    rotationDegrees,
    rotationRate,
    xVector,
    yVector,
    movementRate,
    x,
    y,
    color) {
      // "this" refers to the instance of Rocket that I am currently working with
      // Add properties to "this" when each instance of the class should have that property
      this.context = context;
      this.width = width;
      this.height = height;
      this.rotationDegrees = rotationDegrees;
      this.rotationRate = rotationRate;
      this.xVector = xVector;
      this.yVector = yVector;
      this.movementRate = movementRate;
      this.x = x;
      this.y = y;
      this.color = color;

      window.addEventListener('keydown', event => this.handleKeydown(event));

    }

    handleKeydown(event){
      var rotationDegrees = this.rotationDegrees;
      var rotationRate = this.rotationRate;
      var movementRate = this.movementRate;
      var xVector = this.xVector;
      var yVector = this.yVector;

      console.log('this is where I describe the log: keydown event.which', event.which);

      // var rotationDegrees = this.rotationDegrees;

      switch(event.which){
        case 37:
        console.log('left');
        this.rotationDegrees = rotationDegrees - rotationRate;
        break;
        case 38:
        console.log('up');
        this.xVector = movementRate * Math.cos(rotationDegrees * Math.PI / 180);
        this.yVector = movementRate * Math.sin(rotationDegrees * Math.PI / 180);
        break;
        case 39:
        console.log('right');
        this.rotationDegrees = rotationDegrees + rotationRate;
        break;
        case 40:
        console.log('down');
        this.xVector = 0;
        this.yVector = 0;
        case 87:
        this.color = 'blue';
        break;
        case 65:
        this.color = 'green';
        break;
        case 83:
        this.color = 'purple';
        break;
        case 68:
        this.color = 'yellow';
        break;

        break;
        default:
      }
    }

    update(){
      this.x = this.x + this.xVector;
      this.y = this.y + this.yVector;
      x = x + xVector;
      y = y + yVector;
      if (rotationDegrees > 360){
        rotationDegrees = 0;
      }
    }
    draw(){
      this.update();

      var context = this.context;
      var x = this.x;
      var y = this.y;
      var width = this.width;
      var height = this.height;
      var rotationDegrees = this.rotationDegrees;

      context.save();

      var centerX = x + width/2;
      var centerY = y + height/2;

      context.translate(centerX, centerY); // Translate to center of rectangle

      // Convert degrees to radians, because context.rotate needs radians
      var radians = rotationDegrees * (Math.PI/180);
      context.rotate(radians);



      // Draw a triangle with paths
      context.strokeStyle = this.color;
      // Start a new path
      context.beginPath();


      var triangleOriginX = width/2;
      var triangleOriginY = height/2;
      // Now define the path with .moveTo() and .lineTo() methods
      context.moveTo(-triangleOriginX , -triangleOriginY);
      context.lineTo(-triangleOriginX  + width, -triangleOriginY + height/2);
      context.lineTo(-triangleOriginX, -triangleOriginY + height);

      context.closePath();

      // The path is only made visible when we call .stroke()
      context.stroke();

      context.restore();

      x = x + xVector;
      y = y + yVector;

      if (rotationDegrees > 360){
        rotationDegrees = 0;
      }
    }
  }
