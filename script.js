const newJokeButton = document.querySelector("#new-joke-button");
const revealButton = document.querySelector("#reveal-button");

const setupText = document.querySelector(".setup");
const punchlineText = document.querySelector(".punchline");

let currentJoke = null;

const getRandomDadJoke = () => {
  fetch("https://groandeck.com/api/v1/random")
  .then(response => response.json())
  .then(data => {
    currentJoke = data;
    setupText.textContent = data.setup;
    punchlineText.textContent = data.punchline;
    punchlineText.classList.remove("revealed");
    revealButton.textContent = "Show Punchline";
  })
}

getRandomDadJoke();

newJokeButton.addEventListener("click", () => {
  getRandomDadJoke();
})

revealButton.addEventListener("click", () => {
  const isRevealed = punchlineText.classList.toggle("revealed");
  revealButton.textContent = isRevealed ? "Hide Punchline" : "Show Punchline";
})