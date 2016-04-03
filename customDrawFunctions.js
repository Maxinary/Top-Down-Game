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
  ctx.save();
  ctx.fillStyle = getColor(this);
  ctx.translate(point.x + this.point.x*unit + this.size.x*unit/2, 
    point.y + this.point.y*unit + this.size.y*unit/2);
  ctx.rotate(this.angle);
  ctx.fillRect(-this.size.x*unit/2,
               -this.size.y*unit/2,
               this.size.x*unit,
               this.size.y*unit
  );
  ctx.restore();
  ctx.fillStyle = t;
}
