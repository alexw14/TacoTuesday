const checkCollisionBodies = (a, b) => {
  const fixed = ['lebron-head', 'border'];
  if (fixed.includes(a.label) && fixed.includes(b.label)) {
    return true;
  }
  return false;
};

const getFallingBodies = (a, b) => {
  const fallingObjs = ['taco', 'trophy', 'bball', 'heart'];
  if (fallingObjs.includes(a.label) && fallingObjs.includes(b.label)) {
    return null;
  }
  if (a.label === 'lebron-head' || a.label === 'border') {
    return b;
  } else {
    return a;
  }
};

const getRandomObject = () => {
  const randomNum = Math.random() * 100;
  if (randomNum < 55) {
    return 'taco';
  } else if (randomNum >= 55 && randomNum < 75) {
    return 'trophy';
  } else if (randomNum >= 75 && randomNum < 95) {
    return 'bball';
  } else if (randomNum >= 95) {
    return 'heart';
  }
};

const getIconFilePath = (icon) => {
  if (icon === "taco") return './images/svg/Taco_Drop.svg';
  if (icon === "trophy") return './images/svg/Trophy_Drop.svg';
  if (icon === "bball") return './images/svg/Basketball_Drop.svg';
  if (icon === "heart") return './images/svg/Health.svg';
  if (icon === "lebron-head") return './images/Lebron_Head_Default.png';
  if (icon === "lebron-hit") return './images/Lebron_Head_Hit.png';
};

const getRandomXCoordinate = () => {
  // width of canvas is 375px
  let randomX = Math.random() * 375;
  // randomX needs to be in range of 26 - 349 so as to not collide with left or right border
  if (randomX < 26) {
    randomX += 25;
  } else if (randomX > 349) {
    randomX -= 25;
  }
  return randomX;
};

const getScaleFromFallingObject = (obj) => {
  if (obj !== 'heart') {
    return 0.8;
  } else if (obj === 'heart') {
    return 0.3;
  }
};

const updateSliderImg = (slider) => {
  slider.render.sprite.texture = getIconFilePath('lebron-hit');
  slider.render.sprite.xScale = 0.1;
  slider.render.sprite.yScale = 0.1;
  setTimeout(() => {
    slider.render.sprite.texture = getIconFilePath('lebron-head');
    slider.render.sprite.xScale = 0.15;
    slider.render.sprite.yScale = 0.15;
  }, 1000);
};

const addScore = () => {
  points += 1;
  scoreDisplay.innerHTML = `${points}`
};

const minusScore = () => {
  updateSliderImg(slider);
  lives--;
  if (lives >= 0) {
    const heart = document.querySelector(`.heart-${lives}`);
    heart.classList.add('fade');
  }
};

const addHeart = () => {
  lives++;
  lives = Math.min(lives, 4);
  const heart = document.querySelector(`.heart-${lives - 1}`);
  heart.classList.remove('fade');
};