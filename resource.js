"use strict"

class Tuple {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class gameBoard{
  constructor(objects, centerObjIndex, canvas){//array of objects
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.objects = objects;
    this.centerOn = centerObjIndex;
  }
  
  draw(){
    this.context.fillStyle = "#2F4F4F";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    var cObj = this.objects[this.centerOn];
    for(var i=0;i < this.objects.length;i++){
      this.objects[i].draw(
        new Tuple(
          -unit*(cObj.point.x+cObj.size.x/2) + this.canvas.width/2,
          -unit*(cObj.point.y+cObj.size.y/2) + this.canvas.height/2
        ),
        this.context
      );
    }
  }
}

class boardObject{
  constructor(point, size, drawFunction){//Tuple, image, function taking a context
    this.point = point;
    this.size = size;
    this.draw = drawFunction;
  }
}
