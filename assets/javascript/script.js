// OBJECT DECLARATIONS
const body = document.querySelector("body");
const container = document.createElement("div");
body.append(container);
container.classList.add("container");

const flipButton = document.createElement("button");
flipButton.innerHTML = "Flip 20 Coins";
body.append(flipButton);

const sound = document.createElement("audio");
sound.setAttribute("src", "./assets/audio/coins.mp3");

const coin = {
  state: 0,
  flip() {
    Math.random() > 0.5 ? (this.state = 0) : (this.state = 1);
  },
  toString() {
    return this.state === 0 ? "Heads" : "Tails";
  },
  toHTML() {
    const image = document.createElement("img");
    image.src = (this.state === 0 ? './assets/images/heads.jpg' : './assets/images/tails.jpg');
    image.classList.add("image");
    return image;
  },
};


// EVENT LISTENER(S)

flipButton.addEventListener("click", function () {
  container.innerHTML = "";
  sound.load();
  sound.play();
  display20Flips();
});


// FUNCTION DECLARATIONS


// Here I merged the adding text and adding images functions into one.
// 
const display20Flips = function() {
  display20Images();
}

const display20Images = function() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    const flipDiv = document.createElement("div");
    flipDiv.append(coin.toHTML());
    flipDiv.append(coin.toString());
    flipDiv.classList.add("flipDiv");
    container.append(flipDiv);
  }
}


