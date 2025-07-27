const listCells = document.querySelectorAll(".item");
const imageZombie = document.createElement("img");
imageZombie.src = "./src/images/vlad-2.jpg";
const imageBlood = document.createElement("img");
imageBlood.src = "./src/images/blood.png";
const start = document.getElementById("start-btn");
const aodioBu = document.getElementById("soundBu");
const aodioShot = document.getElementById("soundShot");
const btnBu = document.getElementById("sound-btn");
const hitCounterElement = document.getElementById("hit-counter");
const missCounterElement = document.getElementById("miss-counter");

let hitCounter = 0;
let missCounter = 0;
let randomIndex;
let isHit = false;
let setIntervalId;

const container = document.querySelector(".container");
container.style =
  "background-image: url('https://idei.club/uploads/posts/2021-10/1634162331_31-idei-club-p-koridor-v-podezde-interer-krasivo-foto-31.jpg');";

function checkGame() {
  if (missCounter >= 5) {
    clearInterval(setIntervalId);
    imageZombie.remove();
    start.textContent = "START";
    
    const gameOver = document.createElement("h1");
    gameOver.style = "text-content: center; color: white; font-weight: bold;";
    gameOver.textContent = "game over (((";
    
    const imageLoss = document.createElement("img");
    imageLoss.src = "./src/images/vlad.jpg"
    
    container.style = "display: block;";
    container.innerHTML = "";
    container.append(gameOver, imageLoss);
    return true;
  } else if (hitCounter >= 15) {
    clearInterval(setIntervalId);
    imageZombie.remove();
    start.textContent = "START";
    
    const youWinElement = document.createElement("h1");
    youWinElement.style =
    "text-content: center; color: white; font-weight: bold;";
    youWinElement.textContent = "You win!!!! Good killer!!!";

    const imageWin = document.createElement("img");
    imageWin.src = "./src/images/win_man.jpg"

    container.style = "display: block;";
    container.innerHTML = "";
    container.append(youWinElement, imageWin);
    return true;
  }
  return false;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function startGame() {
  
  hitCounter = 0;
  missCounter = 0;
  hitCounterElement.textContent = hitCounter;
  missCounterElement.textContent = missCounter;

  const messages = container.querySelectorAll("h1");
  messages.forEach((msg) => msg.remove());

  setIntervalId = setInterval(() => {
    if (!isHit && imageZombie.parentElement) {
      missCounter++;
      missCounterElement.textContent = missCounter;
    }

    if (checkGame()) return;

    randomIndex = getRandomIndex(listCells);
    listCells[randomIndex].append(imageZombie);
    imageBlood.remove();
  }, 790);
}

start.onclick = function () {
  if (start.textContent === "START") {
    start.textContent = "STOP";
    startGame();
  } else {
    clearInterval(setIntervalId);
    imageZombie.remove();
    start.textContent = "START";
  }
};

btnBu.onclick = function () {
  if (aodioBu.currentTime) {
    aodioBu.pause();
    aodioBu.currentTime = 0;
    btnBu.textContent = "SOUND ON";
  } else {
    aodioBu.play();
    btnBu.textContent = "SOUND OFF";
  }
};

imageZombie.addEventListener("click", () => {
  hitCounterElement.textContent = hitCounter++;
  aodioShot.currentTime = 0;
  aodioShot.play();
  imageZombie.remove();
  listCells[randomIndex].append(imageBlood);

  checkGame();
});
