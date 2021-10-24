let order = [];
let clickedOrder = [];
let score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (i in order ) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  }, number);
}

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} pontos\nVocê acertou!`);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

let createColorElement = (colorSelected) => {
  switch (colorSelected) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
  }
}

let nextLevel = () => {
  score++;
  shuffleOrder();
}

let gameOver = () => {
  alert(`Pontuação: ${score} pontos\nVocê perdeu!`);
  order = [];
  clickedOrder = [];
  playGame();
}

let playGame = () => {
  alert('Iniciando jogo');
  score = 0;

  nextLevel();
}

green.addEventListener("click", () => click(0));
red.addEventListener("click", () => click(1));
yellow.addEventListener("click", () => click(2));
blue.addEventListener("click", () => click(3));


playGame();