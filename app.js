// create canvas element
let canvas = document.createElement("CANVAS");

// set width and height of the canvas
canvas.height = 400;
canvas.width = 400;


document.body.appendChild(canvas);

// get the canvas context
let ctx = canvas.getContext("2d");

// define the size of the grid
const GRID_WIDTH = 50;
const GRID_HEIGHT = 50;

//define the size of cells
const CELL_SIZE = 10;

//define the delay
const DELAY_TIME = 1;

let grid = [];

grid = makeGrid(GRID_WIDTH, GRID_HEIGHT);

fillTheGrid(grid);


// the function takes a delay number and canvas context object as agruments
// and draws cells on the canvas
function draw() {

    setTimeout(() => {

    ctx.clearRect(0,0, canvas.width, canvas.height)

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            let x = i * CELL_SIZE;
            let y = j * CELL_SIZE;

            // fill the cell with black colour
            if(grid[i][j] == 1) {
                ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
            }
        }
    }
    grid = updateGrid(grid);
    requestAnimationFrame(draw);

    }, DELAY_TIME)
}

draw();




