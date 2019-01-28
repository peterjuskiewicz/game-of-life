
// create canvas elements with height 400 and width 400
var canvas = document.createElement("CANVAS");
canvas.height = 400;
canvas.width = 400;

document.body.appendChild(canvas);


// get the canvas context
let ctx = canvas.getContext("2d");



// define the size of the grid

let gridWidth = 50;
let gridHeight = 50;

//define the size of cells

let resolution = 10;

let grid = [];


grid = makeGrid(gridWidth, gridHeight);

fillTheGrid(grid);



function draw() {

    setTimeout(() => {

        console.log('drawing');

    ctx.clearRect(0,0, canvas.width, canvas.height)

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            let x = i * resolution;
            let y = j * resolution;

            if(grid[i][j] == 1) {
                ctx.fillRect(x, y, resolution, resolution);

            }
        }
    }
    grid = updateGrid(grid);
    requestAnimationFrame(draw);



    }, 1)



}

draw();




