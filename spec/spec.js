let updateGrid = function(arr) {

    let grid = Object.freeze(arr);

    // temporary grid
    let newGrid = JSON.parse(JSON.stringify(grid));



    for(let i = 0; i < newGrid.length; i++) {
        for(let j = 0; j < newGrid[i].length; j++){
            if(i == 0 || i == newGrid.length - 1 || j == 0 || j == newGrid[i].length - 1 ) {
                newGrid[i][j] = 0;
            } else {

                // get the number of neghbours
                let neighbours = countNeighbours(grid, i, j);

                console.log(grid);
                console.log('grid');
                console.log(newGrid);
                console.log('new');


                // make a cell alive if it has exactly 3 neighbours
                if(grid[i][j] === 0 && neighbours === 3) {
                    newGrid[i][j] = 1;
                    }

                // make a living cell dead if it has more than 3 neighbours
                // or less than 3 neighbours
                else if(grid[i][j] === 1 && (neighbours > 3 || neighbours < 2)){
                    newGrid[i][j] = 0;
                }
            }
        }
    }

    return newGrid;
}

//returns the count of 8 neighbouring cells


let countNeighbours = function(grid, x, y) {

    let count = 0;

    // count += grid[x - 1][y - 1];
    // count += grid[x][y - 1];
    // count += grid[x + 1][y - 1];
    // count += grid[x - 1][y];
    // count += grid[x + 1][y];
    // count += grid[x - 1][y + 1];
    // count += grid[x ][y + 1];
    // count += grid[x + 1][y + 1];


    for(let i = -1; i < 2; i++){
        for(let j =  -1; j < 2; j++){
            count = count + grid[x + i][y +j];
        }
    }
    // do not include self as a neighbour
    count = count - grid[x][y];

    return count;

}




describe("A suite", function() {
  it("contains spec with an expectation", function() {


    let arr =[
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    expect(countNeighbours(arr, 4,2)).toBe(3);
  });
});






describe("A suite", function() {
  it("contains spec with an expectation", function() {


    let beforeArr =[
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let afterArr =[
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];



    beforeArr = updateGrid(beforeArr);



    expect(JSON.stringify(beforeArr) == JSON.stringify(afterArr)).toBe(true);
  });
});