function spiralCopy(mat) {
  let startRow = 0;
  let endRow = mat.length;
  let startCol = 0;
  let endCol = mat[0].length;
  const res = [];

  while (startRow < endRow && startCol < endCol) {
      
    for (let i = startCol; i < endCol; i++) {
        res.push(mat[startRow][i]);
      }
      startRow ++;

    for (let i = startRow; i < endRow; i++) {
        res.push(mat[i][endCol-1])
    } 
      endCol -=1

    if (startRow<endRow) {
      for (let i = endCol-1; i >=0; i--) {
        res.push(mat[endCol-1][i])
      } 
      endRow-=1;
    }

    if (startCol < endCol) {
      for (let i = endRow - 1; i >=startRow; i--) {
        res.push(mat[i][startCol])
      } 
      startCol++          
    }
  } 
  
  res.pop()
  return res
}

const input  = [ 
[1,    2,   3,  4,    5],
[6,    7,   8,  9,   10],
[11,  12,  13,  14,  15],
[16,  17,  18,  19,  20]
];
console.log(spiralCopy(input))                       