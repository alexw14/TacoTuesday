// Destructuring modules from Matter.js
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

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

// Generate random falling object
const generateFallingObject = () => {
  const fallingObj = getRandomObject();
  const randomX = Math.random() * width;
  const itemToDrop = Bodies.rectangle(randomX, 0, 50, 50, {
    label: fallingObj,
    inertia: Infinity,
    render: {
      sprite: {
        texture: getIconFilePath(fallingObj),
        xScale: 0.8,
        yScale: 0.8
      }
    }
  });
  World.add(world, itemToDrop);
}

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
    if (!checkCollisionBodies(bodyA, bodyB)) {
      const toBeRemoved = getFallingBodies(bodyA, bodyB);
      World.remove(world, toBeRemoved);
    }
  });
});

let timerId;
const startGame = () => {
  timerId = setInterval(() => {
    const randomTime = Math.random() * 10000;
    setTimeout(() => {
      generateFallingObject();
    }, randomTime)
  }, 1000)
}

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', () => {
  // generateFallingObject();
  startGame();
});

const stopbtn = document.querySelector('#stop-btn');
stopbtn.addEventListener('click', () => {
  clearInterval(timerId);
});
