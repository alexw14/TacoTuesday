const isTouching = (a, b) => {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const moveSlider = (element, amount, direction) => {
  let current = element.style.transform.replace('translate', '').match(/-?\d+/g);
  current = parseInt(current[0]);
  if (direction === 'left' && current > -140) {
    element.style.transform = `translate(${current - amount}px, 0px)`;
  }
  if (direction === 'right' && current < 140) {
    element.style.transform = `translate(${current + amount}px, 0px)`;
  }
}

const moveDown = (element, amount) => {
  let current = element.style.transform.replace('translate', '').match(/-?\d+/g);
  let currX = parseInt(current[0]);
  let currY = parseInt(current[1]);
  element.style.transform = `translate(${currX}px, ${currY + amount}px)`;
}

const randomizeArray = (arr) => {
  let i = arr.length;
  while (i > 0) {
    let j = Math.floor(Math.random() * i);
    i--;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}