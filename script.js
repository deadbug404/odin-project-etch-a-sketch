let container = document.querySelector('.container');
let gridStyle = document.getElementsByClassName('grid');
let colorPicker = document.getElementById('pcolor');
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
    if(gridByUser > 100  || gridByUser < 1){
        alert("Only enter a number ranging from 1-100");
    }else{
        createGrid(gridByUser);
        setGridListeners();
    }
}

//shows the grid or not
function showGrid(checkbox){
    if(checkbox.checked){
        for(let i = 0; i < gridStyle.length; i++){
            gridStyle[i].style.border = '1px solid black';
        }
    }else{
        for(let i = 0; i < gridStyle.length; i++){
            gridStyle[i].style.border = '';
        }
    }
}

//sets the color of the brush
function changeColor(event){
    let grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', function (){
        grid.setAttribute('style',`background-color: ${event.target.value};`);
        console.log(event.target.value);
    });
});
}

createGrid(grid);
setGridListeners();
colorPicker.addEventListener('input',changeColor);
colorPicker.select();
