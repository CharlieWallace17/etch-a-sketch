const container = document.querySelector('.container');
const pix = document.querySelector('.pixels');
const clr = document.querySelector('.erase');

let contSize = 400;
let gridLength = 16;
let numSquares = Math.pow(gridLength, 2);

function render() {
    removeAllChildNodes(container);
    for ( let i = 0; i < numSquares; i++) {
        const div = document.createElement('div');
        
        div.classList.add('blank');
        div.setAttribute('style', `width: ${contSize / gridLength}px; height: ${contSize / gridLength}px`);
    
        container.setAttribute('style', `grid-template-rows: repeat(${gridLength}, ${contSize / gridLength}px); grid-template-columns: repeat(${gridLength}, ${contSize / gridLength}px);`);
        container.appendChild(div);
}};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function erase() {
    document.querySelectorAll('.mark').forEach(item => {
            item.classList.add('blank');
            item.classList.remove('mark');
    })
}

pix.addEventListener('click', () => {
    gridLength = parseInt(prompt('Enter a grid length!', 16));
    console.log(gridLength);

    if ( isNaN(gridLength) === true || gridLength < 0 || gridLength > 100) {
        alert('Invalid Entry.');
    } else {
    numSquares = Math.pow(gridLength, 2);
    render();

    document.querySelectorAll('.blank').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('mark');
            item.classList.remove('blank');
        })
    })
}})

render();
document.querySelectorAll('.blank').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('mark');
        item.classList.remove('blank');
    })
})

clr.addEventListener('click', () => erase());