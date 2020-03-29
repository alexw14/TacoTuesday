const getFallingBodies = (a, b) => {
  if (a.label === 'lebron-head' || a.label === 'border') {
    return b;
  } else {
    return a;
  }
}

const checkCollisionBodies = (a, b) => {
  const fixed = ['lebron-head', 'border'];
  if (fixed.includes(a.label) && fixed.includes(b.label)) {
    return true;
  }
  return false;
}

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
}

const getIconFilePath = (icon) => {
  if (icon === "taco") return './images/svg/Taco_Drop.svg';
  if (icon === "trophy") return './images/svg/Trophy_Drop.svg';
  if (icon === "bball") return './images/svg/Basketball_Drop.svg';
  if (icon === "heart") return './images/svg/Health.svg';
  if (icon === "lebron-head") return './images/Lebron_Head_Default.png';
};