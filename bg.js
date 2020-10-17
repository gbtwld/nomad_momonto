const body = document.querySelector("body");

const IMG_NUMBER = 5;
const preNum = localStorage.getItem("bg");

function paintImage(imgNumber) {
  const image = new Image();
  localStorage.setItem("bg", imgNumber);
  image.src = `Images/${imgNumber}.jpg`;
  image.classList.add(`bgImage`);
  body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    if (preNum === number) {
      genRandom();
    } else {
    return number;
    }
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();