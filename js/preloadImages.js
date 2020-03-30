const preloadImages = [];
function preload() {
  for (let i = 0; i < arguments.length; i++) {
    preloadImages[i] = new Image();
    preloadImages[i].src = preload.arguments[i];
  }
};

preload(
  './images/svg/Taco_Drop.svg',
  './images/svg/Trophy_Drop.svg',
  './images/svg/Basketball_Drop.svg',
  './images/svg/Health.svg',
  './images/Lebron_Head_Default.png',
  './images/Lebron_Head_Hit.png',
  './images/svg/Taco.svg',
  './images/svg/Taco_Text.svg',
  './images/svg/Tuesday_Text.svg',
  './images/Lebron_Head_Main.png',
  './images/svg/Play.svg'
);