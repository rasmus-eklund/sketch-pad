

drawCanvas(64, 400);
const reset = document.querySelector('.reset')
const resolution = document.querySelector('.resolution')
reset.onclick = () => resetCanvas();
resolution.onclick = () => drawCanvas(prompt("Please enter desired resolution", 64), 400)


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
            box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px`;
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
            e.target.classList.add('marked');
        });
    });
}

function resetCanvas() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.classList.remove('marked');
    })
}