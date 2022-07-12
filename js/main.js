// GRID DESIGNER

// Global Constants
const NUM_ROWS = 10;
const NUM_COLS = 10;

// Create array to represent a grid
let temp = createEmptyArray();
randomizeArray(temp)
let grid = temp;



// Create divs to model the grid array
createDivGrid(grid);

function loop() {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            if (grid[row][col] === 0) {
                document.getElementById(`div${row}-${col}`).classList.add("red");
            } else if (grid[row][col] === 1) {
                document.getElementById(`div${row}-${col}`).classList.add("orange");
            } else if (grid[row][col] === 2) {
                document.getElementById(`div${row}-${col}`).classList.add("yellow");
            } else if (grid[row][col] === 3) {
                document.getElementById(`div${row}-${col}`).classList.add("green");
            } else if (grid[row][col] === 4) {
                document.getElementById(`div${row}-${col}`).classList.add("blue");
            } else if (grid[row][col] === 5) {
                document.getElementById(`div${row}-${col}`).classList.add("purple");
            }
        }
    }  
}

setInterval(loop, 1000);



