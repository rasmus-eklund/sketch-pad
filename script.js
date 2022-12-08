

drawCanvas(64, 400);
const reset = document.querySelector('.reset')
const resolution = document.querySelector('.resolution')
const select = document.querySelector('select')
reset.onclick = () => resetCanvas();
resolution.onclick = () => drawCanvas(prompt("Please enter desired resolution", 64), 400)
select.addEventListener('change', () => {

});

function drawCanvas(res, size) {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    boxSize = (size / res).toFixed(0);
    let counter = 0;
    for (let row = 0; row < res; row++) {
        let rowBox = document.createElement('div');
        rowBox.classList.add('row');
        for (let col = 0; col < res; col++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('id', counter++);
            box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: rgb(255,255,255)`;
            rowBox.appendChild(box);
        }
        container.appendChild(rowBox);
    }
    addBoxEvents();
}

function addBoxEvents() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) {
                const option = select.options[select.selectedIndex].value;
                const color = e.target.style.backgroundColor;
                e.target.style.backgroundColor = setColor(option, color);
            }
        });
    });
}

function resetCanvas() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'rgb(255,255,255)'
    })
}

function setColor(option, current) {
    let out;
    if (option === 'black') {
        out = 'rgb(0,0,0)';
    } else if (option === 'random') {
        out = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    } else if (option === 'tenPercent') {
        current = parseInt(current.match(/(\d{1,3})\)/)[1])
        newColor = Math.max(1, Math.min(parseInt(current - 25), 255))
        out = `rgb(${newColor}, ${newColor}, ${newColor})`
    }
    return out;
}

let randomNumber = () => Math.floor(Math.random() * 255);