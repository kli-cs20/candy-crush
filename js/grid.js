// GRID FUNCTIONS

function createEmptyArray() {
    // Create and return a grid array
    return [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ];
}

function createDivGrid(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2d array
            let divEl = document.createElement("div");

            // Add an id to each divEl
            divEl.id = "cell" + row  +  "-" + col;

            // Add appropriate class to each div element
            if (grid[row][col] === 0) {
                divEl.classList.add("red");
            } else if (grid[row][col] === 1) {
                divEl.classList.add("orange");
            } else if (grid[row][col] === 2) {
                divEl.classList.add("yellow");
            } else if (grid[row][col] === 3) {
                divEl.classList.add("green");
            } else if (grid[row][col] === 4) {
                divEl.classList.add("blue");
            } else if (grid[row][col] === 5) {
                divEl.classList.add("purple");
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col; 

            // Add Event Listener to each div element
            divEl.addEventListener("click", cellClicked);

            // Add div to container
            document.getElementById("container").append(divEl);
        }
    }
}

function cellClicked(e) {
    // Get row and col of the clicked cell
    let row = e.target.dataset.row;
    let col = e.target.dataset.col;

    console.log("clicked")

    grid[row][col] = 5;

}

function randomizeArray(grid) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            grid[row][col] = randomInt(0, 6);
        }
    }
}