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

  var player = new boardObject(new Tuple(0,0), new Tuple(32,32), rect);
  player.color = "#FF0000";
  
  var box = new boardObject(new Tuple(0,0), new Tuple(128,128), rect);
  box.color = "#0000FF";
  
  var a = new gameBoard([box, player], 0, c);
  registerKeyPress(buttonMove.hold, 38, function(){player.point.y-=unit/2;a.draw();});
  registerKeyPress(buttonMove.hold, 40, function(){player.point.y+=unit/2;a.draw();});
  registerKeyPress(buttonMove.hold, 37, function(){player.point.x-=unit/2;a.draw();});
  registerKeyPress(buttonMove.hold, 39, function(){player.point.x+=unit/2;a.draw();});
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
