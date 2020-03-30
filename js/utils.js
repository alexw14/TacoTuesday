const checkCollisionBodies = (a, b) => {
  const permanent = ['lebron-head', 'border'];
  if (permanent.includes(a.label) && permanent.includes(b.label)) {
    return true;
  }
  return false;
};

const findFallingObj = (a, b) => {
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
  const randomNum = Math.floor(Math.random() * 100);
  if (randomNum < 58) {
    return 'taco';
  } else if (randomNum >= 58 && randomNum < 78) {
    return 'trophy';
  } else if (randomNum >= 78 && randomNum < 98) {
    return 'bball';
  } else if (randomNum >= 98) {
    return 'heart';
  }
};

const getRandomXCoordinate = () => {
  // width of canvas is 375px
  let randomX = Math.floor(Math.random() * 375);
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

const getIconFilePath = (icon) => {
  if (icon === "taco") return './images/svg/Taco_Drop.svg';
  if (icon === "trophy") return './images/svg/Trophy_Drop.svg';
  if (icon === "bball") return './images/svg/Basketball_Drop.svg';
  if (icon === "heart") return './images/svg/Health.svg';
  if (icon === "lebron-head") return './images/Lebron_Head_Default.png';
  if (icon === "lebron-hit") return './images/Lebron_Head_Hit.png';
  if (icon === "taco-landing-page") return './images/svg/Taco.svg';
  if (icon === "taco-text") return './images/svg/Taco_Text.svg';
  if (icon === "tuesday-text") return './images/svg/Tuesday_Text.svg';
  if (icon === "lebron-start") return './images/Lebron_Head_Main.png';
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

const tacosProps = [
  {
    width: '100px',
    height: '100px',
    x: '-150px',
    y: '0px',
    angle: '-90deg'
  },
  {
    width: '55px',
    height: '55px',
    x: '70px',
    y: '40px',
    angle: '-25deg'
  },
  {
    width: '90px',
    height: '90px',
    x: '-130px',
    y: '170px',
    angle: '-5deg'
  },
  {
    width: '100px',
    height: '100px',
    x: '150px',
    y: '145px',
    angle: '-75deg'
  },
  {
    width: '90px',
    height: '90px',
    x: '-120px',
    y: '415px',
    angle: '-85deg'
  },
  {
    width: '140px',
    height: '140px',
    x: '155px',
    y: '300px',
    angle: '20deg'
  },
  {
    width: '120px',
    height: '120px',
    x: '-165px',
    y: '550px',
    angle: '-70deg'
  },
  {
    width: '55px',
    height: '55px',
    x: '0px',
    y: '630px',
    angle: '-5deg'
  },
  {
    width: '85px',
    height: '85px',
    x: '145px',
    y: '580px',
    angle: '-90deg'
  }
];