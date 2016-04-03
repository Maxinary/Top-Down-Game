"use strict"
var unit;
window.onload = function(){
  var c = document.getElementById("game");
  c.width = document.body.clientWidth;
  c.height = document.body.clientHeight;
  console.log(c.width,c.height);
  if(c.width>c.height){
    unit = c.height/256;
  }else{
    unit = c.width/256;
  }
  var player = new boardObject(new Tuple(0,0), new Tuple(64,64), rect);
  player.color = "#FF0000";
  
  var box = new boardObject(new Tuple(0,0), new Tuple(128,128), rect);
  box.color = "#0000FF";
  
  var a = new gameBoard([box, player], 0, c);
  registerKeyPress(buttonMove.hold, 38, function(){player.point.y-=2;a.draw();});
  registerKeyPress(buttonMove.hold, 40, function(){player.point.y+=2;a.draw();});
  registerKeyPress(buttonMove.hold, 37, function(){player.point.x-=2;a.draw();});
  registerKeyPress(buttonMove.hold, 39, function(){player.point.x+=2;a.draw();});
  setInterval(
    function(){
      for(var i in holdFunctions){
        if(holdFunctions[i]!==undefined){
          if(keys[i] === true){
            for(var j=0;j<holdFunctions[i].length;j++){
              holdFunctions[i][j]();
            }
          }
        }
      }
      a.draw();
    },
    10
  );
};
