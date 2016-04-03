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
function rect(point, ctx){
  var t = ctx.fillStyle;
  ctx.fillStyle = getColor(this);
  ctx.fillRect(point.x + this.point.x,
               point.y + this.point.y,
               this.size.x,
               this.size.y
  );
  ctx.fillStyle = t;
}
