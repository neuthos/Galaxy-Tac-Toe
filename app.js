const divStatus = document.querySelector(".status");
const divReset = document.querySelector(".reset");
const divKotak = document.querySelectorAll(".kotak");
const xSymbol = "🪐";
const oSymbol = "🌎";

let gameOn = true;
let giliranX = true;
let winner = null;

// FUNCTION

const gantiSimbol = (string) => (string === "x" ? xSymbol : oSymbol);

const checkGameStatus = () => {
  const topLeft = divKotak[0].classList[1];
  const topMiddle = divKotak[1].classList[1];
  const topRight = divKotak[2].classList[1];
  const middleLeft = divKotak[3].classList[1];
  const middleMiddle = divKotak[4].classList[1];
  const middleRight = divKotak[5].classList[1];
  const bottomLeft = divKotak[6].classList[1];
  const bottomMiddle = divKotak[7].classList[1];
  const bottomRight = divKotak[8].classList[1];

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    gameOn = false;
    winner = topLeft;
    divStatus.innerHTML = `${gantiSimbol(topLeft)} Menang!`;
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    gameOn = false;
    winner = middleLeft;
    divStatus.innerHTML = `${gantiSimbol(middleLeft)} Menang!`;
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    gameOn = false;
    winner = bottomLeft;
    divStatus.innerHTML = `${gantiSimbol(bottomLeft)} Menang!`;
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    gameOn = false;
    winner = topLeft;
    divStatus.innerHTML = `${gantiSimbol(topLeft)} Menang!`;
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    gameOn = false;
    winner = topMiddle;
    divStatus.innerHTML = `${gantiSimbol(topMiddle)} Menang!`;
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    gameOn = false;
    winner = topRight;
    divStatus.innerHTML = `${gantiSimbol(topRight)} Menang!`; //aa
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    gameOn = false;
    winner = topLeft;
    divStatus.innerHTML = `${gantiSimbol(topLeft)} Menang!`;
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    gameOn = false;
    winner = topLeft;
    divStatus.innerHTML = `${gantiSimbol(topRight)} Menang!`;
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleMiddle &&
    middleLeft &&
    middleRight &&
    bottomLeft &&
    bottomRight &&
    bottomMiddle
  ) {
    gameOn = false;
    divStatus.innerHTML = "Seri, Main lagi kuy";
  }
};

// HANDLE EVENT
const fungsiReset = (e) => {
  giliranX = true;
  divStatus.innerHTML = `Selamat bermain!`;
  winner = null;
  for (const kotak of divKotak) {
    kotak.classList.remove("x");
    kotak.classList.remove("o");
  }
};

const klikKotak = (e) => {
  console.log(e.target.classList);
  if (e.target.classList[1] === "x" || e.target.classList[1] === "o") {
    return;
  }

  if (giliranX) {
    e.target.classList.add("x");
    checkGameStatus();
    giliranX = false;
  } else {
    e.target.classList.add("o");
    checkGameStatus();
    giliranX = true;
  }
};

divReset.addEventListener("click", fungsiReset);

for (const kotak of divKotak) {
  kotak.addEventListener("click", klikKotak);
}
