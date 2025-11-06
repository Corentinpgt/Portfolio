const bg = document.querySelector('.bg');
const cellSize = 75; // px

function createGrid() {
    bg.innerHTML = '';
    const cols = Math.ceil(window.innerWidth / cellSize);
    const rows = Math.ceil(window.innerHeight / cellSize);
    bg.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    bg.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    
    for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement('div');
    cell.className = 'bg-cell';
    bg.appendChild(cell);
    }
}

createGrid();
window.addEventListener('resize', createGrid);

// JS
const cells = Array.from(document.querySelectorAll('.bg-cell'));

function randomBreath() {
  const count = Math.floor(Math.random() * 3) + 1;
  const shuffled = cells.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  selected.forEach(cell => {
    if (cell.classList.contains('breathe')) return;

    const duration = 3 + Math.random() * 5;
    cell.style.animationDuration = `${duration}s`;
    cell.classList.add('breathe');

    setTimeout(() => {
      cell.classList.remove('breathe');
      cell.style.animationDuration = '';
    }, duration * 1000 + 50);
  });
}

setInterval(randomBreath, 2000);
