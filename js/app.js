const app = document.querySelector("#app");
app.innerHTML = `
  <div class="settings"></div>
  <div class="start-container"></div>
  <div class="game-container hidden">
    <div class="hearts-container"></div>
    <div class="score-container"></div>
    <div class="game-area"></div>
  </div>
  <div class="play-again-container hidden"></div>
`;

// Destructuring modules from Matter.js
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

// Environment
const gameContainer = document.querySelector(".game-container");
const gameArea = document.querySelector(".game-area");
const width = 375;
const height = 667;
const startingLives = 4;
const state = {
  lives: 0,
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
  element: gameArea, // reference to where the canvas is to be inserted
  engine: engine, // reference to the engine to be used
  options: {
    width,
    height,
    background: "#FDBA21",
    wireframes: false
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
  Bodies.rectangle(0, height / 2, 1, height, {
    label: "border",
    isStatic: true,
    render: { fillStyle: "transparent" }
  }),
  // right border
  Bodies.rectangle(width, height / 2, 1, height, {
    label: "border",
    isStatic: true,
    render: { fillStyle: "transparent" }
  }),
  // bottom border
  Bodies.rectangle(width / 2, height, width, 50, {
    label: "border",
    isStatic: true,
    render: { fillStyle: "transparent" }
  })
];
World.add(world, borders);

// Lebron head slider
const slider = Bodies.rectangle(width / 2, height - 200, 50, 50, {
  label: "lebron-head",
  isStatic: false,
  inertia: Infinity,
  render: {
    sprite: {
      texture: getIconFilePath("lebron-head"),
      xScale: 0.15,
      yScale: 0.15
    }
  }
});
World.add(world, slider);

// Settings icon
const settingsBtn = document.querySelector(".settings");
const settingsDisplay = document.createElement("div");
settingsDisplay.classList.add("settings-display", "hidden");
settingsDisplay.innerHTML = "Use left and right arrow keys to move";
settingsBtn.appendChild(settingsDisplay);

// Landing page
const startContainer = document.querySelector(".start-container");
startContainer.innerHTML = `
  <div class="tacos"></div>
  <div class="taco-text"></div>
  <div class="lebron-start-head"></div>
  <div class="tuesday-text"></div>
  <div class="start-game-btn"></div>
`;

// Tacos on start screen
const startContainerTacos = document.querySelector(".start-container .tacos");
tacosProps.forEach(t => {
  const taco = document.createElement("div");
  taco.classList.add("taco");
  taco.style.transform = `translate(${t.x}, ${t.y}) rotate(${t.angle})`;
  taco.style.width = t.width;
  taco.style.height = t.height;
  startContainerTacos.appendChild(taco);
});

// Start game button
const startGameBtn = document.querySelector(".start-game-btn");
startGameBtn.innerHTML = "Start Game";

// Hearts display
const heartsContainer = document.querySelector(".hearts-container");
for (let i = 0; i < startingLives; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart", `heart-${i}`);
  heartsContainer.appendChild(heart);
}

// Score display
const scoreContainer = document.querySelector(".score-container");
const scoreDisplay = document.createElement("div");
scoreDisplay.innerHTML = `${state.points}`;
scoreContainer.appendChild(scoreDisplay);

// Play again
const playAgainContainer = document.querySelector(".play-again-container");
const playAgainBtn = document.createElement("div");
playAgainBtn.classList.add("play-again-btn");
playAgainContainer.appendChild(playAgainBtn);
const playAgainText = document.createElement("div");
playAgainText.classList.add("play-again-text");
playAgainText.innerHTML = `
  <div>Game Over</div>
  <div>More Tacos?</div>
`;
playAgainContainer.appendChild(playAgainText);

// Game logic

const addScore = () => {
  if (state.lives > 0) {
    state.points += 1;
    scoreDisplay.innerText = `${state.points}`;
  }
};

const addHeart = () => {
  if (state.lives < 4 && state.lives > 0) {
    state.lives++;
    const heart = document.querySelector(`.heart-${state.lives - 1}`);
    heart.classList.remove("fade");
  }
};

const minusHeart = () => {
  updateSliderImg(slider);
  state.lives--;
  if (state.lives >= 0) {
    const heart = document.querySelector(`.heart-${state.lives}`);
    heart.classList.add("fade");
  }
  // Game Over
  if (state.lives === 0) {
    clearInterval(state.timerId);
    playAgainContainer.classList.remove("hidden");
  }
};

// Generate one random falling object
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

const handleGameCalcAndRemoveObj = (bodyA, bodyB) => {
  const toBeRemoved = findFallingObj(bodyA, bodyB);
  if (toBeRemoved) {
    // If either bodyA or bodyB is lebron head
    if (bodyA.label === "lebron-head" || bodyB.label === "lebron-head") {
      if (toBeRemoved.label === "taco") {
        addScore();
      }
      if (toBeRemoved.label === "trophy" || toBeRemoved.label === "bball") {
        minusHeart();
      }
      if (toBeRemoved.label === "heart") {
        addHeart();
      }
      World.remove(world, toBeRemoved);
    } else if (bodyA.label === "border" || bodyB.label === "border") {
      World.remove(world, toBeRemoved);
    }
  }
};

const initGame = () => {
  state.lives = startingLives;
  const allHearts = document.querySelectorAll(".heart");
  allHearts.forEach(h => {
    h.classList.remove("fade");
  });
  state.points = 0;
  scoreDisplay.innerText = `${state.points}`;
  state.timerId = null;
};

const startGame = () => {
  initGame();
  state.timerId = setInterval(() => {
    const randomTime = Math.random() * 5000;
    setTimeout(() => {
      generateFallingObject();
    }, randomTime);
  }, 500);
};

// Event Listeners

// Detecting two bodies touching
Events.on(engine, "collisionStart", event => {
  event.pairs.forEach(collision => {
    const { bodyA, bodyB } = collision;
    // Check if bodyA and bodyB are not lebron and border
    if (!checkCollisionBodies(bodyA, bodyB)) {
      handleGameCalcAndRemoveObj(bodyA, bodyB);
    }
  });
});

// Left and Right Key Press
document.addEventListener("keydown", event => {
  const { x, y } = slider.velocity;
  if (event.keyCode === 37) {
    Body.setVelocity(slider, { x: x - 5, y });
  }
  if (event.keyCode === 39) {
    Body.setVelocity(slider, { x: x + 5, y });
  }
});

// Hover on settings icon
settingsBtn.addEventListener("mouseenter", () => {
  settingsDisplay.classList.remove("hidden");
});
settingsBtn.addEventListener("mouseleave", () => {
  settingsDisplay.classList.add("hidden");
});

// Play Again Button
playAgainBtn.addEventListener("click", () => {
  playAgainContainer.classList.add("hidden");
  gameContainer.classList.add("hidden");
  startContainer.classList.remove("hidden");
});

// Start Game Button
startGameBtn.addEventListener("click", () => {
  startContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  startGame();
});
