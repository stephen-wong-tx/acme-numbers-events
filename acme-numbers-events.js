class Game {
  constructor() {
    this.gameNumbers = [];
    this.sum = 0;
    this.average = 0;
  }
  updateAverage() {
    // let sum = this.gameNumbers.reduce(function(result, number) {
    //   result += number;
    //   return result;
    // },0);
    if (this.gameNumbers.length < 1) this.average = 0;
    else this.average = Math.round(this.sum / this.gameNumbers.length);
  }
  newInstance() {
    return new Game;
  }
}

let currentGame = new Game;

const mainButton = document.getElementById("main-button");
const resetButton = document.getElementById("reset");
const ulNumbers = document.getElementById("number-list");
const averageElement = document.getElementById("average");

ulNumbers.addEventListener('click', function(event) {
  if(event.target.tagName === "LI") {
    let number = event.target.innerText;
    currentGame.sum -= number;
    currentGame.gameNumbers.pop();
    currentGame.updateAverage();
    averageElement.innerHTML = currentGame.average;
    event.target.remove();
  }
})

mainButton.addEventListener('click', function() {
  
  function generateNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(100);
    return Math.floor(Math.random() * (max - min +1) + min);
  }
  let number = generateNumber();

  let li = document.createElement('li');
  li.innerText = number;
  ulNumbers.appendChild(li);
  currentGame.gameNumbers.push(number);
  currentGame.sum += number;
  currentGame.updateAverage();
  averageElement.innerHTML = currentGame.average;
})

resetButton.addEventListener('click', function() {
  console.log("resetting average instance")
  function removeULChildrenNodes() {
    while (ulNumbers.firstChild) {
      ulNumbers.removeChild(ulNumbers.firstChild);
    }
  }
  removeULChildrenNodes();
  currentGame = currentGame.newInstance();
  averageElement.innerHTML = currentGame.average;
  return new Game();
})

// Testing some toggle functionality to the 'main-button' element
function toggle(event) {
  console.log('clicked! again!');
  let button = event.target;
  console.log(button);
  // if (button.tagName === 'INPUT') {}
  if (button.id === "main-button") {  
    if (button.className === 'clicked') button.className = "reset";
    else button.className = 'clicked';
  }
}

// function createNumber(event) {
//   let button = event.target;
//   if (button.id === "main-button") {
    
//   }
// }

// const clickButton = addEventListener('click', toggle);
