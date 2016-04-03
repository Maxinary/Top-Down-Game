"use strict"
var c = document.getElementById("game");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var player = new boardObject(new Tuple(0,0), new Tuple(80,80), rect);
player.color = "#FF0000";

var box = new boardObject(new Tuple(-30,-30), new Tuple(500,500), rect);
box.color = "#0000FF";

var a = new gameBoard([box, player], 0, c);
registerKeyPress(buttonMove.hold, 87, function(){player.point.y-=2;a.draw();});
registerKeyPress(buttonMove.hold, 83, function(){player.point.y+=2;a.draw();});
registerKeyPress(buttonMove.hold, 65, function(){player.point.x-=2;a.draw();});
registerKeyPress(buttonMove.hold, 68, function(){player.point.x+=2;a.draw();});
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