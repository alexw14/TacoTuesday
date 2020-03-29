const app = document.querySelector('#app');
app.innerHTML = `
  <div id="welcome-container"></div>
  <div id="game-container" class="hidden">
    <div id="hearts-container"></div>
    <div id="score-container"></div>
    <div id="game-area"></div>
  </div>
  <div class="gameover hidden"></div>
`;

// Destructuring modules from Matter.js
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

// Environment 
const gameContainer = document.querySelector('#game-container');
const gameArea = document.querySelector('#game-area');
const width = 375;
const height = 667;
const startingLives = 4;
let lives = 4;
let points = 0;
const state = {
  lives: 4,
  points: 0,
  timerId: null
};

// Create engine
const engine = Engine.create();
const world = engine.world;
// Define gravity in engine
world.gravity.y = 1;

// Create renderer
const render = Render.create({
  element: gameArea,  // reference to where the canvas is to be inserted
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

// Left, Right, Bottom Border
const borders = [
  // left border
  Bodies.rectangle(0, height / 2, 1, height, { label: 'border', isStatic: true, render: { fillStyle: 'transparent' } }),
  // right border
  Bodies.rectangle(width, height / 2, 1, height, { label: 'border', isStatic: true, render: { fillStyle: 'transparent' } }),
  // bottom border
  Bodies.rectangle(width / 2, height, width, 50, { label: 'border', isStatic: true, render: { fillStyle: 'transparent' } })
]
World.add(world, borders);

// Lebron Head Slider
const slider = Bodies.rectangle(width / 2, height - 200, 50, 50, {
  label: 'lebron-head',
  isStatic: false,
  inertia: Infinity,
  render: {
    sprite: {
      texture: getIconFilePath('lebron-head'),
      xScale: 0.15,
      yScale: 0.15
    }
  }
});
World.add(world, slider);

// Hearts Display
const heartsContainer = document.querySelector('#hearts-container');
for (let i = 0; i < startingLives; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart', `heart-${i}`);
  heartsContainer.appendChild(heart);
}

// Welcome Page
const welcomeContainer = document.querySelector('#welcome-container');
welcomeContainer.innerHTML = `
  <div class="tacos"></div>
  <div class="taco-text"></div>
  <div class="lebron-welcome-head"></div>
  <div class="tuesday-text"></div>
  <div class="start-game-btn"></div>
`;

// Tacos on Landing Page
const welcomeTacosSection = document.querySelector('#welcome-container .tacos');
tacosProps.forEach((t) => {
  const taco = document.createElement('div');
  taco.classList.add('taco');
  taco.style.transform = `translate(${t.x}, ${t.y}) rotate(${t.angle})`;
  const tacoImg = document.createElement('img');
  tacoImg.setAttribute('src', getIconFilePath('taco-landing-page'));
  tacoImg.setAttribute('width', t.width);
  tacoImg.setAttribute('height', t.height);
  tacoImg.setAttribute('alt', 'taco');
  taco.appendChild(tacoImg);
  welcomeTacosSection.appendChild(taco);
});

// Taco Text
const tacoText = document.querySelector('.taco-text');
const tacoTextImg = document.createElement('img');
tacoTextImg.setAttribute('src', getIconFilePath('taco-text'));
tacoTextImg.setAttribute('alt', 'taco');
tacoText.appendChild(tacoTextImg);

// Tuesday Text
const tuesdayText = document.querySelector('.tuesday-text');
const tuesdayTextImg = document.createElement('img');
tuesdayTextImg.setAttribute('src', getIconFilePath('tuesday-text'));
tuesdayTextImg.setAttribute('alt', 'tuesday');
tuesdayText.appendChild(tuesdayTextImg);

// Landing page Lebron Head
const lebronWelcome = document.querySelector('.lebron-welcome-head');
const lebronWelcomeImg = document.createElement('img');
lebronWelcomeImg.setAttribute('src', getIconFilePath('lebron-welcome'));
lebronWelcomeImg.setAttribute('alt', 'LeBron');
lebronWelcome.appendChild(lebronWelcomeImg);

// Start Game Button
const startGameBtn = document.querySelector('.start-game-btn');
startGameBtn.innerHTML = `Start Game`;

// Score Display
const scoreContainer = document.querySelector('#score-container');
const scoreDisplay = document.createElement('div');
scoreDisplay.innerHTML = `${points}`;
scoreContainer.appendChild(scoreDisplay);

// Gameover
const gameover = document.querySelector('.gameover');
const gameoverDisplay = document.createElement('div');
gameoverDisplay.classList.add('play-btn');
gameoverDisplay.innerHTML = `

`;
gameover.appendChild(gameoverDisplay);

// Game
const addScore = () => {
  if (lives > 0) {
    points += 1;
    scoreDisplay.innerHTML = `${points}`
  }
};

const minusHeart = () => {
  updateSliderImg(slider);
  lives--;
  if (lives >= 0) {
    const heart = document.querySelector(`.heart-${lives}`);
    heart.classList.add('fade');
  }
  // Game Over
  if (lives === 0) {
    if (lives === 0) {
      clearInterval(timerId);
      gameover.classList.remove('hidden');
    }
  }
};

const addHeart = () => {
  lives++;
  lives = Math.min(lives, 4);
  const heart = document.querySelector(`.heart-${lives - 1}`);
  heart.classList.remove('fade');
};

// Generate random falling object
const generateFallingObject = () => {
  const fallingObj = getRandomObject();
  const randomX = getRandomXCoordinate();
  const scale = getScaleFromFallingObject(fallingObj);
  const itemToDrop = Bodies.rectangle(randomX, -100, 50, 50, {
    label: fallingObj,
    inertia: Infinity,
    render: {
      sprite: {
        texture: getIconFilePath(fallingObj),
        xScale: scale,
        yScale: scale
      }
    }
  });
  World.add(world, itemToDrop);
};

// Event listener for Left and Right Key Press
document.addEventListener('keydown', (event) => {
  const { x, y } = slider.velocity;
  if (event.keyCode === 37) {
    Body.setVelocity(slider, { x: x - 5, y });
  }
  if (event.keyCode === 39) {
    Body.setVelocity(slider, { x: x + 5, y });
  }
});

// Detecting two bodies touching
Events.on(engine, 'collisionStart', (event) => {
  event.pairs.forEach((collision) => {
    const { bodyA, bodyB } = collision;
    // Check if bodyA and bodyB are not lebron and border
    if (!checkCollisionBodies(bodyA, bodyB)) {
      const toBeRemoved = findFallingObj(bodyA, bodyB);
      if (toBeRemoved) {
        // If either bodyA or bodyB is lebron head
        if (bodyA.label === 'lebron-head' || bodyB.label === 'lebron-head') {
          if (toBeRemoved.label === 'taco') {
            addScore();
          }
          if (toBeRemoved.label === 'trophy' || toBeRemoved.label === 'bball') {
            minusHeart();
          }
          if (toBeRemoved.label === 'heart') {
            addHeart();
          }
          World.remove(world, toBeRemoved);
        } else if (bodyA.label === 'border' || bodyB.label === 'border') {
          World.remove(world, toBeRemoved);
        }
      }
    }
  });
});

let timerId;
const startGame = () => {
  timerId = setInterval(() => {
    const randomTime = Math.random() * 5000;
    setTimeout(() => {
      generateFallingObject();
    }, randomTime)
  }, 1000)
};

// Event Listeners

// Start Game Button
startGameBtn.addEventListener('click', () => {
  welcomeContainer.classList.add('hidden');
  gameContainer.classList.remove('hidden');
});

// const startBtn = document.querySelector('#start-btn');
// startBtn.addEventListener('click', () => {
//   startGame();
//   startBtn.setAttribute('disabled', true);
//   stopbtn.removeAttribute('disabled');
// });

// const stopbtn = document.querySelector('#stop-btn');
// stopbtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   startBtn.removeAttribute('disabled');
//   stopbtn.setAttribute('disabled', true);
// });

const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener('click', () => {
  gameover.classList.add('hidden');
});