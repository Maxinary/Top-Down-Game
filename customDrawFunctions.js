//used in other methods
function getColor(a){
  if(a.color!==undefined){
    return a.color;
  }else{
    return "#FFFFFF";
  }
}

function dist(x1,y1,x2,y2){
  return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
}

//drawing methods start here
function rect(ctx){
  var t = ctx.fillStyle;
  ctx.fillRect(-this.size.x*unit/2,
               -this.size.y*unit/2,
               this.size.x*unit,
               this.size.y*unit
  );
  ctx.fillStyle = t;
}
