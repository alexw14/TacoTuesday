// Destructuring modules from Matter.js
const { Engine, Render, Runner, World, Bodies, Body } = Matter;

// Environment variables
const root = document.querySelector('#root');
const width = 375;
const height = 667;

// Create engine
const engine = Engine.create();
const world = engine.world;
// Define gravity in engine
world.gravity.y = 0.5;

// Create renderer
const render = Render.create({
  element: root,  // reference to where the canvas is to be inserted
  engine: engine, // reference to the engine to be used
  options: {
    width,
    height,
    wireframes: false,
    background: '#FDBA21'
  }
});

// Continuously updates the render canvas
Render.run(render);

// Create runner
const runner = Runner.create();
Runner.run(runner, engine);

// Left and Right Border
const leftBorder = Bodies.rectangle(0, height / 2, 1, height, { isStatic: true });
const rightBorder = Bodies.rectangle(width, height / 2, 1, height, { isStatic: true });
World.add(world, leftBorder);
World.add(world, rightBorder);

// Bottom Wall
const bottomBorder = Bodies.rectangle(width / 2, height, width, 50, {
  isStatic: true,
  render: {
    fillStyle: 'transparent'
  }
});
World.add(world, bottomBorder);

// Health Bar
const healthBar = Array(4).fill(true);
healthBar.forEach((h, i) => {
  const heart = Bodies.circle(
    10 + i * 25,
    10,
    10,
    {
      isStatic: true,
      render: {
        sprite: {
          texture: './images/svg/Health.svg',
          xScale: 0.1,
          yScale: 0.1
        }
      }
    }
  );
  World.add(world, heart);
});

// Lebron Head Slider
const slider = Bodies.rectangle(
  width / 2,
  height / 2,
  50,
  50,
  {
    isStatic: false,
    inertia: Infinity,
    render: {
      sprite: {
        texture: './images/Lebron_Head_Default.png',
        xScale: 0.15,
        yScale: 0.15
      }
    }
  }
);
World.add(world, slider);

document.addEventListener('keydown', (event) => {
  const { x, y } = slider.velocity;
  if (event.keyCode === 37) {
    Body.setVelocity(slider, { x: x - 5, y });
  }
  if (event.keyCode === 39) {
    Body.setVelocity(slider, { x: x + 5, y });
  }
});


/*
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
*/
