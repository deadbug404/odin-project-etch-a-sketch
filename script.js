let container = document.querySelector('.container');
let grid = 16;

//creates the grid
function createGrid(size){
    for(let i =1; i<= size;i++){
        let strip = document.createElement('div');
        strip.classList.add('strip');
        container.appendChild(strip);
        for(let j = 1; j <= size;j++){
            let div = document.createElement('div');
            div.classList.add('grid');
            strip.appendChild(div);
        }
    }
}

//sets a listener to change the color a specific grid
function setGridListeners(){
    let grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', function (event){
        grid.classList.add('active');
    });
});
}

//change the grid 
function setGrid(){
    container.textContent = '';
    let gridByUser = document.getElementById('gridByUser').value;
    createGrid(gridByUser);
    setGridListeners();
}

createGrid(grid);
setGridListeners();
