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
  if (randomNum < 50) {
    return 'taco';
  } else if (randomNum >= 50 && randomNum < 70) {
    return 'trophy';
  } else if (randomNum >= 70 && randomNum < 90) {
    return 'bball';
  } else if (randomNum >= 90) {
    return 'heart';
  }
};

const getIconFilePath = (icon) => {
  if (icon === "taco") return './images/svg/Taco_Drop.svg';
  if (icon === "trophy") return './images/svg/Trophy_Drop.svg';
  if (icon === "bball") return './images/svg/Basketball_Drop.svg';
  if (icon === "heart") return './images/svg/Health.svg';
  if (icon === "lebron-head") return './images/Lebron_Head_Default.png';
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