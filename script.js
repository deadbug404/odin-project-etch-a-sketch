let container = document.querySelector('.container');

//creates the grid
for(let i =1; i<= 16;i++){
    let strip = document.createElement('div');
    strip.classList.add('strip');
    container.appendChild(strip);
    for(let j = 1; j <= 16;j++){
        let div = document.createElement('div');
        div.classList.add('grid');
        strip.appendChild(div);
    }
}

//hovering event