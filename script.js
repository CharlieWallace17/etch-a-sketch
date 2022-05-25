const container = document.querySelector('.container');

gridSize = 16;
gridDivs = Math.pow(gridSize, 2);

for ( let i = 0; i < gridDivs; i++) {
    const div = document.createElement('div');
    
    div.classList.add('blank');
    
    div.setAttribute('style', `width: ${400 / gridSize}px; height: ${400 / gridSize}px`);
   
    container.setAttribute('style', `grid-template-rows: repeat(${gridSize}, ${400 / gridSize}px); grid-template-columns: repeat(${gridSize}, ${400 / gridSize}px);`);
    
    container.appendChild(div);
};