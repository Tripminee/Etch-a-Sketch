const container = document.querySelector(".container");
const gridInput = document.querySelector(".input");
const output = document.querySelector(".output");
const rainbow = document.querySelector(".rainbow")
const normalColor = document.querySelector(".normal")
let Drawing = false;
let mode = false;

container.addEventListener("mouseleave", stopDrawing); //can't drawing when move out the container.
gridInput.addEventListener("input", gridValue);

rainbow.addEventListener("click", () => {
    mode = true;
    trail(randomColor);
})

normalColor.addEventListener("click", () => {
    mode = false
})

function gridValue() {
    const value = gridInput.value;
    output.textContent = `${value} x ${value}`;
    createGrid(value, value);
}

function createGrid(value, value) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    for (let i = 0; i < value * value; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
        gridItem.addEventListener("mousedown", startDrawing);
        gridItem.addEventListener("mouseup", stopDrawing);
        gridItem.addEventListener("mouseover", trail);
        // grid.addEventListener("mouseleave", stopDrawing); conflict with logic, can't draw when move the cursor between grid-item!!??
    }
}

function randomColor() {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color;
    
}

function trail(e) {
    if (Drawing && mode) {
        // e.target.classList.add("trail");
        e.target.style.backgroundColor = randomColor();
    } else if (Drawing && mode === false) {
        e.target.style.backgroundColor = "rgb(255,0,0)";
    }
}

function startDrawing() {
    Drawing = true;
}

function stopDrawing() {
    Drawing = false;
}

createGrid(16,16);

// document.querySelector(".butt").addEventListener("click", () => {
//     const gridSize = prompt("put you number of grid you want:");
//     if (gridSize >= 16 || gridSize <= 100) {
//         createGrid(gridSize, gridSize)
//         startGame = true;
//     }
// }) this code is asking for how much grid that you want to create

// function toRgb(color) {
//     const noHashtax = color.replace("#", "");
//     const r = parseInt(noHashtax.substring(0, 2), 16);
//     const g = parseInt(noHashtax.substring(2, 4), 16);
//     const b = parseInt(noHashtax.substring(4, 6), 16);
//     return {r, g, b};
// }