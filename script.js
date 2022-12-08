let container = document.querySelector('.container');

const side = 16;
let counter = 0;
for (let row = 0; row < side; row++) {
    let rowBox = document.createElement('div');
    rowBox.classList.add('row')
    for (let col = 0; col < side; col++) {
        let box = document.createElement('div');
        box.classList.add('box')
        box.setAttribute('id', counter++)
        rowBox.appendChild(box)
    }
    container.appendChild(rowBox)
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        e.target.classList.add('marked')
    });
});