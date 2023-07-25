let container = document.querySelector('.container');
const areaButton = document.getElementById('areaButton');
const gridCheckBox = document.getElementById('setGrid');
const colorPicker = document.getElementById('color');
const eraserCheckbox = document.getElementById('setEraser');
const clearButton = document.getElementById('clear')

let mouseDown = false;
areaButton.addEventListener('click', setArea);
gridCheckBox.addEventListener('change',() =>{
    setGrid();
});
eraserCheckbox.addEventListener('change',e => {
    if(e.target.checked == true){
        setEraser();
    }else{
        colorPicker.value = 'black';
    }
});
clearButton.addEventListener('click',clearGrid);

defaultSize();

function setArea(){
    let area = parseInt(document.getElementById('area').value);
    if(area > 0 && area <= 100 ){
        container.innerHTML = '';
        for(let x=0; x < area; x++){
            let row = document.createElement('div');
            row.classList.add('row');
            for(let y=0;y< area;y++){
                let div = document.createElement('div');
                div.classList.add('grid');
                row.appendChild(div);
                container.appendChild(row);
            }
        }
        refreshGridListeners();
    }else{
        alert('Only 1-100 squares is allowed');
    }

    setToDefault();
    
}

function setGrid(){
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.classList.toggle('hasGrid');
    });
}

function setEraser(){
    colorPicker.value = '#FFFFFF'
}

function clearGrid(){
    container.innerHTML = '';
    defaultSize();
    setToDefault();
}

function setToDefault(){
    document.getElementById('area').value = '';
    gridCheckBox.checked = false;
}

function refreshGridListeners(){
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        grid.addEventListener('mouseover', e => {
            if (mouseDown) {
                if (e.target.className === 'grid' || e.target.className === 'grid hasGrid') {
                    e.target.style.backgroundColor = colorPicker.value;
                }
            }
        });
    });
}


function defaultSize(){
    for(let x=0; x < 16; x++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let y=0;y< 16;y++){
            let div = document.createElement('div');
            div.classList.add('grid');
            row.appendChild(div);
            container.appendChild(row);
        }
    }

    refreshGridListeners();
}

    
window.addEventListener('mousedown', () => {
    mouseDown = true;
});

window.addEventListener('mouseup', () => {
    mouseDown = false;
});