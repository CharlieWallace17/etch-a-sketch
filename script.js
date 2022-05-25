const container = document.querySelector('.container');

contSize = 400;
gridLength = 16;
numSquares = Math.pow(gridLength, 2);

for ( let i = 0; i < numSquares; i++) {
    const div = document.createElement('div');
    
    div.classList.add('blank');
    
    div.setAttribute('style', `width: ${contSize / gridLength}px; height: ${contSize / gridLength}px`);
   
    container.setAttribute('style', `grid-template-rows: repeat(${gridLength}, ${contSize / gridLength}px); grid-template-columns: repeat(${gridLength}, ${contSize / gridLength}px);`);
    
    container.appendChild(div);
};

document.querySelectorAll('.blank').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('mark');
        item.classList.remove('blank');
    })
})