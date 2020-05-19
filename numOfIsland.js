var numIslands = function(grid) {
    if (!grid) {
        return 0;
    } 
   let count = 0;
    for(let i = 0; i < grid.length; i += 1 ){
        for (j = 0; j < grid[0].length; j += 1 ){
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count += 1;
            }
        }
    }
    return count;
};

let dfs = function(grid, i, j){
    if (i < 0 || j < 0 || i >= grid.length || j >=grid[0].length || grid[i][j] !== '1') {
          return;
      }
    grid[i][j] = '#' ;
    dfs(grid, i+1, j);
    dfs(grid, i-1, j);
    dfs(grid, i, j+1);
    dfs(grid, i, j-1);
}