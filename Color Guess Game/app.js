const colorsDiv = document.querySelector(".colors");
const resetBtn = document.querySelector("button");
let rgbQuestHeader = document.querySelector("h3");
let color1, color2, color3, color4, color5, color6;
let currentColor, currentScore = 0;


class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgbValue = "rgb(" + r + "," + g + "," + b + ")";
  }

  createColor() {
    let colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = this.rgbValue;
    colorDiv.classList.add("color");
    colorDiv.id = this.rgbValue;
    colorsDiv.appendChild(colorDiv);
  }

  getRgbValue() {
    return this.rgbValue;
  }
}

function startGame() {
  generateRandomRGBColors();
  let colorArrays = [color1, color2, color3, color4, color5];
  currentColor = colorArrays[Math.floor(Math.random() * 5)].getRgbValue();
  rgbQuestHeader.innerHTML = currentColor;
  color1.createColor();
  color2.createColor();
  color3.createColor();
  color4.createColor();
  color5.createColor();
  checkAnswerIsRight();
}
function generateRandomRGBColors() {
    color1 = "";
    color2 = "";
    color3 = "";
    color4 = "";
    color5 = "";
  color1 = new Color(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );
  color2 = new Color(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );
  color3 = new Color(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );
  color4 = new Color(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );
  color5 = new Color(
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  );

}
function checkAnswerIsRight(){
    const colors = document.querySelectorAll(".color");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", () => {
    if (colors[i].id == currentColor) {
      currentScore += Math.floor(Math.random() * 21 + 1);
      document.body.style.backgroundColor = currentColor;
      ResetGame();
    } else {
      currentScore -= Math.floor(Math.random() * 11 + 1);
    }
    document.querySelector(".score").innerHTML = currentScore;
  });
}
}
function ResetGame(){

    let div = document.querySelector(".colors");
    while(div.firstElementChild){
       div.removeChild(div.firstElementChild);
    }
    startGame();
}

startGame();
resetBtn.addEventListener("click", ResetGame);
