const root = document.querySelector('#root');
const gameArea = document.createElement('div');
gameArea.innerHTML = `
  <div class="app-container">
    <div class="game-container">
      <div class="hearts-container"></div>
      <div class="game-area-container"></div>
      <div class="game-slider-container"></div>
    </div>
  </div>
`;
root.appendChild(gameArea);

const heartsContainer = document.querySelector('.hearts-container');
const healthBar = Array(4).fill(true);
healthBar.forEach((elem) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heartsContainer.appendChild(heart);
});

const gameSliderContainer = document.querySelector('.game-slider-container');
const slider = document.createElement('div');
slider.classList.add('lebron-head-slider');
slider.style.transform = 'translate(0px, 0px)';
gameSliderContainer.appendChild(slider);

const gameAreaContainer = document.querySelector('.game-area-container');

// Event Listener for Key Presses
document.addEventListener('keydown', (event) => {
  // Left Key
  if (event.keyCode === 37) {
    moveSlider(slider, 10, 'left');
  }
  // Right Key
  if (event.keyCode === 39) {
    moveSlider(slider, 10, 'right');
  }
});

const fallingItems = ['taco', 'heart', 'bball', 'trophy'];
// randomizeArray(fallingItems);

const makeFalling = (element) => {
  setInterval(() => {
    moveDown(element, 1);
  }, 10)
}

const generateFallingPiece = () => {
  const randomX = Math.random() * 375;
  const fallingObj = document.createElement('div');
  fallingObj.classList.add(fallingItems[Math.floor(Math.random() * fallingItems.length)], 'game-piece');
  fallingObj.style.transform = `translate(${randomX}px, 0px)`;
  gameAreaContainer.appendChild(fallingObj);
  makeFalling(fallingObj);
}

let timerId;
const startGame = () => {
  timerId = setInterval(() => {
    const randomNum = Math.random() * 10000;
    setTimeout(() => {
      generateFallingPiece();
    }, randomNum);
  }, 1000);
}

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
  startGame();
});

const stopbtn = document.querySelector('#stop-btn');
stopbtn.addEventListener('click', () => {
  clearInterval(timerId);
});
