
let container = document.querySelector("#container");

function createGrid(dim) {
    container.replaceChildren();    
    for ( let i = 0; i < dim; i++) {
        for ( let j = 0; j < dim; j++) {            
            let divGridCell = document.createElement("div");
            divGridCell.classList.add("cell");
            divGridCell.id = (1 + i) + "x" + (1 + j);
            let size = 960 / dim;
            divGridCell.style.width = size + `px`;
            divGridCell.style.height = size + `px`;
            container.appendChild(divGridCell);
        }
    }
}

createGrid(4);

container.addEventListener("mouseover", (event) => {
    event.srcElement.classList.add('highlight');
});

let btnNewGrid = document.querySelector("#makeGrid");
btnNewGrid.addEventListener("click", (event) => {
    let dim = prompt("Enter the number of cells per side of the grid:", 4);
    if ( dim > 100 ) {
        dim = 100
    }
    createGrid(dim);
});