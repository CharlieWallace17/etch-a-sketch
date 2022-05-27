const container = document.querySelector('.container');
const pix = document.querySelector('.pixels');
const clr = document.querySelector('.erase');
const rnbw = document.querySelector('.rainbow');

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
    document.querySelectorAll('.mark, .colors, .blank').forEach(item => {
            item.classList.add('blank');
            item.classList.remove('mark', 'colors');
            item.style.backgroundColor = 'white';
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

rnbw.addEventListener('click', () => {
    document.querySelectorAll('.blank', '.mark').forEach(item => {
        
        item.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColor;
            item.classList.add('colors');
            item.classList.remove('blank', 'mark');
            item.style.backgroundColor = "#" + randomColor;
        })
    })
});

clr.addEventListener('click', () => erase());