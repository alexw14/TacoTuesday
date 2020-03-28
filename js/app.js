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

const heartIconPath = './images/svg/Health.svg';
const lebronSliderIconPath = './images/Lebron_Head_Default.png'

const heartsContainer = document.querySelector('.hearts-container');
const healthBar = Array(4).fill(true);
healthBar.forEach((elem) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = `<img src="${heartIconPath}" />`
  heartsContainer.appendChild(heart);
});

const gameSliderContainer = document.querySelector('.game-slider-container');
const slider = document.createElement('div');
slider.classList.add('lebron-head-slider');
slider.style.left = '0px';
slider.innerHTML = `<img src="${lebronSliderIconPath}"/>`;
gameSliderContainer.appendChild(slider);

document.addEventListener('keydown', (event) => {
  // Left Key
  if (event.keyCode === 37) {
    moveLeft(slider, 10);
  }
  // Right Key
  if (event.keyCode === 39) {
    moveRight(slider, 10);
  }
});

const moveLeft = (element, amount) => {
  let current = element.style.left;
  current = parseInt(current.slice(0, -2));
  if (current > -140) {
    element.style.left = `${current - amount}px`;
  }
}

const moveRight = (element, amount) => {
  let current = element.style.left;
  current = parseInt(current.slice(0, -2));
  if (current < 140) {
    element.style.left = `${current + amount}px`
  }
}