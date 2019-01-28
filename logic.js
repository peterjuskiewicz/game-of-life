

// fuction creates and returns 2 dimensional array
// takes 2 arguments width and height, throws an exception
// if arguments are not numbers
const makeGrid = function(width, height) {

    // throw an error if arguments are not numbers
    if (typeof(width) != 'number' || typeof(height) != 'number') {
        throw "Parameter is not a number!";
    }

    let arr = new Array(width);

    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(height);
    }

    return arr;

}


// takes a 2 dimensional array as an argument and
// fills it randomly with 1s and 0s
let fillGrid = function(grid) {

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {

            // all edges are filled with 0
            if(i == 0 || i == grid.length - 1 || j == 0 || j == grid[i].length - 1 ) {
                grid[i][j] = 0;
            } else {
                grid[i][j] = Math.round(Math.random());
            }

        }
    }
}

// function contains the logic of the game
// takes the 2 dimensional array as an argument and
// updates it depending on the neighboring cells
 let updateGrid = function(grid) {

    // create the copy of the grid
    let newGrid = JSON.parse(JSON.stringify(grid));

    for(let i = 0; i < newGrid.length; i++) {
        for(let j = 0; j < newGrid[i].length; j++){
            if(i == 0 || i == newGrid.length - 1 || j == 0 || j == newGrid[i].length - 1 ) {
                newGrid[i][j] = 0;
            } else {

                // get the number of neghbours
                let neighbours = countNeighbours(grid, i, j);
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

    for(let i = -1; i < 2; i++){
        for(let j =  -1; j < 2; j++){
            count = count + grid[x + i][y +j];
        }
    }
    // do not include self as a neighbour
    count = count - grid[x][y];

    return count;

}

// export 2 functions for testing
if(typeof(module) != 'undefined') {
    module.exports.countNeighbours = countNeighbours;
    module.exports.updateGrid = updateGrid;
}


