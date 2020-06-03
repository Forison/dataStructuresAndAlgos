function point(x,y) {
  return {x,y}
}
// This function should return the closest point to "pos" that is inside the polygon defined by "poly" 
function getClosestPointInsidePolygon(poly, pos){
  graphEmulator();
  coordPlotter(poly,pos);
  allX(poly);
  allY(poly);
  console.log(detLocOfPos(poly, pos));
}
  
//This should also work with shapes more complex than a square.  
// example output:
getClosestPointInsidePolygon(
    [ { x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 } ],
     { x: -150, y: 5 }
);
// example output: 
//should return { x: 100, y: 50 }

function graphEmulator(){
  const graphSheet = new Array(350);
  for (let index = 0; index <= 350; index++) {
    graphSheet[index]= new Array(350);
  }
  for (let i = 0; i < graphSheet.length; i++) {
    for (let j = 0; j < graphSheet.length; j++) {
      graphSheet[i][j]=`${i},${j}`;
    }
  }
  return graphSheet;
}


function coordPlotter(poly=[], pos){
 poly.push(pos);
 const sheet = graphEmulator();
 for (let i = 0; i < poly.length; i++) {
   let coordX = poly[i].x;
   let coordY = poly[i].y;
   sheet[coordX][coordY]='X';
 }
 return sheet
}

function allX(poly){
  const allX=[];
  for (let i= 0; i < poly.length; i++) {
    allX.push(poly[i].x);
  }
  return allX;
}

function allY(poly){
  const allY = []
  for (let i = 0; i < poly.length; i++) {
    allY.push(poly[i].y);
  }
  return allY;
}

function detLocOfPos(poly, pos){
  const xAxis = allX(poly);
  const yAxis = allY(poly);
  const maxX = Math.max(...xAxis);
  const minX = Math.min(...xAxis);
  const maxY = Math.max(...yAxis);
  const minY = Math.min(...yAxis);
  if (minX <= pos.x <= maxX && maxY <= pos.y) {
    return "top";
  } else if(maxX <= pos.x && minY <= pos.y <= maxY) {
    return "right";
  } else if(minX <= pos.x <= maxX && minY >= pos.y) {
    return "bottom";
  } else if(pos.x <= minX && minY<=pos.y<=maxY) {
    return "left";
  } else if(pos.x < minX && pos.y > maxY) {
    return "topLeft";
  } else if(pos.x > maxX && pos.y > maxY) {
    return "topRight";
  } else if(pos.x > maxX && pos.y < maxY) {
    return "bottomRight";
  } else if(pos.x < minX && pos.y < maxY) {
    return "bottomLeft";
  }else{
    return "undefined location";
  }
}