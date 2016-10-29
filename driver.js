"use strict"
var unit;
var c = document.getElementById("game");
function reloadRes(){
  c.width = document.body.clientWidth;
  c.height = document.body.clientHeight;
  if(c.width>c.height){
    unit = c.height/256;
  }else{
    unit = c.width/256;
  }
}



window.onload = function(){
  reloadRes();
  window.addEventListener("resize", reloadRes);

  var player = new boardObject(new Tuple(0,0), new Tuple(32,32), trig);
  player.color = "#FF0000";
  
  var box = new boardObject(new Tuple(0,0), new Tuple(128,128), rect);
  box.color = "#0000FF";
  
  var a = new gameBoard([box, player], 1, c);
  var playerMove = function(a){
    player.point.y+=a*Math.sin(player.angle);
    player.point.x+=a*Math.cos(player.angle);  
  }
  registerKeyPress(buttonMove.hold, 38, function(){playerMove(1);a.draw();});
  registerKeyPress(buttonMove.hold, 40, function(){playerMove(-1);a.draw();});
  registerKeyPress(buttonMove.hold, 37, function(){player.angle -= 0.02;a.draw();});
  registerKeyPress(buttonMove.hold, 39, function(){player.angle += 0.02;a.draw();});
  
  function totalLoop(){
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
    requestAnimationFrame(totalLoop);
  }
  
  requestAnimationFrame(totalLoop);
};